var katabaru = '';

function angkaPalindrome(num) {
  // you can only write your code here!
    while(true){
        katabaru = '';
        num += 1;
        str= String(num);
        for(i=str.length-1; i>=0 ; i--){
            katabaru = katabaru + str[i];
        }
        if (str == katabaru){
            return num;
        }
    }
    
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001