# Alert Service - Alert Management

Manages surveillance alerts and notifications.

## Port
8083

## Endpoints
- `GET /alerts` - List all alerts
- `GET /alerts/{id}` - Get alert details
- `POST /alerts` - Create alert (internal only)
- `PUT /alerts/{id}/acknowledge` - Acknowledge alert
- `DELETE /alerts/{id}` - Delete alert

## Database Tables
- alerts (id, camera_id, type, message, image_url, confidence, status, created_at)

## Messaging
- Consumes detection events from RabbitMQ
- Publishes notifications for frontend