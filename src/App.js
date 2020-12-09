
import './App.css';
import Sidebar from "./sidebar"
import  Chat from "./chat"
function App() {
  return (
    <div className="App">
      <div className="app__body">
      <Sidebar/>
      <Chat/>
      </div>
    </div>
  );
}

export default App;
