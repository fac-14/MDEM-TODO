var test = require('tape');
var todoFunctions = require('./logic');
var initialTest = [
  {
    id: 0,
    description: 'smash avocados',
    done: true,
  },
  {
    id: 1,
    description: 'make coffee',
    done: false,
  },
];

var addedTodo = {
  id: 0, // this is a unique number, it will be needed to find a to-do in a to-do list
  description: "make tea", // this is a string that describes what you need to do
  done: false, // This is true or false, it tells us whether a todo is done or not
};

var concatAdditional = [
  {
    id: 0,
    description: 'smash avocados',
    done: true,
  },
  {
    id: 1,
    description: 'make coffee',
    done: false,
  },
  {
    id: 0, // this is a unique number, it will be needed to find a to-do in a to-do list
    description: "make tea", // this is a string that describes what you need to do
    done: false, // This is true or false, it tells us whether a todo is done or not
  }
];


test('addTodo test', function(t) {
  var actual = typeof todoFunctions.addTodo(initialTest);
  var expected = 'object';
  t.equal(actual, expected, 'should return an array (typeof === object)');
  t.end();
});

test('addTodo test', function(t) {
  var actual = todoFunctions.addTodo(initialTest).length;
  var expected = initialTest.length + 1;
  t.deepEqual(actual, expected, 'array should be one longer in length');
  t.end();
});

test('addTodo test', function(t) {
  var actual = todoFunctions.addTodo(initialTest, addedTodo);
  var expected = concatAdditional;
  t.deepEqual(actual, expected, '');
  t.end();
})