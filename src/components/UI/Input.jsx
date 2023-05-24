import './input.css'

export const Input =(props)=> {
    return <div className="input1">
        <label htmlFor="">{props.children}</label>
        <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} onClick={props.onClick}/>
    </div>
}