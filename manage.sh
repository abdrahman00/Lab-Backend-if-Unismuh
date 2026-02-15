#!/bin/bash

# Helper script untuk mengelola NestJS Backend Lab

case "$1" in
  start)
    echo "Starting all services..."
    docker-compose up -d
    echo "Services started!"
    echo "API: http://localhost:3021"
    echo "Swagger: http://localhost:3021/api"
    ;;
  
  start-dev)
    echo "Starting development mode..."
    docker-compose -f docker-compose.dev.yml up -d
    echo "Development mode started!"
    echo "API: http://localhost:3021"
    echo "Swagger: http://localhost:3021/api"
    ;;
  
  stop)
    echo "Stopping all services..."
    docker-compose down
    echo "Services stopped!"
    ;; 
  restt)
    echo "Restarting services..."
    docker-compose restart
    echo "Services restarted!"
    ;; 
  logs)
    echo "Showing logs..."
    docker-compose logs -f app
    ;;
  
  rebuild)
    echo "Rebuilding and restarting..."
    docker-compose down
    docker-compose up --build -d
    echo "Rebuild complete!"
    echo "API: http://localhost:3021"
    echo "Swagger: http://localhost:3021/api"
    ;;
  
  reset)
    echo "Resetting database (this will delete all data)..."
    read -p "Are you sure? (y/N): " confirm
    if [[ "$confirm" == "y" || "$confirm" == "Y" ]]; then
      docker-compose down -v
      docker-compose up -d
      echo "Database reset complete!"
    else     echo "Reset cancelled"
    fi   ;;
  
  shell)
    echo "Opening shell in app container..."
    docker-compose exec app sh
    ;;
  
  db-shell)
    echo "Opening PostgreSQL shell..."
    docker-compose exec db psql -U myuser -d median-db
    ;;
  
  status)
    echo "Service status:"
    docker-compose ps
    ;;
  
  seed)
    echo "Seeding database..."
    docker-compose exec app sh -c "npm run seed"
    echo "Seeding complete!"
    ;; 
  *)   echo "NestJS Backend Lab - Helper Script"
    echo ""
    echo "Usage: ./manage.sh [command]"
    echo ""
    echo "Commands:"
    echo "  start       - Start all services (production mode)"
    echo "  start-dev   - Start in development mode with hot reload"
    echo "  stop        - Stop all services"
    echo "  restart     - Restart services"
    echo "  logs        - Show application logs"
    echo "  rebuild     - Rebuild and restart services"
    echo "  reset       - Reset database (WARNING: deletes all data)"
    echo "  shell       - Open shell in app container"
    echo "  db-shell    - Open PostgreSQL shell"
    echo "  status      - Show service status"
    echo "  seed        - Seed database with sample data"
    echo ""
    echo "Examples:"
    echo "  ./manage.sh start"
    echo "  ./manage.sh logs"
    echo "  ./manage.sh stop"
    ;;
esac
