mahasiswa=# select * from mahasiswa;
 nim |    nama    | jk
-----+------------+----
   1 | Auran fata | L
   2 | danis      | L
   3 | mba rara   | P
(3 rows)


mahasiswa=# select * from dosen;
 nidn |    nama    | jk
------+------------+----
    1 | mas nanang | L
    2 | mba alin   | P
(2 rows)

mahasiswa=# create table mapel(id serial primary key not null,nama_mapel varchar(100)not null);
CREATE TABLE
mahasiswa=# select * from mapel;
 id | nama_mapel
----+------------
(0 rows)

mahasiswa=# alter table mahasiswa rename column nama to nama_mahasiswa;
ALTER TABLE
mahasiswa=# select * from mahasiswa;
 nim | nama_mahasiswa | jk
-----+----------------+----
   1 | Auran fata     | L
   2 | danis          | L
   3 | mba rara       | P
(3 rows)

mahasiswa=# insert into dosen(nidn,nama_dosen,jk)values('3','pa taryana','L');
INSERT 0 1
mahasiswa=# select * from dosen;
 nidn | nama_dosen | jk
------+------------+----
    1 | mas nanang | L
    2 | mba alin   | P
    3 | pa taryana | L
(3 rows)
  ^
mahasiswa=# delete from dosen where nama_dosen = 'pa taryana';
DELETE 1
mahasiswa=# select * from dosen;
 nidn | nama_dosen | jk
------+------------+----
    1 | mas nanang | L
    2 | mba alin   | P
(2 rows)

mahasiswa=# select * from mapel;
 id | nama_mapel
----+------------
(0 rows)

mahasiswa=# alter table mapel add column mapel varchar(100) not null;
ALTER TABLE
mahasiswa=# select * from mapel;
 id | nama_mapel | mapel
----+------------+-------
(0 rows)

mahasiswa=# alter table mapel rename column mapel to nama_dosen;
ALTER TABLE
mahasiswa=# alter table mapel add column nama_mahasiswa varchar(100) not null;
ALTER TABLE
        
mahasiswa=# select * from mapel;
 id | nama_mapel | nama_dosen | nama_mahasiswa
----+------------+------------+----------------
(0 rows)

mahasiswa=#  INSERT INTO mapel (id,nama_mapel,nama_dosen,nama_mahasiswa)values('1', 'MM', 'mas nanang', 'auran fata');
INSERT 0 1
mahasiswa=# select * from mapel;
 id | nama_mapel | nama_dosen | nama_mahasiswa
----+------------+------------+----------------
  1 | MM         | mas nanang | auran fata
(1 row)

mahasiswa=# create table mapel(id serial primary key not null,nama_mapel varchar(100)not null,nidn serial not null,nim serial not null, foreign key (nidn) references dosen(nidn),foreign key (nim) references mahasiswa(nim));
mahasiswa=# insert into mapel(id,nama_mapel,nidn,nim)values('1', 'MultiMedia', '1', '1'), ( '2', 'PAI', '2', '2');
select mapel.nama_mapel, dosen.nama_dosen, mahasiswa.nama_mahasiswa from mapel inner join mahasiswa on mahasiswa.nim = mapel.nim inner join dosen on dosen.nidn = mapel.nidn;