# Apex Drive

A premium, BMW-inspired productivity cockpit. The repository is an npm-workspace monorepo: a Next.js dashboard and a secure Express/Prisma REST API backed by PostgreSQL.

## Features

- Precision dark dashboard, task search/filtering, completion states, details and responsive mobile navigation
- Task CRUD, priority/category metadata, calendar endpoint, dashboard metrics and activity trail
- JWT authentication with bcrypt password hashes, validation, ownership checks and restricted CORS
- Prisma PostgreSQL schema with useful task/activity indexes

## Local setup

1. Copy `.env.example` to `backend/.env` and configure `DATABASE_URL` and a strong `JWT_SECRET`. Add `NEXT_PUBLIC_API_URL=http://localhost:4000/api` to `frontend/.env.local`.
2. `npm install`
3. `npm run prisma:generate -w backend && npm run prisma:migrate -w backend`
4. Run `npm run dev`, then open `http://localhost:3000`.

The dashboard ships with browser-local demo data so its interaction design can be previewed immediately. Connect its API client/auth screens to the supplied backend URL for persisted, user-owned production data.

## API

`POST /api/auth/register`, `POST /api/auth/login`, `POST /api/auth/logout`, `GET /api/auth/me`

`GET|POST /api/tasks`, `GET|PATCH|DELETE /api/tasks/:id`, `PATCH /api/tasks/:id/complete`, `PATCH /api/tasks/:id/uncomplete`

`GET /api/dashboard/stats`, `GET /api/dashboard/activity`, `GET /api/calendar`, `GET /api/health`

## Deployment

Deploy `frontend` to Vercel with root directory `frontend`. Deploy `backend` to Railway with root directory `backend`, build command `npm run build`, start command `npm start`; configure `DATABASE_URL`, `JWT_SECRET`, `CORS_ORIGIN` and `PORT`. Run `npx prisma migrate deploy` in Railway before serving traffic. Set Vercel `NEXT_PUBLIC_API_URL` to the Railway API URL and set Railway `CORS_ORIGIN` to the final Vercel origin.

No deployment or GitHub remote is configured in this workspace, so those actions require repository/account access.
