-- DROP DATABASE IF EXISTS exampledb;
-- CREATE DATABASE exampledb;

-- DROP DATABASE IF EXISTS testdb;
-- CREATE DATABASE testdb;

DROP DATABASE IF EXISTS food_db;

CREATE DATABASE food_db;

USE food_db;

CREATE TABLE users(
    user_id INT(10) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR (20) NOT NULL,
    last_name VARCHAR (20) NOT NULL,
    email VARCHAR (220) NOT NULL,
    address VARCHAR(250) NOT NULL,
    state VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    zip INT(5),
        PRIMARY KEY(user_id)
);

CREATE TABLE food_listings(
    food_id VARCHAR(30) NOT NULL,
    food_name VARCHAR(200) NOT NULL,
    food_type VARCHAR(50) NOT NULL,
    food_description TEXT NOT NULL,
    price DECIMAL(3,2) NOT NULL,
    image_url TEXT NOT NULL,
    user_id INT(10) REFERENCES user(user_id),
    delivery BOOLEAN DEFAULT false,
        PRIMARY KEY(food_id)
        -- FOREIGN KEY (user_id) REFERENCES user(user_id)
);