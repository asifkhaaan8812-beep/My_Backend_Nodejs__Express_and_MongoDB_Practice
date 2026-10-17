
// Select the database to use.
use('Sigmadatabase');

// Insert a few documents into the sales collection.
db.getCollection('sales').insertMany([
  {
    name: 'java',
    Price: NumberInt('20000'),
    Instructor: 'harry',
    role: 'developer'
  },
  {
    name: 'python',
    Price: NumberInt('18000'),
    Instructor: 'ali',
    role: 'data scientist'
  },
  {
    name: 'javascript',
    Price: NumberInt('15000'),
    Instructor: 'john',
    role: 'web developer'
  },
  {
    name: 'mongodb',
    Price: NumberInt('12000'),
    Instructor: 'sara',
    role: 'database developer'
  },
  {
    name: 'react',
    Price: NumberInt('16000'),
    Instructor: 'david',
    role: 'frontend developer'
  },
  {
    name: 'nodejs',
    Price: NumberInt('17000'),
    Instructor: 'mike',
    role: 'backend developer'
  },
  {
    name: 'c++',
    Price: NumberInt('22000'),
    Instructor: 'robert',
    role: 'software developer'
  },
  {
    name: 'sql',
    Price: NumberInt('14000'),
    Instructor: 'emma',
    role: 'database administrator'
  },
  {
    name: 'php',
    Price: NumberInt('13000'),
    Instructor: 'daniel',
    role: 'web developer'
  },
  {
    name: 'angular',
    Price: NumberInt('19000'),
    Instructor: 'james',
    role: 'frontend developer'
  }
]);


// Print a message to the output window.
console.log('done inserting data');

// Here we run an aggregation and open a cursor to the results.

