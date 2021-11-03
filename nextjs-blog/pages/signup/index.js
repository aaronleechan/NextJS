import { useEffect,useState } from "react";
import { SplitScreen, TextInput, SubmitButton } from "../../common";
import {signUpStyle,commonStyle} from '../../css'
import Image from 'next/image'
import logoPic from '../../public/logo.jpg'


const IntroducationComponent = () =>{
    return(
        <div className="signup_introducation">
            <h1>Sign Up Screen</h1>
            <Image src={logoPic} alt="Logo" />
            <h3>Welcome to .......</h3>
        </div>
    )
}

const SignUpForm = () =>{

    const onSubmit = (event) =>{
        event.preventDefault()
    }

    return(
        <div className="signup_form_container">
            <form onSubmit={SignUpForm}>
                <TextInput label="User Name" id="userName" required={true}  label="User Name"/>
                <TextInput label="Email" id="email" required={true} placeholder="Email"/>
                <TextInput label="Password" id="password" required={true} />
                <TextInput label="Verify Password" id="verifyPassword" required={true} />
                <SubmitButton text="Submit"/>
            </form>
        </div>
    )
}

const SignUp = () =>{
    return(
        <>
            {signUpStyle()}
            {commonStyle()}
            <div className="signup_body">
                <div className="signup_main">
                <SplitScreen left={IntroducationComponent} right={SignUpForm}/>
                </div>
            </div>
        </>

    )
}

export default SignUp