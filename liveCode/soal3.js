/* 
===============
Number Triangle
===============
​
Instruction:
Buatlah sebuah proses untuk membuat deret angka yang membentuk segitiga seperti contoh berikut.
​
Contoh 1 (height = 5):
Output:
12345
2345
345
45
5
​
Contoh 2 (height = 3):
Output:
123
23
3
​
Contoh 3 (height = 1):
Output:
1
 */

var height = 5;


for(var i=1; i<=height; i++){
    var display = '';
    for(j=i; j<=height ; j++){
        display = display + j;
    }
    console.log (display);
    
}