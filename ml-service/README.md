# ML Service - Object Detection

FastAPI service for AI-powered object detection using YOLOv8.

## Port
8000

## Endpoints
- `POST /detect` - Detect objects in image
- `POST /stream/start` - Start RTSP stream processing
- `POST /stream/stop` - Stop stream processing
- `GET /health` - Health check

## Models
- YOLOv8n (Nano) - Fast inference
- Custom trained models (future)

## Detection Types
- Human detection
- Vehicle detection
- Custom object detection (future)

## Integration
- Receives detection requests from camera-service
- Publishes detection results to RabbitMQ