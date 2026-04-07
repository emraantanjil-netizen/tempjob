# Temp Job Marketplace

A minimal Android-native temporary job marketplace with a Node.js backend.

## Structure
- `backend/` — Express API, SQLite database, auth, job posting, applications, NID upload, admin review.
- `android-app/` — Android Jetpack Compose app skeleton.

## Run backend
1. Open a terminal in `backend/`.
2. Install dependencies: `npm install`.
3. Start server: `npm run dev` or `npm start`.
4. API is available at `http://localhost:4000`.

## Android app
1. Open `android-app/` in Android Studio.
2. Sync Gradle and run the app.
3. The app uses `10.0.2.2:4000` to reach the backend when running on an Android emulator.

## Admin portal
1. Open `admin-portal/index.html` in a browser.
2. Login with the default admin account: `admin@tempjob.com` / `Admin@123`.
3. Review pending jobs and user verifications.

## Next steps
- wire the Android UI to backend endpoints
- implement map search and route integration
- build the admin portal UI and connect admin routes
- add production-ready authentication, validation, and error handling
