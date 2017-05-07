DROP DATABASE IF EXISTS slanguage2;
CREATE DATABASE slanguage2;

\c slanguage2;

CREATE TABLE input (
  ID SERIAL PRIMARY KEY,
  word VARCHAR (255)
); 

INSERT INTO input (word) 
 VALUES ('test');

CREATE TABLE defs (
  ID SERIAL PRIMARY KEY,
  inputId INTEGER,
  word VARCHAR,
  urbanDef1 VARCHAR,
  urbanDef2 VARCHAR,
  urbanSent1 VARCHAR,
  urbanSent2 VARCHAR
);

INSERT INTO defs (inputId, word, urbanDef1, urbanDef2, urbanSent1, urbanSent2) 
 VALUES (1, 'word', 'urbanDef1', 'urbanDef2', 'urbanSent1', 'urbanSent2');
 