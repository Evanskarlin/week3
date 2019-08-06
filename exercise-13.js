function targetTerdekat(arr) {
  // you can only write your code here!
    var tampung = '';
    jarak = 0;
    for(i= 0; i<=arr.length-1 ; i++){

        if (arr[i] === 'o'){
            if (tampung === 'x'){
                return jarak+1;
            }
            else{
                tampung = 'o'
                jarak = 0;
            }
        }
        else if (arr[i] === 'x'){
            if (tampung === 'o'){
                return jarak+1;
            }
            else{
                tampung = 'x'
                jarak = 0;
            }
        }
        else{
            jarak ++;
        }

    }
    return 0

}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2