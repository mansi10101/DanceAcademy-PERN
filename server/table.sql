CREATE DATABASE yogaclass;

CREATE TABLE createuser(
    Email VARCHAR(20) PRIMARY KEY,
    first_name VARCHAR(10),
    last_name VARCHAR(30),
    Mobile INTEGER(11) NOT NULL,
    Age INTEGER,
    Gender VARCHAR(7),
    BATCH VARCHAR(10) NOT NULL,
    Fees BOOLEAN DEFAULT false
);