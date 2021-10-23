createdb meal_reboot;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password TEXT
);

CREATE TABLE favourites (
    id SERIAL PRIMARY KEY, 
    recipe TEXT,
    ingredients TEXT, 
    time INTEGER
);
