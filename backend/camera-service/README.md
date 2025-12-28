# Camera Service - Camera Management

Manages CCTV cameras and streaming.

## Port
8082

## Endpoints
- `GET /cameras` - List all cameras
- `GET /cameras/{id}` - Get camera details
- `POST /cameras` - Add new camera
- `PUT /cameras/{id}` - Update camera
- `DELETE /cameras/{id}` - Delete camera
- `POST /cameras/{id}/start` - Start stream
- `POST /cameras/{id}/stop` - Stop stream

## Database Tables
- cameras (id, name, stream_url, location, status, created_at)
- detection_zones (id, camera_id, zone_data, detection_type)

## Integration
- Calls ML service for object detection
- Publishes detection events to RabbitMQ