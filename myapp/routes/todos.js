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
  },
  {
    id: 504,
    idArchived: true,
    todo: 'chary yogi',
    isCompleted: true
  }
];

// var todos = [];

function getNextId(array) {
  let maxArray = [];
  if (array.length > 0) {
    for (i = 0; i < array.length; i++) {
      maxArray[i] = array[i].id;
    }
    const maxValue = Math.max(...maxArray);
    console.log(maxValue);
    return maxValue + 1;
  } else {
    return 501;
  }
}
// var maxArray = [];

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
  console.log(req.body);
  if (req.body) {
    req.body.id = getNextId(todos);
    console.log(req.body.id);
    todos.push(req.body);
    res.json(req.body);
  }
});

router.delete('/delete/:id', function(req, res) {
  console.log(req.params.id);
  for (i = 0; i < todos.length; i++) {
    if (todos[i].id == req.params.id) {
      todos.splice(i, 1);
      // console.log(todos.splice(i, 1));
      console.log(req.params.id);
      res.json(req.params.id);
      console.log(todos);
    }
  }
});
module.exports = router;
