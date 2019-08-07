function targetTerdekat(arr) {
    // you can only write your code here!
      var tampung = '';
      var jarak = 0;
      var terkecil=arr.length;
      for(i= 0; i<=arr.length-1 ; i++){
  
          if (arr[i] === 'o'){
              if (tampung === 'x'){
                  jarak++;
                  if(jarak<terkecil){
                      terkecil=jarak;
                      tampung = 'o'
                  }
              }
                tampung = 'o'
                jarak = 0;
          }
          else if (arr[i] === 'x'){
              if (tampung === 'o'){
                  jarak++;
                  if(jarak<terkecil){
                    terkecil=jarak;
                }
              }
                tampung = 'x'
                jarak = 0;
          }
          else{
              jarak ++;
          }
  
      }
      if (terkecil == arr.length){
          return 0;
      }
      else{
        return terkecil;
      }
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  