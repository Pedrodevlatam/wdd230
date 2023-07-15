// script.js
function Counter() {
    const [count, setCount] = React.useState(0);
  
    return (
      <div className="container">
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button className="button" onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }
  
  ReactDOM.render(<Counter />, document.getElementById('root'));
  