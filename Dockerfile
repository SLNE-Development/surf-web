FROM php:8.2

# Update Container
RUN apt-get update -y && apt-get install -y openssl zip unzip git curl libbz2-dev libicu-dev libpng-dev libjpeg-dev libfreetype6-dev libonig-dev libxml2-dev libzip-dev

# Install PHP Extensions
RUN apt-get install -y libonig-dev libpq-dev
RUN docker-php-ext-install pdo mbstring pdo_mysql bz2 intl curl gd mbstring gettext fileinfo exif zip ctype dom filter hash openssl pcre session tokenizer xml

# Set Working Directory
WORKDIR /app
COPY . /app

# Run Server
CMD php artisan serve --host=0.0.0.0 --port=8000

# Expose Port
EXPOSE 8000
