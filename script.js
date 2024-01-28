class Food {
    constructor(name, calories) {
        this.name = name;
        this.calories = parseInt(calories);
    }
}

let foodArray = [
    new Food('Rice', 210),
    new Food('Raisin', 120)
];
  let totalCalories = 0;
document.getElementById('calorieForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let calories = parseInt(document.getElementById('calories').value);
  totalCalories += calories;
  document.getElementById('totalCalories').innerText = 'Total Calories: ' + totalCalories;
});