import * as React from 'react';
import {useIdle, useInterval, useScroll} from 'react-use';
const HooksList = () => {
  return (
    <div>
      <h1>Hooks List</h1>
      <ul>
        <li>{useIdle}</li>
        <li>{useInterval}</li>
        <li>{useScroll}</li>
      </ul>
    </div>
  );
};

export default HooksList;