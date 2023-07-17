-- create
 create table mahasiswa(nim serial primary key not null,nama_mahasiswa varchar(100)not null, jk char(1) not null);

--  read
mahasiswa=# select * from mahasiswa;

 nim | nama_mahasiswa | jk
-----+----------------+----
   1 | Auran fata     | L
   2 | danis          | L
   3 | mba rara       | P

--  update
 insert into dosen(nidn,nama_dosen,jk)values('3','pa taryana','L');

--  delete
 delete from dosen where nama_dosen = 'pa taryana';