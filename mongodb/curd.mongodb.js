use("Cruddb")
db.createCollection("Courses")
db.Courses.insertOne({
  name: "Muhamad Asif Rashid",
  price: 0,
  assignments: 3,
  projects: 45
})
db.Courses.insertMany([
  {
    name: 'Muhamad Asif Rashid',
    price: NumberInt('0'),
    assignments: NumberInt('3'),
    projects: NumberInt('45')
  },
  {
    name: 'Ali Khan',
    price: NumberInt('15000'),
    assignments: NumberInt('8'),
    projects: NumberInt('12')
  },
  {
    name: 'Ahmed Raza',
    price: NumberInt('12000'),
    assignments: NumberInt('6'),
    projects: NumberInt('18')
  },
  {
    name: 'Hamza Malik',
    price: NumberInt('20000'),
    assignments: NumberInt('10'),
    projects: NumberInt('25')
  },
  {
    name: 'Usman Tariq',
    price: NumberInt('8000'),
    assignments: NumberInt('4'),
    projects: NumberInt('9')
  },
  {
    name: 'Hassan Shah',
    price: NumberInt('18000'),
    assignments: NumberInt('7'),
    projects: NumberInt('20')
  },
  {
    name: 'Bilal Ahmed',
    price: NumberInt('10000'),
    assignments: NumberInt('5'),
    projects: NumberInt('14')
  },
  {
    name: 'Saad Khan',
    price: NumberInt('25000'),
    assignments: NumberInt('12'),
    projects: NumberInt('32')
  },
  {
    name: 'Danish Iqbal',
    price: NumberInt('16000'),
    assignments: NumberInt('9'),
    projects: NumberInt('22')
  },
  {
    name: 'Zain Ali',
    price: NumberInt('14000'),
    assignments: NumberInt('6'),
    projects: NumberInt('16')
  }
])
// let a = db.Courses.findOne({price:0})
// console.log(a)
db.Courses.updateMany({price:0}, {$set:{price:100}})
db.Courses.deleteMany({price: {$gt:10}})

