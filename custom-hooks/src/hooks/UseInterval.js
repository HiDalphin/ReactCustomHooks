import * as React from 'react';
import {useInterval, useBoolean} from 'react-use';
const UseInterval = () => {
  const [count, setCount] = React.useState(0);
  const [delay, setDelay] = React.useState(1000);
  const [isRunning, toggleIsRunning] = useBoolean(true);
useInterval(
    () => {
      setCount(count + 1);
      
    },
    isRunning ? delay : null
  );
return (
    <div>
      <div>
        delay: <input value={delay} onChange={event => setDelay(Number(event.target.value))} />
      </div>
      <h1>count: {count}</h1>
      <div>
        <button onClick={toggleIsRunning}>{isRunning ? 'stop' : 'start'}</button>
      </div>
    </div>
  );
};

export default UseInterval;