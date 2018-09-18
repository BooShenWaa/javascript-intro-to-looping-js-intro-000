function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    }
    else {
        array.push("I am " + i +" strange loops.");
      }
    }
    return array
}

function whileLoop(input) {
  while (input > 0) {
    console.log(--input)
  }
return "done"
}
