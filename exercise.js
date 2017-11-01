$(document).ready(function() {
  $('#locstor').click(function(username){
    event.preventDefault();
    localStorage.setItem('name', $('#name').val());
var result = localStorage.getItem('name');
console.log(result);
$('.title').append('Hello ' + result + ' ' + 'Welcome to PomoFit');

$('#name').val("");

  })
  $('.stbt').click(function(timer) {
    console.log("in")
    event.preventDefault();
    let input = $('#min');
    input.val('25');
  })
  $('.exbt').click(function(timer) {
    console.log("in")
    event.preventDefault();
    let input = $('#min');
    input.val('5');
  })
  $('.clear').click(function(timer) {
    console.log("in")
    event.preventDefault();
    let input = $('#min');
    input.val('00');
  })
  var exercise = ['pushups', 'situps', 'plank', 'jumping jacks', 'wall sits', 'leg lifts', 'lunges', 'squats', 'mtn climbers', 'crunches', 'side plank', 'wide hands push-ups'];
  var selectedexercises = [];
  $('.ebutton').click(function(event) {
    event.preventDefault();
    let tempexer = exercise.slice();
    selectedexercises = [];

    for (let i = 0; i < 5; i++) {
      Array.prototype.exercisesplice = function() {
        var ri = Math.floor(Math.random() * this.length);
        var rs = this.splice(ri, 1);
        return rs;
      }
      var result = tempexer.exercisesplice();
      selectedexercises.push(result);
    }
    document.getElementById('printedexercises').value = selectedexercises;

  })
})
module.exports = {
timer:timer,
event: event,
username: username,
}
