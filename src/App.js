import "./App.css";
import Login from "./components/login/login.component";
import Chatbox from "./components/chatbox/chatbox.component";
import MessageInput from "./components/messageInput/messageInput.component";
function App() {
  return (
    <div className='App'>
      <Login />
      <Chatbox />
      <MessageInput />
    </div>
  );
}

export default App;
