'use strict';

console.log('App.js is running!');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  console.log(app.options);

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
};

var clearOptions = function clearOptions() {
  if (app.options.length > 0) app.options = [];
};

var removeLastOption = function removeLastOption() {
  var indexLast = app.options.length - 1;
  if (app.options[indexLast]) app.options.splice(indexLast, 1);
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
      'Item 1'
    ),
    React.createElement(
      'li',
      null,
      'Item 2'
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add option'
      ),
      React.createElement(
        'button',
        { onClick: removeLastOption },
        'Remove last option'
      ),
      React.createElement(
        'button',
        { onClick: clearOptions },
        'Clear'
      )
    )
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
