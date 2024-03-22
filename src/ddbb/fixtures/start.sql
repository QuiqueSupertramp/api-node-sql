DROP DATABASE IF EXISTS bxwgsicfhw36ozdstxlt;
CREATE DATABASE bxwgsicfhw36ozdstxlt;

USE bxwgsicfhw36ozdstxlt;

CREATE TABLE IF NOT EXISTS users (
	id BINARY(16) PRIMARY KEY DEFAULT (UUID_TO_BIN(UUID())),
    name VARCHAR(50) NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50),
	dni VARCHAR(20),
    email VARCHAR(100),
    phone VARCHAR(20),
    birthdate DATE,
    gender ENUM('masculino','femenino'),
    active TINYINT DEFAULT 1,
    created_at timestamp NOT NULL DEFAULT (now()),
    CONSTRAINT UNIQUE_EMAIL UNIQUE (email)
);

CREATE TABLE IF NOT EXISTS roles (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role VARCHAR(15) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS users_roles (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	user_id BINARY(16) NOT NULL,
    role_id INT NOT NULL,
    CONSTRAINT FK_user_id FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT FK_role FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE IF NOT EXISTS seasons (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	season VARCHAR(9) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS categories (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS leagues (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    league VARCHAR(75) NOT NULL,
    gender ENUM('masculino', 'femenino', 'mixto') NOT NULL,
    category_id INT NOT NULL,

    UNIQUE (league, category_id, gender),
    CONSTRAINT fk_category_leagues FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE IF NOT EXISTS teams (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    gender ENUM('masculino', 'femenino', 'mixto') NOT NULL,
    season_id INT NOT NULL,
    category_id INT NOT NULL,
    league_id INT NOT NULL,

    UNIQUE (name, season_id, category_id, gender),
    CONSTRAINT fk_season_teams FOREIGN KEY (season_id) REFERENCES seasons(id),
    CONSTRAINT fk_category_teams FOREIGN KEY (category_id) REFERENCES categories(id),
    CONSTRAINT fk_league_teams FOREIGN KEY (league_id) REFERENCES leagues(id)
);

CREATE TABLE IF NOT EXISTS players (
	id INT NOT NULL AUTO_INCREMENT,
    user_id BINARY(16) NOT NULL,

    PRIMARY KEY (id),
    CONSTRAINT FK_user_id_players FOREIGN KEY (user_id) REFERENCES users(id)
);