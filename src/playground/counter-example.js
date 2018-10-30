let count = 0;
const addOne = () => {
  count++;
  console.log(count);
}

const removeOne = () => {
  count--;
}

const reset = () => {
  count = 0;
}

const templateTwo = (
  <div>
    <h1>Counter : {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={removeOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);