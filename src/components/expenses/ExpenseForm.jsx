import { useState } from "react"
import { Button } from "../UI/Button"
import { Input } from "../UI/Input"

export const ExpenseForm =(props)=> {
    const [text,setText] = useState('')
    const [number,setNumber] = useState('')
    const [date,setDate] = useState('')

    const textChangeHandler = (e)=> {
        setText(e.target.value)
        console.log(text);
    }
    const numberChangeHandler = (e)=> {
        setNumber(e.target.value)
        console.log(number);
    }
    const dateChangeHandler = (e)=> {
        setDate(e.target.value)
        console.log(date);
    }

    const submitChangeHandler =(e)=> {
        e.preventDefault()

        const addList = {
            title: text,
            price: number,
            date: new Date(date)
        }
        props.newList(addList)
        setText('')
        setNumber('')
        setDate('')
    }
    return <form style={{display: 'flex',justifyContent: 'space-between'}} onSubmit={submitChangeHandler}>
        <Input type='text' children='Zagolovok' value={text} onChange={textChangeHandler}/>
        <Input type='number'  children='Kolichestvo' value={number} onChange={numberChangeHandler}/>
        <Input type='date' placeholder='Date' children='Date' value={date} onChange={dateChangeHandler}/>
        <Button onClick={props.onClick}>Otmena</Button>
        <Button>Dobavit rashody</Button>
    </form>
}