import './App.css';
import Button from './Components/Buttons/Button'
function App() {
  return <>
  I'm here
  <Button title={'Add'} disable={false} type={'add'}/>
  <Button title={'Remove'} disable={false} type={'remove'}/>
  <Button title={'checkout'} disable={false} type={'checkout'}/>
  </>;
}

export default App;
