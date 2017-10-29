var exercise = ['pushups', 'situps', 'plank', 'jumping jacks', 'wall sits', 'leg lifts', 'lunges', 'squats'];
var selectedexercises = [];
for (let i = 0; i < 5; i++) {
  Array.prototype.exercisesplice = function() {
    var ri = Math.floor(Math.random() * this.length);
    var rs = this.splice(ri, 1);

    return rs;

  }
  var result = exercise.exercisesplice();

  selectedexercises.push(result);
}
document.getElementById('printedexercises').value = selectedexercises;
