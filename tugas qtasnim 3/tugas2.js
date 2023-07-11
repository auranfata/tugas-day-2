function searchAndSortData(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAwal > nilaiAkhir) {
      console.log("nilaiAwal harus lebih kecil dari nilaiAkhir");
      return;
    }
  
    if (dataArray.length <= 5) {
      console.log("Jumlah data dalam dataArray harus lebih dari 5");
      return; 
    }

    
    const hasilPencarian = dataArray.filter((data) => data > nilaiAwal && data < nilaiAkhir);
    const hasilUrutan = hasilPencarian.sort((a, b) => a - b);
    
    if ( hasilPencarian == false){
        console.log("Hasil Pencarian dan Pengurutan:");
        console.log("nilai tidak ada")
        return;
    }else {
        console.log("Hasil Pencarian dan Pengurutan:");
        console.log(hasilPencarian);
    }
  }
  
  const dataArray = [5 , 20, 2, 25, 4, 14, 17, 30, 8];
  const nilaiAwal = 10;
  const nilaiAkhir = 20;
  
  searchAndSortData(nilaiAwal, nilaiAkhir, dataArray);
  