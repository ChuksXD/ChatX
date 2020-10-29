
import './App.css';
import Sidebar from '../Components/Sidebar'
import Main from '../Components/Main'
import store from '../Store'
import _ from 'lodash'

function App() {
  const { contacts,user, activeUserId } = store.getState()
  return (
    <div className="App">
      <Sidebar contacts = {_.values(contacts)}/>
      <Main user = {user} activeUserId = {activeUserId} />
    </div>
  );
}

export default App;
