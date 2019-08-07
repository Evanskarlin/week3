function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  //array
    // var kata = kalimat.split(" ");

    // for (i=kata.length ; i>0 ; i--){
    //   if (kata[i] == ''){
    //   kata.splice(i,1);
    //   }
    // }
    // return kata.length;
  //string
    if (kalimat[0] == ' '){
      var kata = 0;
    }
    else{
      var kata = 1;
    }
    for (i=0 ; i<kalimat.length ; i++){
      if (kalimat[i] != ' ' && kalimat[i-1] == ' '){
        kata ++;
      }
    }
    return kata;
}

// TEST CASES
console.log(hitungJumlahKata('I have  a       dream  ')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake  ')); // 6
console.log(hitungJumlahKata('  A  song  to  sing   ')); // 4
console.log(hitungJumlahKata('  I  ')); // 1
console.log(hitungJumlahKata('I believe I can code  ')); // 5