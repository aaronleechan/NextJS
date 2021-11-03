import {useEffect,useState} from 'react'
import {buttonStyle} from '../../css'

const SubmitButton = (props) =>{
    const {onClick} = props
    return(
        <>
            {buttonStyle()}
            <div><button type="button" className="submit-button-style" onClick={onClick}>Submit</button></div>
        </>
    )
}
export default SubmitButton;