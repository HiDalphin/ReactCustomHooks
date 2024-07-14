import * as React from 'react';
import {useScroll} from 'react-use';
const UseScroll = () => {
  const scrollRef = React.useRef(null);
  const {x, y} = useScroll(scrollRef);
return (
    <div ref={scrollRef}>
      <div>x: {x}</div>
      <div>y: {y}</div>
    </div>
  );
};

export default UseScroll;