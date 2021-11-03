import {useEffect,useState} from 'react'
import {textInputStyle} from '../../css'

const TextInput = (props) =>{
    const {name,id,maxLength,changeEvent,required,width,label,type} = props
    const [value,setValue] = useState("")

    return(
        <>
        {textInputStyle()}
        <div className="input-form"> 
            <br/>
            <input 
                name={name} 
                id={id} 
                type={type} 
                maxLength={maxLength}
                onChange={changeEvent}
                required = {required || false}
                style={{width: width}}
                className="input-text"
            />
            <label for="name" class="label-name">
                <span class="content-name">{label}</span>
            </label>

        </div>
        </>
    )
}
export default TextInput