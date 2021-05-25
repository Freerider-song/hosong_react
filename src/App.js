import React, { useState } from "react";
import {Link} from 'react-router-dom';

//클릭 횟수와 상관없이 3초에 한개만 count
    /*  19App.js:6 0
App.js:6 1
12App.js:6 2
20App.js:6 3
20App.js:6 4
20App.js:6 5 */
const App = () => {
  const [count, setCount] = useState(0);
  const time = () => {
    console.log(count);
    setTimeout(function () {
      setCount(count + 1);
    }, 3000);
  };

  return (
    <div>
      <p>You clicked {count} times</p>  


      <button onClick={time}>+</button>  //
      <button onClick={() => setCount(count - 1)}>-</button>
      <br />
      <Link to ="/home">
        <button>홈으로</button>
      </Link>
      <br />
      <hr></hr>
      <Link to ="/login">
        <button>로그인화면으로</button>
      </Link>
    </div>
  );
};

export default App;
