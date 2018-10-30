console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  console.log(app.options);

  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
};

const clearOptions = () => {
  if(app.options.length > 0) app.options = [];
};

const removeLastOption = () => {
  const indexLast = app.options.length-1;
  if(app.options[indexLast]) app.options.splice(indexLast, 1);
}

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add option</button>
        <button onClick={removeLastOption}>Remove last option</button>
        <button onClick={clearOptions}>Clear</button>
      </form>
    </ol>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);