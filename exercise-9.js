function cariMean(arr) {
  // you can only write your code here!
    var jumlah = 0;
    var mean = 0;
    console.log
    for(i=arr.length-1; i>=0 ; i--){
        jumlah = jumlah + Number(arr[i]);
    }
    mean = jumlah/Number(arr.length);

    return Math.ceil(mean);

}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 3
console.log(cariMean([7, 7, 7, 7, 7])); // 7