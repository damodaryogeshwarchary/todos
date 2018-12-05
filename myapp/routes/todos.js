var express = require('express');
var router = express.Router();

var todos = [
  {
    id: 501,
    idArchived: true,
    todo: 'damodar',
    isCompleted: true
  },
  {
    id: 502,
    idArchived: true,
    todo: 'yogeshwar',
    isCompleted: true
  },
  {
    id: 503,
    idArchived: true,
    todo: 'chary',
    isCompleted: true
  }
];

var maxArray = [];
for (i = 0; i < todos.length; i++) {
  maxArray[i] = todos[i].id;
}

var maxValue = Math.max(...maxArray);
var postedTodos;
// console.log(postedTodos); 

// var maxValue = Math.max.apply(null, maxArray);
// console.log(maxValue);

// todos.push(postedTodos);

/* GET users listing. */
router.get('/', function(req, res) {
  res.json(todos);
});

router.post('/add', function(req, res) {
  // Step 1: Get the next (max of 'id' property) ID from the todos array
  // Step 2: Set the next ID to the 'id' property of the item that needs to be added (req.body)
  // Step 3: Push the object (item) into todos array
  // Step 4: Send the new todos array as response

  res.json((postedTodos = req.body));
  if(postedTodos){
    postedTodos.id = maxValue + 1;
    todos.push(postedTodos);
    }    
});

console.log(postedTodos);

module.exports = router;
