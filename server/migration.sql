-- step 1; create erd. visualize data. idenity tables and columns. 
-- step 1.5; create database and connect to it. 
-- step 2: create table in migration file (don't forget to drop a table if it exists).
-- stp 3: seed the data.  

DROP table if exists joblistings;

CREATE TABLE joblistings (
    id SERIAL,
    title TEXT,
    salary TEXT,
    location TEXT   
);

INSERT INTO joblistings (title, salary, location)
VALUES ('Software Dev I', '$3.50 a week', 'remote, USA');
INSERT INTO joblistings (title, salary, location)
VALUES ('CEO of the World', '100 Trillion + Daily Bonus', 'D.C');
INSERT INTO joblistings (title, salary, location)			
VALUES ('Walt Disney Impersonator', 'tips only', 'Ur Moms Basement');
INSERT INTO joblistings (title, salary, location)
VALUES ('Waiter/ Waitress', '50,000 annual', 'Applebees 10648 Wedgewood Drive');
INSERT INTO joblistings (title, salary, location)
VALUES ('Senior Researcher', '175,000 annual', 'firstmark technologies 5552 world drive, el paso, texas');

