DROP DATABASE IF EXISTS finalProjectdb;
CREATE DATABASE finalProjectdb;
USE finalProjectdb;

CREATE TABLE user (
    user_id MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL,
    fName VARCHAR(20) NOT NULL ,
    lName VARCHAR(20) NOT NULL,
    email VARCHAR(40) UNIQUE NOT NULL,
    username VARCHAR(20) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_user_id PRIMARY KEY (user_id)
);

CREATE TABLE manga (
    manga_id MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL, 
    title VARCHAR(50) NOT NULL,
    author_id MEDIUMINT UNSIGNED NOT NULL,
    genre_id MEDIUMINT UNSIGNED NOT NULL,
    volume VARCHAR(30) NOT NULL,
    mangaDesc MEDIUMTEXT NOT NULL,
    releasedDate VARCHAR(30) NOT NULL,
    publisher_id MEDIUMINT UNSIGNED NOT NULL,
    price VARCHAR(25) NOT NULL,
    imgUrl MEDIUMTEXT, 
    manga_to_genre_id MEDIUMINT UNSIGNED NOT NULL,
    CONSTRAINT pk_manga_id PRIMARY KEY (manga_id)
    CONSTRAINT fk_author_id FOREIGN KEY (author_id) REFERENCES author (author_id),
    CONSTRAINT fk_genre_id FOREIGN KEY (genre_id) REFERENCES genre (genre_id),
    CONSTRAINT fk_publisher_id FOREIGN KEY (publisher_id) REFERENCES publisher (publisher_id),
);

    -- CONSTRAINT fk_manga_to_genre FOREIGN KEY (manga_to_genre) REFERENCES manga_to_genre (manga_to_genre)

CREATE TABLE author (
    author_id MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL,
    author VARCHAR(30) NOT NULL,
    CONSTRAINT pk_author_id PRIMARY KEY (author_id) 
);

CREATE TABLE genre (
    genre_id MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL,
    genre VARCHAR(50) NOT NULL,
    CONSTRAINT pk_genre_id PRIMARY KEY (genre_id)
);

CREATE TABLE publisher (
    publisher_id MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL,
    publisher VARCHAR(30) NOT NULL,
    CONSTRAINT pk_publisher_id PRIMARY KEY (publisher_id)
);

CREATE TABLE manga_to_genre (
    manga_id MEDIUMINT UNSIGNED NOT NULL,
    genre_id MEDIUMINT UNSIGNED NOT NULL,
    CONSTRAINT fk_manga FOREIGN KEY
    (manga_id) REFERENCES manga (manga_id),
    CONSTRAINT fk_genre FOREIGN KEY 
    (genre_id) REFERENCES genre (genre_id)
);

