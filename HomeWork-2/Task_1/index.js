var letters = [];
var str = "Backend As A Service";
var word = str.split(" ");
for( i = 0; i < word.length; i++ ) {
        var firstLetter = word[i].charAt(0);
        letters.push(firstLetter);
}
  console.log(letters);
    letters.join("")