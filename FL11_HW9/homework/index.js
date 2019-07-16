// Task 0
function getNumbers(string) {
  const stringArr = string.split('');
  const result = stringArr.filter(function(symbol) {
    return parseFloat(symbol)
  });
  return result;
}

// Task 1
function findTypes() {
  let typesObj = {};
  for (let i = 0; i < arguments.length; i++){
    const type = typeof arguments[i];
    if (type in typesObj){
      typesObj[type] += 1
    }else {
      typesObj[type] = 1;
    }
  }
}

// Task 2
function executeforEach(arr, itemFunction) {
  arr.forEach((item) => {
    itemFunction(item);
  })
}

// Task 3
function mapArray(arr, itemFunction) {
  const result = [];
  executeforEach(arr, (item) => result.push(itemFunction(item)));
  return result;
}

// Task 4
function filterArray(arr, itemFunction) {
  const result = [];
  executeforEach(arr, (item) => itemFunction(item) ? result.push(item) : null);
  return result;
}

// Task 5
function showFormattedDate(date) {
  let parameters = {month: 'short', day: 'numeric'},
  formattedDate = date.toLocaleString('en-us', parameters),
  year = date.getFullYear();
  return `Date: ${formattedDate} ${year}`;
}

// Task 6
function canConvertToDate(date) {
  return !isNaN(new Date(date).getTime());
}

// Task 7
function daysBetween() {
  const day1 = arguments[0];
  const day2 = arguments[1];
  const differenceTime = Math.abs(day2.getTime() - day1.getTime());
  const milliseconds = 1000;
  const sec = 60;
  const min = 60;
  const hours = 24;
  const differenceDays = Math.ceil(differenceTime / (milliseconds * sec * min * hours));
  return differenceDays;
}

// Task 8
const data = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    ' birthday ': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    ' birthday ': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    ' birthday ': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    ' birthday ': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
];
function getAmountOfAdultPeople(data) {
 const today = new Date();
 const age = 18;
 const daysInYear = 365;
 let persons = 0;
 executeforEach(data, function(item) {
  if (daysBetween(new Date(item[' birthday ']), today) / daysInYear > age) {
    persons = persons + 1;
    }
  })
  return persons;
}

// Task 9
function keys(object) {
  const result = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      result.push(key);
    }
  }
  return result;
}

// Task 10
function values(object) {
  const result = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      result.push(object[key])
    }
  }
  return result;
}