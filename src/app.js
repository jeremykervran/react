console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
    <ol>
      <li>{app.options[0]}</li>
      <li>{app.options[1]}</li>
    </ol>
  </div>
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

let count = 0;
const addOne = () => {
  return count = count+1;
}

const removeOne = () => {
  return count = count-1;
}

const reset = () => {
  return count = 0;
}

const templateTwo = (
  <div style={{width: '25%'}}>
    <h1>Counter : {count}</h1>
    <button style={{width: '33%'}} onClick={addOne}>+1</button>
    <button style={{width: '33%'}} onClick={removeOne}>-1</button>
    <button style={{width: '33%'}} onClick={reset}>reset</button>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
