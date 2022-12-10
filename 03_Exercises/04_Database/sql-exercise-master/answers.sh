    1. select Name from students 
    2. select * from students where Age > 30
    3. select name from students where Gender ='F' AND Age >=30
    4. select Points FROM students WHERE name ='Alex'
    5. INSERT INTO students (ID,name,Age,Gender,Points) VALUES (7,'Kanj',22,'M',400);
    6. UPDATE students SET Points = 350 WHERE name = 'Basma';
    7. UPDATE students SET Points = 150 WHERE name = 'Alex';
    
       CREATE TABLE graduates(
       ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
       NAME text NOT NULL UNIQUE,
       Age int,
       Gender text,
       Points int,
       Graduation text  );

    10  INSERT INTO graduates (ID,name,Age,Gender,Points) VALUES (4,'LAyal',18,'F',350);
    11   UPDATE graduates set Graduation = '08/09/2018' WHERE name = 'Layal'
    12   delete from students where id= '4'