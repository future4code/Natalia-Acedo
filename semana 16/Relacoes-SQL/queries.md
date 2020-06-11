### Exercícios - Relações SQL
##### Exercício 1
  c) ER_NO_REFERENCED_ROW_2: Cannot add or update a child row: a foreign key constraint fails (`hamilton_natalia_acedo`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
Não existe filme com a ID "105".

e) DELETE FROM Movie WHERE id = 002
       - ER_ROW_IS_REFERENCED_2: Cannot delete or update a parent row: a foreign key constraint fails (`hamilton_natalia_acedo`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Não é possível deletar porque está faltando a coluna de "rating"


##### Exercício 2
b)  ER_NO_REFERENCED_ROW_2: Cannot add or update a child row: a foreign key constraint fails (`hamilton_natalia_acedo`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
Não é possível criar relação com um ator inexistente, ou um filme inexistente. 

c) - ER_ROW_IS_REFERENCED_2: Cannot delete or update a parent row: a foreign key constraint fails (`hamilton_natalia_acedo`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Não é possível deletar um filme ou ator quando uma tabela utliza algum dado dela.

##### Exercício 3
a) O `ON` indica a condição que irá juntar as duas tabelas. 
b)
~~~
SELECT m.title, m.id, r.rate, r.comment FROM Movie m
JOIN Rating r ON m.id = r.movie_id;
~~~ 

##### Exercício 4
b)
~~~
SELECT m.title, m.id, mc.actor_id FROM Movie m
JOIN MovieCast mc ON mc.movie_id = m.id;
~~~

c)
~~~
SELECT AVG(r.rate), m.title FROM Movie m
JOIN Rating r ON  m.id = r.movie_id
GROUP BY m.id
;
~~~

##### Exercício 5
b)
~~~
SELECT m.title, m.id as movie_id, a.name, a.id as actor_id FROM Movie m
JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
~~~

c)
~~~
SELECT 
m.title, 
m.id as movie_id, 
a.name, 
a.id as actor_id, 
r.rate, 
r.comment 
FROM Movie m
JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id
JOIN Rating r ON m.id = r.movie_id
;
~~~

