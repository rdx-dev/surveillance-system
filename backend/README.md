# Backend - Microservices

Spring Boot microservices architecture.

## Structure

- **api-gateway** (Port 8080) - API Gateway with GraphQL
- **auth-service** (Port 8081) - Authentication & Authorization
- **camera-service** (Port 8082) - Camera management & streaming
- **alert-service** (Port 8083) - Alert management
- **shared/common** - Shared utilities and DTOs

## Tech Stack
- Spring Boot 3.x
- Spring Security + JWT
- PostgreSQL
- Redis (caching)
- RabbitMQ (messaging)