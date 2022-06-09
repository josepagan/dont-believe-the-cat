-- Up
CREATE TABLE User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT  NOT NULL UNIQUE,
    homeId INTEGER KEY REFERENCES Home(id)

);

CREATE TABLE Home (
    id INTEGER PRIMARY KEY AUTOINCREMENT
    
);

CREATE TABLE Cat (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    homeId INTEGER KEY REFERENCES Home(id)
);

INSERT INTO User(name,email) VALUES ('Jose','jm.pagan@omg.com');






--Down
-- DROP TABLE Cat;
-- DROP TABLE Home;
-- DROP TABLE User;

