'use strict';

console.log('App.js is running!');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  app.options.length > 0 ? React.createElement(
    'p',
    null,
    'Here are your options'
  ) : React.createElement(
    'p',
    null,
    'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      app.options[0]
    ),
    React.createElement(
      'li',
      null,
      app.options[1]
    )
  )
);

// const user = {
//   name: 'Andrew',
//   age: 19,
//   location: 'New York'
// };

// function getLocation(location) {
//     if(location){
//         return <p>Location: {location}</p>;
//     }
// }

// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );

var count = 0;
var addOne = function addOne() {
  return count = count + 1;
};

var removeOne = function removeOne() {
  return count = count - 1;
};

var reset = function reset() {
  return count = 0;
};

var templateTwo = React.createElement(
  'div',
  { style: { width: '25%' } },
  React.createElement(
    'h1',
    null,
    'Counter : ',
    count
  ),
  React.createElement(
    'button',
    { style: { width: '33%' }, onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { style: { width: '33%' }, onClick: removeOne },
    '-1'
  ),
  React.createElement(
    'button',
    { style: { width: '33%' }, onClick: reset },
    'reset'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
