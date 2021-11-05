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

CREATE TABLE ingredients (
    id SERIAL PRIMARY KEY, 
    users_id TEXT,
    ingredients TEXT
);



DELETE FROM users WHERE name = '';

CREATE TABLE favRecipes(
    id SERIAL PRIMARY KEY, 
    users_id INTEGER,
    recipe_id INTEGER,
    title TEXT,
    img TEXT
);

