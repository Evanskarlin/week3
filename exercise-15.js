function groupAnimals(animals) {
  // you can only write your code here!
  var display = [[]];
  animals.sort();
  var penampung = animals[0][0];
  banyakcolom = 0;
  for(i= 0; i<=animals.length-1 ; i++){

    if (animals[i][0] != penampung){
        penampung = animals[i][0];
        display.push([]);
        banyakcolom ++;
    }
    display[banyakcolom].push(animals[i]);
    
  }
  return display;

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

