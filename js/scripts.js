//returns all of the prime numbers less than that number.

$(document).ready(function(){
  $("#submit").click(function(event){
    event.preventDefault();
debugger;
    var number = parseInt($("input#number").val());

    var numArray = [];
    var prime = 2;

    for (var i = prime; i <= number; i++) {
      numArray.push(i);

      if ()

      prime += 1;
      alert(numArray);


    }

    for (var i = prime; i < numArray.length; i++) {
      if (numArray % prime === 0) {
      alert("A prime!")
    } else {
      return false;
    }
}



  });
});
