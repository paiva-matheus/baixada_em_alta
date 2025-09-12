#!/bin/sh
set -e

echo "🚀 Starting Baixada Santista News Application..."

# Check if database is ready
echo "⏳ Waiting for PostgreSQL to be ready..."
until nc -z postgres 5432; do
  echo "Waiting for database connection..."
  sleep 1
done
echo "✅ Database is ready!"

# Update Prisma client if schema changed
echo "🔄 Updating Prisma client..."
npm run db:generate

# Push schema changes to database (for development)
echo "📊 Updating database schema..."
npm run db:push

echo "✅ Database schema updated successfully!"

# Execute the main command
exec "$@"