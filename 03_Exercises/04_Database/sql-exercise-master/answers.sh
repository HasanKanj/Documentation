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
   
     ### Creating Table

     
    10.  INSERT INTO graduates (ID,name,Age,Gender,Points) VALUES (4,'LAyal',18,'F',350);
    11.  UPDATE graduates set Graduation = '08/09/2018' WHERE name = 'Layal'
    12.   delete from students where id= '4'

   13.### Joins

    14.SELECT employees.Name, employees.Company, companies.Date FROM employees 
       INNER JOIN companies ON companies.Name = employees.Company
    
    15.SELECT employees.Name FROM employees 
       INNER JOIN companies ON companies.Name = employees.Company
       WHERE companies.Date < 2000

    16.SELECT companies.Name FROM employees 
       INNER JOIN companies ON companies.Name = employees.Company
       WHERE employees.Role = 'Graphic Designer'

    17.### Count & Filter


      18-SELECT id,name,age,gender, MAX(Points) FROM students
      19-SELECT  AVG(Points)  FROM students
      20-SELECT  COUNT(name)  FROM students where Points=500
      21-SELECT name FROM students WHERE name LIKE '%s%';
      22-SELECT * FROM students ORDER BY Points DESC;
