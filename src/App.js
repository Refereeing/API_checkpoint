import './App.css';
import UserList from './Components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App-list">
      <h1>The list of users</h1>
      <UserList/>
    </div>
  );
}

export default App;
