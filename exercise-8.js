function pasanganTerbesar(num) {
  // you can only write your code here!

    var angka = String(num).split('');
    var angkaurut = String(num).split('');
    var urut= angkaurut.sort(function (a , b) {return (b) - (a) });
    var jumlah = '';
    var tertinggi= '';
    
    for(i=0; i<angka.length ; i++){
        if (angka[i]== urut[0]){
            jumlah= angka[i] + angka[i+1];
            if (jumlah>tertinggi){
                tertinggi= jumlah;
            }
        }
    }

    return tertinggi;

}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99