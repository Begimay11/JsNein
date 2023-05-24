export const Expenses = (props)=> {
    // const el = props.list
    return <div style={{border: '1px solid',width: '400px',display: 'flex',justifyContent: 'space-around',padding: '10px'}}>
        <div>{props.title}</div>
        <div>{props.price}</div>
        {/* <div>{props.id}</div> */}
        <button onClick={()=> props.onDelete(props.id)}>Delete</button>
    </div>
}