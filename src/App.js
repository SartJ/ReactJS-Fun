import React, {useState} from "react";
import Tweet from './Tweet';

function App() {

  const [users, setUsers] = useState([
    { name: "John", message: "Go green, clean machine!", likes: 3 },
    { name: "Tom", message: "No more tears, grizzly bears!", likes: 4 },
    { name: "Cathy", message: "Chop chop, time to hop on to the top and plant some crops!", likes: 5 }
  ]);

  const [isRed, setColor] = useState(false);

  const changeColor = () => {
    setColor(!isRed);
  }

  return(
    <div className={isRed ? "red" : "app"}>

      {users.map(user =>(
        <Tweet name={user.name} tweet={user.message} likes={user.likes} />
      ))}

      <div className="changerDesign">
      <h3>Party!</h3>
      <button onClick={changeColor}>Button</button>
      </div>
    </div>
  );
}


export default App;