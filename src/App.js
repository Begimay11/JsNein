import { useState } from 'react';
import { Expenses } from './components/expenses/Expenses';
import { NewExpenses } from './components/expenses/NewExpenses';
import './App.css';

const user =[
  {
    title: 'Alma',
    price: 120,
    id: 1
  },
  {
    title: 'Banan',
    price: 320,
    id: 2
  },
  {
    title: 'Kapusta',
    price: 120,
    id: 3
  },
  {
    title: 'Sabiz',
    price: 120,
    id: 4
  },
] 
function App() {
  const [less,setLess] = useState(user)
  // const [deleted,setDeleted] = useState(user)
  const onTodoList = (list)=> {
    setLess((prev)=> {
      return [...prev,list]
    })
  }
  const deleteFunction = (id)=> {
    const deleted1 = less.filter((el)=> {
      if(el.id !== id){
        return [el]
      }
    })
    setLess(deleted1)
    // setDeleted(deleted1)
  }
  return (
    <div className="App">
     <NewExpenses onTodo={onTodoList}/>
     {less.map((el)=> {
       return <Expenses key={el.id} id={el.id} title={el.title} price={el.price} onDelete={deleteFunction}/>
     })}
    </div>
  );
}

export default App;
