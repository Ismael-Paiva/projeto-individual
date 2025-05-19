create database projeto_individual;
use projeto_individual;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar (80),
email varchar (100),
senha varchar (30));

create table capitulos (
idCapitulos int primary key auto_increment,
Capitulo1_Colter varchar (10),
Capitulo2_Horseshoe_Overlook varchar (10),
Capitulo3_Clemens_Point varchar (10),
Capitulo4_Saint_Denis varchar (10),
Capitulo5_Guarma varchar (10),
Capitulo6_Beaver_Hollow varchar (10), 
Epilogo1_Pronghorn_Ranch varchar (10),
Epilogo2_Beechers_Hope varchar (10));

