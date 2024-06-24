import "./App.css";
import {Route} from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import Homepage from "./Pages/Homepage";
console.log(`${process.env.REACT_APP_BACKEND_BASE_URL}`)
function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} exact />      
    </div>
  );
}

export default App;
 