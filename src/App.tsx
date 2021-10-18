import './App.css';
import { Greet } from './components/Greet';
import { ListDetails } from './components/ListDetails';
import { SendObj } from './components/SendObj';
import { Status } from './components/Status';

function App() {

  const fullName = {
    first: "sree",
     last: "Kannan"
    }

  const nameList = [
    {id: 1, first: "hello", last: "hai"}, 
    {id: 2, first: "eee", last:"xyz"},
    {id: 3, first: "sree", last:"kannan"}
  ]

  return (
    <div className="App">
      <Greet name="Kannan" age={30} isMarried={true} />
      <SendObj name={fullName} />
     <ListDetails names={nameList} />
     <Status status="loading" />
    </div>
  );
}

export default App;
