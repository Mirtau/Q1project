function timer(str) {
  return str
}
function namer(str){
  localStorage.setItem('name', str);
  var result = localStorage.getItem('name');
  return result
}
function todoEx(exercise) {
  let tempexer = exercise.slice();
  let selectedexercises = [];

  for (let i = 0; i < 5; i++) {
    Array.prototype.exercisesplice = function() {
      var ri = Math.floor(Math.random() * this.length);
      var rs = this.splice(ri, 1);
      return rs;
    }
    var result = tempexer.exercisesplice();
    selectedexercises.push(result);
  }
  return selectedexercises
}

$(document).ready(function() {
  $('#locstor').click(function(username) {
    event.preventDefault();
    $('.title').append('Hello ' + namer($('#name').val()) + ' ' + 'Welcome to PomoFit');

    $('#name').val("");

  })
  $('.btn').click(function(event) {
    event.preventDefault();
    $('#min').val(timer(this.value));
  })

  var exercise = ['pushups', 'situps', 'plank', 'jumping jacks', 'wall sits', 'leg lifts', 'lunges', 'squats', 'mtn climbers', 'crunches', 'side plank', 'wide hands push-ups'];
  $('.ebutton').click(function(event) {
    event.preventDefault();
    // let tempexer = exercise.slice();
    // let selectedexercises = [];
    //
    // for (let i = 0; i < 5; i++) {
    //   Array.prototype.exercisesplice = function() {
    //     var ri = Math.floor(Math.random() * this.length);
    //     var rs = this.splice(ri, 1);
    //     return rs;
    //   }
    //   var result = tempexer.exercisesplice();
    //   selectedexercises.push(result);
    // }
    $('#printedexercises').val(todoEx(exercise));

  })
})
