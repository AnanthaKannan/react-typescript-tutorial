import './App.css';
import { ChildrenProps } from './components/ChildrenProps';
import { DiffEnv } from './components/DiffEnv';
import { EventProps } from './components/EventProps';
import { Greet } from './components/Greet';
import { ListDetails } from './components/ListDetails';
import { Oscar } from './components/Oscar';
import { SendObj } from './components/SendObj';
import { UseState } from './components/state/UseState';
import { Status } from './components/Status';
import { StyleProps } from './components/StyleProps';

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
     <ChildrenProps> some child data is passed </ChildrenProps>
     <Oscar>
     <ChildrenProps>  oscar data is here</ChildrenProps>
     </Oscar>
     <EventProps />
     <UseState />
     <StyleProps styles={{border: '1px solid black', padding: '1rem'}} />
     <DiffEnv />
    </div>
  );
}

export default App;
