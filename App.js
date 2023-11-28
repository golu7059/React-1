import logo from './logo.svg';
import './App.css';
import Person from './Person';
import Button from './Button';
import Header from './Header';
import List from './List'
function App() {
  return (
   <>
   <Person name="Golu Kumar" age = "18" />
   <Button text="Click me!" onClick={() => console.log("Button clicked")} />
   <Header title="HEY! I am learning React"/>
  <List items={['apple','banana','orange']} />
   </>
  );
}

export default App;
