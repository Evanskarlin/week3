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
1. Simpan variabel 'number' yang akan dicek.
2. Simpan 'count' dengan nilai awal 0.
3. Simpan 'divFactor' dengan nilai awal 1.
4. Simpan 'remainder' dengan nilai awal 2 atau angka berapapun.
5. Selama 'divFactor' kurang dari sama dengan 'number' lanjutkan ke langkah 6.
6. Ubah nilai 'remainder' dengan hasil sisa bagi dari 'number' dibagi 'divFactor'
7. Jika 'remainder' sama dengan 0 maka lanjutkan ke langkah 8.
8. Tambah 'count' dengan 1.
9. Tambah 'divFactor' dengan 1. Jika nilai 'divFactor' yang baru kurang dari sama dengan 'number' maka kembali ke langkah 6. Jika tidak, lanjut ke langah 10.
10. Jika 'count' sama dengan 2 maka tampilkan 'Your number is prime!'
11. Jika 'count' tidak sama dengan 2 maka tampilkan 'Your number is not prime!'

​
// Tulis pseudocode di sini
STORE 'number' with any number value 
STORE 'count' with 0
STORE 'divFactor' with 1
STORE 'remainder' with 2 //or other initial value

WHILE 'divFactor' less than equal to 'number' DO
     SET 'remainder' with the REMAINDER of 'number' divide by 'divFactor'
        IF 'remainder' equal to 0 DO
            ADD 'count' with 1
        END IF
    ADD 'divFactor' with 1
END WHILE

IF 'count' equal to 2 DO
    DISPLAY 'Your number is prime!'
ELSE DO
    DISPLAY 'Your number is not prime!'
END IF