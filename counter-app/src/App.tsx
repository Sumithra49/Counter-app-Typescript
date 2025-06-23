import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>🔢 Counter App</h1>
      <h2>{count}</h2>
      <button onClick={increment}>➕ Increment</button>
      <button onClick={decrement} style={{ marginLeft: '10px' }}>➖ Decrement</button>
      <button onClick={reset} style={{ marginLeft: '10px' }}>🔁 Reset</button>
    </div>
  );
};

export default App;
