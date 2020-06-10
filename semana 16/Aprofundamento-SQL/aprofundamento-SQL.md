### Exercícios - Aprofundamento MySQL
##### Exercício 1
  a) Deleta a coluna "salary"
  b) Muda o nome da coluna de "gender" para "sex"
  c) Altera a quantidade de caracteres permitidos para a coluna "gender", de 6 para 255.
  d)`ALTER TABLE Actors CHANGE gender gender VARCHAR(100)`

##### Exercício 2
  a) 
  ~~~
UPDATE Actor
SET name = "Moacyr Franco", birth_date = "1936-10-05"
WHERE id = "003"
~~~
  b) 
  ~~~
 UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
~~~
  
  c)
~~~
UPDATE Actor
SET 
name = "Fernanda Montenegro", 
salary = 86000, 
birth_date = "1929-10-16",
gender = "female"
WHERE id = "005";
~~~

d)	UPDATE Actor SET  name = "Fernanda Montenegro",  salary = 86000,  birth_date = "1929-10-16", gender = "female" WHERE id = "985"	0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	


##### Exercício 3
a)`DELETE FROM Actor WHERE name = "Fernanda Montenegro";`
b) `DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;`


##### Exercício 4
a) `SELECT MAX(salary) FROM Actor;`
b) `SELECT MIN(salary) FROM Actor WHERE gender = "female";`
c) `SELECT COUNT(*) FROM Actor WHERE gender = "female";`
d) `SELECT SUM(salary) FROM Actor;`

##### Exercício 5
a) Ela conta quantas atrizes tem e quantos atores tem, e agrupam cada um dos tipos de gênero. 
b) `SELECT id, name FROM Actor ORDER BY name DESC;`
c) `SELECT * FROM Actor ORDER BY salary;`
d) `SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;`
e) 
~~~
SELECT AVG(salary), gender 
FROM Actor 
GROUP BY gender;
~~~

##### Exercício 6
a)`ALTER TABLE Movie ADD playing_limit_date DATE;`
b)`ALTER TABLE Movie CHANGE rating rating FLOAT;`
c)
~~~
UPDATE Movie
SET playing_limit_date = "2020-11-13"
WHERE title = "Doce de mãe";
~~~

~~~
UPDATE Movie
SET playing_limit_date = "2019-09-03"
WHERE title = "Central do Brasil";
~~~

d) Não é possível atualizar os dados do filme deletado. 

##### Exercício 7
a) `SELECT COUNT(*) FROM Movie WHERE rating > 7.5;`
b) `SELECT AVG(rating) FROM Movie;`
c) `SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();`
d) `SELECT COUNT(*) FROM Movie WHERE playing_limit_date < CURDATE();`
e) `SELECT MAX(rating) FROM Movie;`
f)`SELECT MIN(rating) FROM Movie;`


##### Exercício 8
a)`SELECT * FROM Movie ORDER BY title;`
b)`SELECT * FROM Movie ORDER BY title DESC LIMIT 5;`
c) 
~~~
SELECT * FROM Movie 
WHERE release_Date < CURDATE() 
LIMIT 3;
~~~ 
d)
~~~
SELECT * FROM Movie 
ORDER BY rating DESC
LIMIT 3;
~~~