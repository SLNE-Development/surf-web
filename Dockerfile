FROM php:8.2

# Update Container
RUN apt-get update -y && apt-get install -y openssl zip unzip git curl libbz2-dev libicu-dev libpng-dev libjpeg-dev libfreetype6-dev libonig-dev libxml2-dev libzip-dev libpq-dev libcurl4-openssl-dev libssl-dev zlib1g-dev

# Install PHP Extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install pdo
RUN docker-php-ext-install mbstring
RUN docker-php-ext-install pdo_mysql
RUN docker-php-ext-install bz2
RUN docker-php-ext-install intl
RUN docker-php-ext-install curl
RUN docker-php-ext-install gd
RUN docker-php-ext-install gettext
RUN docker-php-ext-install fileinfo
RUN docker-php-ext-install exif
RUN docker-php-ext-install zip
RUN docker-php-ext-install ctype
RUN docker-php-ext-install dom
RUN docker-php-ext-install filter
RUN docker-php-ext-install hash
RUN docker-php-ext-install openssl
RUN docker-php-ext-install pcre
RUN docker-php-ext-install session
RUN docker-php-ext-install tokenizer
RUN docker-php-ext-install xml

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Set Working Directory
WORKDIR /app
COPY . /app

# Run Server
CMD php artisan serve --host=0.0.0.0 --port=8000

# Expose Port
EXPOSE 8000
