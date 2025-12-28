# Auth Service - Authentication & Authorization

Handles user authentication and JWT token management.

## Port
8081

## Endpoints
- `POST /auth/signup` - User registration
- `POST /auth/login` - User login
- `GET /auth/validate` - Validate JWT token
- `GET /auth/refresh` - Refresh token

## Database Tables
- users (id, email, password_hash, name, created_at)

## Security
- BCrypt password hashing
- JWT token generation
- Token expiration: 24 hours
