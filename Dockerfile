FROM php:8.2

# Update Container
RUN apt-get update -y && apt-get install -y openssl zip unzip git curl

# Install PHP Extensions
RUN apt-get install -y libonig-dev libpq-dev
RUN docker-php-ext-install pdo mbstring pdo_mysql

# Set Working Directory
WORKDIR /app
COPY . /app

# Run Server
CMD php artisan serve --host=0.0.0.0 --port=8000

# Expose Port
EXPOSE 8000
