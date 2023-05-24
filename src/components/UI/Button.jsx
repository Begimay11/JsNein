export const Button=(props)=> {
    return <div style={{backgroundColor: '#4A026B',height: '60px',width: '200px',borderRadius: '15px'}}>
        <button onClick={props.onClick}>{props.children}</button>
    </div>
}