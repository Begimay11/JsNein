import { useState } from "react"
import { Button } from "../UI/Button"
import { ExpenseForm } from "./ExpenseForm"

export const NewExpenses =(props)=> {
    const [state,setState] = useState(false)

    const changeTitleHandler = ()=> {
        setState((prev) => !prev)
    }
    const newList1=(users)=> {
        const listNow = {
            ...users,
            id: Math.random().toString
        }
        props.onTodo(listNow)
    }
    return <div style={{backgroundColor: '#AD9BE9',height: '100px',width: '600px',padding: '20px',margin: '30px',paddingLeft: '150px'}}>
        {state ? <ExpenseForm newList={newList1} onClick={changeTitleHandler}><Button>Click</Button></ExpenseForm> : <Button onClick={changeTitleHandler}>Dobavit novyi rashod</Button>}
    </div>
}