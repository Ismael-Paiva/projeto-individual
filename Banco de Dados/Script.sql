create database projeto_individual;
use projeto_individual;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar (80),
email varchar (100),
senha varchar (30));

create table capitulos (
idCapitulos int primary key auto_increment,
nome varchar (100),
descricao varchar (200));

create table visualizacao (
idVizualizacao int,
fkIdCapitulos int,
fkIdUsuario int,
constraint pkcomposta primary key (idVizualizacao, fkIdCapitulos, fkIdUsuario),
dtVisualizacao timestamp default current_timestamp,
visto TINYINT);

insert into capitulos (nome , descricao) values 
('Prólogo', 'A gangue de Dutch foge para as montanhas após um assalto fracassado, enfrentando frio e escassez.'),
('Capítulo 1: Colter', 'Escondidos na neve, os Van der Linde lutam para sobreviver e buscar suprimentos.'),
('Capítulo 2: Horseshoe Overlook', 'A gangue monta acampamento em Valentine. Roubos e conflitos com os ODriscoll começam a escalar.'),
('Capítulo 3: Clemens Point', 'A gangue se instala no sul e enfrenta os Braithwaite e Gray em uma guerra familiar.'),
('Capítulo 4: Saint Denis', 'A gangue se envolve com a elite de Saint Denis e prepara um grande assalto a banco.'),
('Capítulo 5: Guarma', 'Após o assalto fracassado, Arthur e alguns membros naufragam em uma ilha chamada Guarma.'),
('Capítulo 6: Beaver Hollow', 'Arthur enfrenta a decadência da gangue, a tirania de Dutch e sua própria mortal doença.'),
('Epílogo Parte 1: Pronghorn Ranch', 'Anos depois, John Marston tenta uma nova vida como fazendeiro com sua família.'),
('Epílogo Parte 2: Beechers Hope', 'John confronta os fantasmas do passado para construir um futuro estável para sua família.');