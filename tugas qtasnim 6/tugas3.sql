mahasiswa=# create table mapel(id serial primary key not null,nama_mapel varchar(100)not null,nidn serial not null,nim serial not null, foreign key (nidn) references dosen(nidn),foreign key (nim) references mahasiswa(nim));
mahasiswa=# insert into mapel(id,nama_mapel,nidn,nim)values('1', 'MultiMedia', '1', '1'), ( '2', 'PAI', '2', '2');
select mapel.nama_mapel, dosen.nama_dosen, mahasiswa.nama_mahasiswa from mapel inner join mahasiswa on mahasiswa.nim = mapel.nim inner join dosen on dosen.nidn = mapel.nidn;
 nama_mapel | nama_dosen | nama_mahasiswa
------------+------------+----------------
 MultiMedia | mas nanang | Auran fata
 PAI        | mba alin   | danis
(2 rows)

