var balik = '';

function balikString(kata) {
    balik = '';
    for (var A = kata.length-1; A>=0 ; A--){
        balik = balik + kata[A];
    }
    return balik;
}


console.log(balikString('hello world!'));
