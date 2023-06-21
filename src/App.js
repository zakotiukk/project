import './App.css';
import Button from './Components/Buttons/Button';
import Card from "./Components/Card/Card";

const { getData} = require("./db/db");

const books = getData();



function App() {
  return (
  <>
  I'm here
  <Button title={'Додати в корзину'} disable={false} type={'add'}/>
  <Button title={'Вибране'} disable={false} type={'remove'}/>
  <Button title={'Придбати'} disable={false} type={'checkout'}/>
  {books.map(book=>{
    return <Card book={book} key={book.id}/>;
  })}
  
  </>
  );
}

export default App;
