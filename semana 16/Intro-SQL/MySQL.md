### Exercício MySQL
##### Exercício 1
  a) 
  - Create Table: cria uma tabela.
  - Varchar(255): string com até 255 caracteres.
  - Primary Key: identificador único.
  - NOT: nega uma afirmação.
  - Date: Representa uma data.
 
  b) 
- Show Databases: Mostra todas as databases que tenho no Workbench.
- Show Tables: Mostra as tabelas criadas na database que estou usando, no caso, mostra apenas a tabela de atores.

c) O comando `SHOW Actor` não funciona, para ver as informações de Actor, é preciso usar `DESCRIBE Actor`.

##### Exercício 2
a) Criado.

b) INSERT INTO Actor (id, name, salary, birth_date, genter) VALUES( "002", "Glória Pires",  1200000,  "1963-08-23",  "male" )	Error Code: 1062. Entrada '002' duplicada para a key  'PRIMARY'.

c) 
- INSERT INTO Actor (id, name, salary) VALUES(   "003",    "Fernanda Montenegro",   300000,   "1929-10-19", "female" )	Error Code: 1136. O número de colunas não corresponder ao número de valores da linha 1.

- INSERT INTO Actor (id, name, salary,  birth_date, gender) VALUES(   "003",    "Fernanda Montenegro",   300000,   "1929-10-19",    "female" )	1 row(s) affected.

d) 
- INSERT INTO Actor (id, salary, birth_date, gender) VALUES(   "004",   400000,   "1949-04-18",    "male" )	Error Code: 1364. O campo 'name' não tem um valor padrão. 
- INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES(   "004",   "José Mayer",   400000,   "1949-04-18",    "male" )	1 row(s) affected


e)
- INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES(   "005",    "Juliana Paes",   719333.33, 1979-03-26,    "female" )	Error Code: 1292. Valor da data incorreto: '1950' para a coluna 'birth_date' na linha 1. 

- INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES(   "005",    "Juliana Paes",   719333.33, "1979-03-26",    "female" )	1 row(s) affected


f) ok


##### Exercício 3
a) ` SELECT * from Actor WHERE gender = "female"; `
b) ` SELECT salary from Actor WHERE name="Tony Ramos";`
c) Não apareceu nenhum porque definimos que o gênero precisaria ser uma string de até 6 caracteres. 
d) `SELECT id, name, salary from Actor WHERE salary <= 500000;`
e) 
- SELECT id, nome from Actor WHERE id = "002" LIMIT 0, 1000	Error Code: 1054. Coluna "nome" desconhecida na "field list"
- `SELECT id, name from Actor WHERE id = "002";`


##### Exercício 4
b) `SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000;` 
c) `SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";`
d) `SELECT * FROM Actor WHERE (name LIKE "%a%" OR name LIKE "%A%" OR "%g%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;`


##### Exercício 5
a) 
~~~
CREATE TABLE Movie(
id VARCHAR(255) PRIMARY KEY,
title VARCHAR(255) NOT NULL UNIQUE,
synopsis TEXT NOT NULL, 
release_Date DATE NOT NULL,
rating INT NOT NULL
);
~~~
 b)
 ~~~
 INSERT INTO Movie (id, title, synopsis, release_Date, rating)
values(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);
~~~
c) 
~~~
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
values(
"002", 
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);
~~~
d) 
~~~
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
values(
"003",
"Dona Flor e Seus Dois Maridos", 
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);
~~~
e)
~~~
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
values( 
"004", 
"Central do Brasil", 
"Dora trabalha escrevendo cartas para analfabetos na estação Central do Brasil, no centro da cidade do Rio de Janeiro. Ainda que a escrivã não envie todas as cartas que escreve - as cartas que considera inúteis ou fantasiosas demais -, ela decide ajudar um menino, após sua mãe ser atropelada, a tentar encontrar o pai que nunca conheceu, no interior do Nordeste.", 
"1998-04-03",
10
);
~~~


##### Exercício 6

a) `SELECT id, title, rating from Movie WHERE id = "003";`
b) `SELECT * from Movie WHERE title = "Central do Brasil";`
c) `SELECT id, title, synopsis from Movie WHERE rating > 7;`


##### Exercício 7
a) `SELECT  * FROM Movie WHERE title LIKE "%vida%" ;`
b) `SELECT * FROM Movie WHERE title LIKE "%cidade%" OR synopsis LIKE "%cidade%";`
c) `SELECT * FROM Movie WHERE release_Date < "2020-06-08";`
d) `SELECT * FROM Movie WHERE (title LIKE "%Flor%" OR synopsis LIKE "%Flor%") AND rating > 7;`