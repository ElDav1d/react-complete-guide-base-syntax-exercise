import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {
  return (
    <div className="App">
      <h1>Lets' start mate!</h1>
      <UserInput />
      <UserOutput userName="user 1"/>
      <UserOutput userName="user 2"/>
      <UserOutput userName="user 3"/>
    </div>
  );
}

export default App;
