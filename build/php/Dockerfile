ARG PHP_VERSION=8.5-fpm
FROM php:"${PHP_VERSION}"

COPY --from=resource_code / /var/www/html
WORKDIR /var/www/html

#install step
RUN apt-get update && apt-get install -y --fix-missing \
    libonig-dev \
    libzip-dev \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    zip \
    libpq-dev \
    libicu-dev


#To run psql from command line
RUN apt-get install -y postgresql-client

RUN docker-php-ext-install pdo_mysql mbstring zip exif pcntl
RUN docker-php-ext-install pdo pdo_pgsql intl bcmath

RUN docker-php-ext-configure gd --with-freetype --with-jpeg && docker-php-ext-install -j$(nproc) gd

RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - \
    && apt-get install -y nodejs
#RUN npm install

#INSTALL COMPOSER
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

#SET GROUP AND USER
RUN groupmod -g 1000 www-data
RUN usermod -u 1000 -g www-data www-data
RUN chown www-data:www-data -R /var/www

USER www-data
ENTRYPOINT ["php-fpm"]