import "./App.css";
import Login from "./0511";
import userState, { useState } from 'react'
//부모 컴포넌트
const App = () => {

    const [user,setUser] = useState({email:"", password:""});
    const clonedeep = require("lodash.clonedeep")

    
    function changeUserInfo(){
        var newData = clonedeep(user)
        newData.email = "hskim@iener.net";
        newData.password = "1234"
        setUser(newData);
    }
   
    return (
      <div>
        <Login setUser={setUser} />
        <div className="black-nav">
            email is {user.email}
            <br></br>
            password is {user.password}
        </div>
      </div>
     
    );
  };
  
  export default App;
  