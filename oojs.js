function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}
Teacher.prototype = Object.create(Person.prototype);
Object.defineProperty(Teacher.prototype, 'constructor', {
  value: Teacher,
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true
});

let teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');


//Second way

Object.prototype.inherits = function(base, child) {
  if (base.constructor == Function) {
    //Normal Inheritance
    //the prototype chain should be the same as its parent.
    child.prototype = Object.create(base.prototype);
    //as above statement replaces the contructor as well
    //to make sure child contains its own prototype
    child.prototype.constructor = child;
    //cache the base prototype for the future if needed
    child.prototype.parent = base.prototype;
  } else {
    //Pure Virtual Inheritance
    child.prototype = base;
    child.prototype.constructor = child;
    child.prototype.parent = base;
  }
  return child;
}

function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}
Object.inherits(Person,Teacher)
let teacher2 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');
