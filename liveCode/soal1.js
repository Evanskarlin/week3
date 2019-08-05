/* 
==============
Bilangan Prima
==============
​
Bilangan prima merupakan bilangan yang hanya habis dibagi oleh angka 1 dan angka itu sendiri.
Buat algoritma DAN pseudocode untuk mengecek apakah sebuah angka merupakan angka prima atau bukan.
 */
​
// Tulis algoritma di sini
1. tampung nilai 'prima' dengan angka berapapun
2. tampung nilai 'count' dengan angka 0
3. tampung nilai 'pengurang' dengan 'prima' dikurang 1
4. apabila 'pengurangan' lebih kecil dari pada satu maka lanjut ke step 7. bila tidak lanjut ke step 5
5. apabila 'prima' habis dibagi 'pengurangan' maka tambahkan 'count' dengan nilai 1. bila tidak lanjut ke step 6
6. 'pengurangan' dikurang dengan 1 kemudian kembali ke step 4
7. apabila 'count' bernilai 0 maka lanjut ke step 8. bila tidak lanjut ke step 9.
8. tampilkan "Bilangan Prima"
9. tampilkan "Bukan Bilangan Prima"
​
// Tulis pseudocode di sini
STORE 'prima' with any number value
STORE 'count' with 0
STORE 'pengurang' with 'prima' min 1
WHILE 'pengurangan' smaller by 1 THEN
    IF 'prima' Modulus 'pengurangan' equals to 0 THEN
        ADD 'count' with 1
    END IF
    MIN 'pengurangan' with 1
END WHILE

IF count equals to 0 THEN
    DISPLAY "Bilangan Prima"
ELSE
    DISPLAY "Bukan Bilangan Prima"