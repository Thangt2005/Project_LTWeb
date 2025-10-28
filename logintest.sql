<<<<<<< HEAD
create database LoginData;
go

use LoginData;
go

create table  users(
id int identity(1,1) primary key,
email nvarchar(255) not null unique,
password nvarchar(25) not null,
created_at datetime default getdate());
go

insert into users(email,password) values('tranhuuthang592@gmail.com','Thang2005@');
INSERT INTO users(email, password) VALUES('minhnguyen823@example.com', 'Minh@2024!');
INSERT INTO users(email, password) VALUES('hoangtruc456@example.com', 'Truc#1999');
INSERT INTO users(email, password) VALUES('lethanh789@example.com', 'Thanh$2023');
INSERT INTO users(email, password) VALUES('phamquyen321@example.com', 'Quyen*2001');
INSERT INTO users(email, password) VALUES('ngocanh999@example.com', 'NgocAnh@2022');
go
=======
create database LoginData;
go

use LoginData;
go

create table  users(
id int identity(1,1) primary key,
email nvarchar(255) not null unique,
password nvarchar(25) not null,
created_at datetime default getdate());
go

insert into users(email,password) values('tranhuuthang592@gmail.com','Thang2005@');
INSERT INTO users(email, password) VALUES('minhnguyen823@example.com', 'Minh@2024!');
INSERT INTO users(email, password) VALUES('hoangtruc456@example.com', 'Truc#1999');
INSERT INTO users(email, password) VALUES('lethanh789@example.com', 'Thanh$2023');
INSERT INTO users(email, password) VALUES('phamquyen321@example.com', 'Quyen*2001');
INSERT INTO users(email, password) VALUES('ngocanh999@example.com', 'NgocAnh@2022');
go
>>>>>>> 24ef330 (login change)
