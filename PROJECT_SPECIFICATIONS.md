# Temp Job Marketplace - Project Specifications

**Project Status**: April 7, 2026  
**Current Version**: 0.1.0  
**Architecture**: Full-stack (Node.js/Express backend + Android Jetpack Compose frontend + Admin portal)

---

## Executive Summary

A minimal Android-native temporary job marketplace platform designed for workers and employers to post, search, apply for, and manage short-term job opportunities. Features modern API design with cursor-based pagination, Zod validation, JWT authentication, and PostgreSQL persistence.

---

## 1. Technology Stack

### Backend
- **Runtime**: Node.js with Express.js 4.18.2
- **Database**: PostgreSQL 8.11.0
- **Authentication**: JWT (jsonwebtoken 9.0.0) + Passport.js with Google OAuth 2.0
- **Validation**: Zod 3.22.4
- **Password Hashing**: bcryptjs 2.4.3
- **Email**: Nodemailer 6.9.4
- **File Upload**: Multer 1.4.5-lts.1
- **CORS**: cors 2.8.5
- **Dev Tools**: Nodemon 3.0.1
- **Environment**: dotenv 16.3.1

### Frontend
- **Mobile**: Android Jetpack Compose (native)
- **Admin Portal**: HTML5 web interface
- **API Communication**: HTTP/REST

### Infrastructure
- **Port**: 4000 (default, configurable)
- **Database Port**: 5432 (PostgreSQL)
- **File Uploads**: Local filesystem storage in `/backend/uploads`

---

## 2. Database Schema

### Tables Overview

#### `users` (7 core user fields)
Foundation table for all users (workers, employers, admins)
- `id` (SERIAL PRIMARY KEY)
- `name`, `email` (UNIQUE), `password`
- `role` (ENUM: worker, employer, admin)
- `email_verified` (BOOLEAN, default: false)
- `verification_status` (ENUM: pending, approved, rejected)
- `google_id` (UNIQUE for OAuth)
- `nid_image_path` (National ID image storage)
- `profile_photo`
- `created_at`, `updated_at` (TIMESTAMPTZ with timezone)

#### `worker_profiles` (10 worker-specific fields)
Extended role-specific data for workers
- `id`, `user_id` (UNIQUE FK → users)
- `skills` (TEXT)
- `bio` (TEXT)
- `hourly_rate` (INTEGER)
- `years_experience` (INTEGER)
- `verified_badges` (TEXT[])
- `rating` (DECIMAL 3,2)
- `total_jobs_completed` (INTEGER)
- `created_at`, `updated_at`

#### `employer_profiles` (10 employer-specific fields)
Extended role-specific data for employers
- `id`, `user_id` (UNIQUE FK → users)
- `company_name` (TEXT)
- `company_description` (TEXT)
- `company_logo` (TEXT)
- `company_website` (TEXT)
- `employee_count` (TEXT)
- `industry` (TEXT)
- `verified` (BOOLEAN)
- `rating` (DECIMAL 3,2)
- `total_jobs_posted` (INTEGER)
- `created_at`, `updated_at`

#### `jobs` (13 job listing fields)
Posted job opportunities
- `id` (SERIAL PRIMARY KEY)
- `user_id` (FK → users, poster)
- `title`, `description` (TEXT)
- `category` (TEXT)
- `bdt_rate` (INTEGER, salary in BDT)
- `location_text` (TEXT city/area)
- `latitude`, `longitude` (DOUBLE PRECISION for map)
- `date_from`, `date_to` (DATE)
- `status` (ENUM: pending, approved, rejected, completed, cancelled)
- `is_active` (BOOLEAN)
- `created_at`, `updated_at`

#### `applications` (6 application fields)
Job applications from workers
- `id` (SERIAL PRIMARY KEY)
- `job_id` (FK → jobs)
- `applicant_id` (FK → users)
- `message` (TEXT)
- `status` (ENUM: pending, accepted, rejected, withdrawn)
- `applied_at`, `updated_at` (TIMESTAMPTZ)
- **UNIQUE constraint**: (job_id, applicant_id)

#### `saved_jobs` (3 bookmark fields)
Worker's saved/bookmarked jobs
- `id` (SERIAL PRIMARY KEY)
- `user_id` (FK → users)
- `job_id` (FK → jobs)
- `saved_at` (TIMESTAMPTZ)
- **UNIQUE constraint**: (user_id, job_id)

#### `refresh_tokens` (4 auth fields)
Session management tokens
- `id` (SERIAL PRIMARY KEY)
- `user_id` (FK → users)
- `token` (TEXT UNIQUE)
- `expires_at` (TIMESTAMPTZ)
- `created_at` (TIMESTAMPTZ)

#### `notifications` (8 notification fields)
In-app notifications
- `id` (SERIAL PRIMARY KEY)
- `user_id` (FK → users)
- `type` (TEXT: accepted, rejected)
- `title`, `message` (TEXT)
- `is_read` (BOOLEAN)
- `related_job_id` (INTEGER FK → jobs, optional)
- `created_at` (TIMESTAMPTZ)

### Indexes (28 total)
- **Primary Keys**: All tables
- **Foreign Keys**: Cascade delete enabled (ON DELETE CASCADE)
- **Full-Text Search**: GIN indexes on job title/description
- **Sort Performance**: Indexes on created_at, applied_at for pagination
- **Unique Constraints**: Email, google_id, job+applicant, user+job

### Data Integrity
- Email verification workflow
- NID image upload and admin review
- Google OAuth integration
- Soft/hard delete patterns with CASCADE

---

## 3. Authentication & Authorization

### Strategy
- **JWT-based stateless authentication**
- **Refresh token rotation** for security
- **Role-based access control** (RBAC)
- **Email verification** workflow
- **Google OAuth 2.0** integration

### Auth Endpoints
- `POST /auth/register` - Create new user (worker/employer)
- `POST /auth/login` - JWT + refresh token pair
- `POST /auth/refresh` - Rotate refresh tokens
- `POST /auth/logout` - Invalidate session
- `POST /auth/forgot-password` - Email-based recovery
- `POST /auth/reset-password` - Token-based password update
- `GET /auth/verify-email` - Email verification link
- `GET /auth/google` - OAuth initiation
- `GET /auth/google/callback` - OAuth callback
- `POST /auth/google/complete` - Complete OAuth signup
- `GET /auth/me` - Current user profile (protected)
- `POST /auth/upload-nid` - NID image upload (protected)

### Roles
1. **Worker** - Can apply for jobs, save jobs, view applications
2. **Employer** - Can post jobs, review applications, manage job listings
3. **Admin** - Can approve/reject jobs, manage users, verify profiles

### Middleware
- `authenticateToken`: JWT verification + user lookup from DB
- `requireWorker`: Role check for worker-only endpoints
- `requireEmployer`: Role check for employer-only endpoints
- `adminMiddleware`: Admin-only route protection

---

## 4. API Endpoints

### Response Format (All Endpoints)
```json
{
  "success": true/false,
  "data": {},
  "message": "Human-readable message",
  "error": "error_code",
  "details": [{ "field": "x", "message": "y", "code": "z" }],
  "pagination": { "limit": 20, "nextCursor": null, "hasMore": false }
}
```

### HTTP Status Codes
- **200** - GET, PUT, PATCH successful
- **201** - POST (resource creation)
- **204** - DELETE successful
- **400** - Validation/request errors
- **401** - Missing authentication
- **403** - Permission denied
- **404** - Resource not found
- **409** - Conflict (duplicate)
- **500** - Server error

### Job Endpoints (14 routes)

| Method | Endpoint | Auth | Query Params | Purpose |
|--------|----------|------|--------------|---------|
| GET | `/jobs` | No | limit, cursor, location, minPay, maxPay, category, search | List jobs (paginated) |
| GET | `/jobs/:id` | No | - | View job details |
| GET | `/jobs/pending` | Yes (admin) | limit, cursor | Admin: review pending jobs |
| POST | `/jobs` | Yes (emp) | - | Create job (pending approval) |
| PUT | `/jobs/:id/status` | Yes | - | Update job status |
| POST | `/jobs/:id/save` | Yes (worker) | - | Save job to bookmarks |
| DELETE | `/jobs/:id/save` | Yes (worker) | - | Remove from bookmarks |
| GET | `/jobs/applications/my` | Yes (worker) | limit, cursor | Worker's applications |
| GET | `/jobs/:id/applications` | Yes (emp) | limit, cursor | Employer's job applications |
| POST | `/jobs/:id/apply` | Yes (worker) | - | Apply for job |
| GET | `/jobs/notifications` | Yes | limit, cursor | User's notifications |
| GET | `/jobs/notifications/unread-count` | Yes | - | Count unread notifications |
| PATCH | `/jobs/notifications/:id/read` | Yes | - | Mark notification read |
| PATCH | `/applications/:id/status` | Yes (emp) | - | Accept/reject application |

### Pagination
- **Cursor-based** (not offset)
- **Query params**: `limit` (1-100, default 20), `cursor` (base64-encoded)
- **Response includes**: `nextCursor` (null = no more pages), `hasMore` boolean, `limit`
- **Cursor format**: Base64(JSON {createdAt, id})
- **Sorting**: DESC by timestamp, then by ID for stability

### Admin Endpoints (TBD)
- Job approval workflow
- User verification/rejection
- Platform analytics
- Moderation features

---

## 5. Validation (Zod Schemas)

### 15 Validation Schemas

**Auth Schemas:**
- `registerSchema` - Name (2-100), email, password (8+ chars, A-Za-z0-9), role
- `loginSchema` - Email, password required
- `refreshTokenSchema` - Refresh token required
- `forgotPasswordSchema` - Email required
- `resetPasswordSchema` - Token + new password (8+, A-Za-z0-9)
- `completeOauthSchema` - Role token + role (worker/employer)

**Job Schemas:**
- `createJobSchema` - Title (5-200), description (20-2000), rate (positive int), location (3-200), category (2-50 optional), lat/long (-90/180 range optional), dates optional
- `updateJobStatusSchema` - Status (pending/approved/rejected/completed/cancelled)
- `applyForJobSchema` - Message (optional text)
- `listJobsSchema` - Filters: location, minPay, maxPay, category, search (all optional), pagination: limit (1-100), cursor
- `updateApplicationStatusSchema` - Status (pending/accepted/rejected/withdrawn)
- `paginationSchema` - Limit (1-100 default 20), cursor (optional)

**Profile Schemas:**
- `updateProfileSchema` - Profile photo, role-specific fields
- `updateWorkerProfileSchema` - Skills, bio, hourly_rate, years_experience
- `updateEmployerProfileSchema` - Company name/description/logo/website, employee_count, industry

### Validation Features
- **Type coercion**: String numbers → integers
- **Sanitization**: Trim whitespace, lowercase emails
- **Field-level errors**: Returns detailed validation failures
- **Min/max constraints**: All text and numeric fields
- **Pattern matching**: Password complexity, coordinates ranges
- **Enum validation**: Role, status enums strictly enforced
- **Cross-field validation**: E.g., role token validation for OAuth

### Error Response Format
```json
{
  "success": false,
  "error": "Validation failed",
  "message": "Request validation failed",
  "details": [
    {
      "field": "email",
      "message": "Invalid email format",
      "code": "invalid_format"
    }
  ]
}
```

---

## 6. File Upload & Storage

### NID Image Upload
- **Endpoint**: `POST /auth/upload-nid`
- **Middleware**: `multer` single file upload
- **Storage**: Local filesystem `/backend/uploads`
- **Access**: Static served via `/uploads` route
- **Use Case**: KYC/verification for workers

### Configuration
```javascript
uploadDir: path.join(__dirname, 'uploads')
app.use('/uploads', express.static(uploadDir))
```

---

## 7. Email Services

### Features
- **Email verification** after registration
- **Password reset** via email link
- **Notifications** for job status updates

### Configuration
- **SMTP**: Configurable via environment (default: localhost:1025)
- **From Address**: `no-reply@tempjobmarketplace.com`
- **Templates**: HTML email generation
- **Secrets**: Email verification + password reset tokens (JWT-based)

### Email Flows
1. **Registration**: Sends verification link, user clicks to activate
2. **Forgot Password**: Sends reset link with token, user sets new password
3. **Notifications**: When employer accepts/rejects application

---

## 8. Environment Configuration

### .env Variables
```
# Server
PORT=4000
NODE_ENV=development

# Database
DATABASE_URL=postgres://user:pass@localhost:5432/tempjob
DB_SSL=false

# JWT
JWT_SECRET=bdt-temp-job-secret
EMAIL_VERIFY_SECRET={JWT_SECRET}-verify
PASSWORD_RESET_SECRET={JWT_SECRET}-reset

# Email
SMTP_HOST=localhost
SMTP_PORT=1025
SMTP_SECURE=false
SMTP_USER=
SMTP_PASS=
EMAIL_FROM=no-reply@tempjobmarketplace.com
EMAIL_VERIFY_BASE_URL=http://localhost:4000/auth/verify-email
PASSWORD_RESET_BASE_URL=http://localhost:4000/auth/reset-password

# Google OAuth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=http://localhost:4000/auth/google/callback
```

---

## 9. Features Implemented

### ✅ Complete
- **User Management**: Registration, login, JWT auth, refresh tokens, logout
- **Role System**: Worker, employer, admin with RBAC
- **Job Posting**: Title, description, rate, location with geolocation
- **Job Search**: Location, price range, category, full-text search filters
- **Job Applications**: Apply, list applications, track status
- **Saved Jobs**: Bookmark system with unique constraints
- **Application Management**: Accept/reject with notifications
- **Notifications**: In-app notifications on status changes + badge count
- **Email Services**: Verification, password reset
- **OAuth**: Google Sign-In integration
- **NID Verification**: Upload and admin review workflow
- **Pagination**: Cursor-based with stability
- **Validation**: Comprehensive Zod schemas
- **Error Handling**: Structured error responses with field details
- **Admin Features**: Pending job review, user verification

### 🔄 Partial
- **Admin Portal**: HTML skeleton, needs full UI implementation
- **Android App**: Jetpack Compose structure, needs API integration

### ⏳ Pending
- **Map Integration**: Geolocation search
- **Reviews/Ratings**: Worker and employer rating systems
- **Chat**: Real-time messaging
- **Payment**: Escrow and payment processing
- **Mobile Optimizations**: Performance, offline support

---

## 10. Project Structure

```
TempJobMarketplace/
├── backend/                         # Express API
│   ├── index.js                     # Entry point
│   ├── config.js                    # Configuration
│   ├── migrate.js                   # DB schema + seed
│   ├── package.json                 # Dependencies
│   ├── controllers/                 # Business logic
│   │   ├── authController.js        # Auth operations
│   │   ├── jobController.js         # Jobs/applications/notifications
│   │   ├── applicationController.js # Application-specific
│   │   └── adminController.js       # Admin functions
│   ├── routes/                      # Express routes
│   │   ├── auth.js                  # 13 auth endpoints
│   │   ├── jobs.js                  # 14 job endpoints
│   │   ├── applications.js          # Application status
│   │   └── admin.js                 # Admin operations
│   ├── middleware/                  # Express middleware
│   │   ├── authMiddleware.js        # JWT verification + role checks
│   │   ├── validationMiddleware.js  # Zod validation intercept
│   │   └── adminMiddleware.js       # Admin auth
│   ├── validators/                  # Zod schemas
│   │   └── schemas.js               # 15 validation schemas
│   ├── models/                      # Database
│   │   └── db.js                    # PostgreSQL connection
│   ├── passport/                    # OAuth strategies
│   │   └── googleStrategy.js        # Google OAuth config
│   ├── uploads/                     # NID/profile images
│   ├── REST_CONVENTIONS.md          # API documentation
│   ├── VALIDATION.md                # Validation system
│   ├── REFACTORING_SUMMARY.md       # Refactoring log
│   └── .env.example                 # Environment template
├── android-app/                     # Jetpack Compose app
│   ├── app/                         # Android source
│   ├── build.gradle                 # Gradle configuration
│   └── settings.gradle
├── admin-portal/                    # Web admin interface
│   └── index.html                   # Admin dashboard
└── README.md                        # Setup guide
```

---

## 11. Middleware Stack

### Order of Execution
1. **CORS** - Cross-origin headers
2. **Body Parser** - JSON parsing (express.json)
3. **Passport** - OAuth initialization
4. **Static Files** - Serve `/uploads`
5. **Route Handler** - Route matching
6. **Validation** - Zod schema validation (per route)
7. **Auth Middleware** - JWT verification (if required)
8. **Role Middleware** - RBAC checks (if required)
9. **Controller** - Business logic

### Custom Middleware
- `validate(schema)` - Zod validation factory
- `authenticateToken` - JWT decode + user fetch
- `requireWorker` - Worker role enforcer
- `requireEmployer` - Employer role enforcer

---

## 12. Error Handling

### Validation Errors (400)
```json
{
  "success": false,
  "error": "Validation failed",
  "message": "Request validation failed",
  "details": [
    {
      "field": "password",
      "message": "Password must be at least 8 characters",
      "code": "too_small"
    }
  ]
}
```

### Auth Errors (401/403)
```json
{
  "success": false,
  "error": "Invalid token",
  "message": "Token required" | "Invalid token"
}
```

### Resource Errors (404)
```json
{
  "success": false,
  "error": "Job not found",
  "message": "The specified job does not exist."
}
```

### Permission Errors (403)
```json
{
  "success": false,
  "error": "Access denied",
  "message": "You do not have permission to view applications for this job."
}
```

---

## 13. Deployment Considerations

### Requirements
- Node.js 14+
- PostgreSQL 11+
- Gmail/SMTP server for email
- Google OAuth credentials (optional)

### Production Checklist
- [ ] Set `NODE_ENV=production`
- [ ] Use strong `JWT_SECRET` (32+ chars)
- [ ] Configure external PostgreSQL (not localhost)
- [ ] Set up SMTP relay (SendGrid, AWS SES, etc.)
- [ ] Enable `DB_SSL=true` for remote databases
- [ ] Set up Google OAuth credentials for production domain
- [ ] Configure CORS origins properly
- [ ] Enable rate limiting
- [ ] Set up error logging/monitoring
- [ ] Use environment-specific email templates
- [ ] Configure upload directory with proper permissions
- [ ] Set up automated backups

---

## 14. Testing

### Test Coverage Areas
- Auth flows (register, login, refresh, OAuth)
- Job CRUD (create, list, update, delete)
- Application workflows (apply, accept, reject)
- Pagination (cursor validity, overflow)
- Validation (all schemas, edge cases)
- Permission checks (role-based access)
- Email delivery (if configured)
- NID upload and storage

### Test Files Provided
- `VALIDATION_EXAMPLES.sh` - 14+ cURL examples for validation
- `REST_EXAMPLES.sh` - 25+ cURL examples for all endpoints

---

## 15. Performance & Scalability

### Current Optimizations
- ✅ Cursor-based pagination (no offset)
- ✅ Database indexes on sort columns
- ✅ Full-text search indexes (GIN)
- ✅ Connection pooling (pg)
- ✅ JWT stateless auth (no session storage)
- ✅ Zod schema validation (fail-fast)

### Potential Bottlenecks
- ⚠️ File uploads stored locally (move to S3/CDN for scale)
- ⚠️ No caching layer (add Redis)
- ⚠️ Email sent synchronously (queue with Bull/RabbitMQ)
- ⚠️ No rate limiting (add express-rate-limit)
- ⚠️ No request logging (add Winston/Bunyan)

---

## 16. Security Practices

### Implemented
- ✅ Password hashing with bcryptjs (10 rounds)
- ✅ JWT with expiration (see refresh token system)
- ✅ Email verification workflow
- ✅ SQL injection prevention (parameterized queries)
- ✅ CORS enabled
- ✅ Role-based access control (RBAC)
- ✅ NID verification for KYC

### To Implement
- [ ] Rate limiting
- [ ] Request validation whitelisting
- [ ] HTTPS/TLS enforcement
- [ ] CSRF protection
- [ ] XSS protection headers
- [ ] Security audit logging
- [ ] Secrets rotation procedures
- [ ] API key management (if needed)

---

## 17. API Versioning Strategy

**Current Version**: v1 (implied, no prefix used)  
**Route Pattern**: `/auth`, `/jobs`, `/applications`

For future v2, consider:
- `/api/v2/jobs` structure
- Backwards compatibility headers
- Deprecation timelines

---

## 18. Dependencies Summary

| Package | Version | Purpose |
|---------|---------|---------|
| express | 4.18.2 | Web framework |
| pg | 8.11.0 | PostgreSQL driver |
| jsonwebtoken | 9.0.0 | JWT signing/verification |
| bcryptjs | 2.4.3 | Password hashing |
| zod | 3.22.4 | Schema validation |
| passport | 0.6.0 | OAuth framework |
| nodemailer | 6.9.4 | Email sending |
| multer | 1.4.5 | File upload |
| cors | 2.8.5 | CORS headers |
| dotenv | 16.3.1 | Environment variables |
| nodemon | 3.0.1 | Dev auto-reload |

---

## 19. Quick Start Commands

```bash
# Backend setup
cd backend
npm install
npm run migrate          # Initialize database
npm run dev             # Start with auto-reload
npm start               # Production start

# Test endpoints
bash REST_EXAMPLES.sh
bash VALIDATION_EXAMPLES.sh

# Android
# Open android-app/ in Android Studio and sync Gradle

# Admin portal
# Open admin-portal/index.html in browser
# Default: admin@tempjob.com / Admin@123
```

---

## 20. Known Limitations (v0.1.0)

1. **No real-time features** - No WebSocket/notification streaming
2. **File storage local** - Not scalable, use S3/GCS in production
3. **No chat/messaging** - Planned feature
4. **No ratings/reviews** - Schema ready, endpoints needed
5. **Email templates** - Basic text, needs HTML versions
6. **Admin portal** - UI skeleton only, wired endpoints incomplete
7. **Android app** - UI skeleton only, API integration incomplete
8. **No payment processing** - Escrow system not implemented
9. **No analytics** - Platform metrics not tracked
10. **No search elasticity** - Basic DB full-text search only

---

**Last Updated**: April 7, 2026  
**Maintainer**: Project Repository  
**License**: [Specify License]
