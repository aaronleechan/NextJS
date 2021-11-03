const signUpStyle = () =>{
    return(
        <style jsx>
            {
                `
                    .signup_body{
                        background-color: #DBF1F6;
                        height: 100vh;
                        width: 100vw;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .signup_main{
                        width: 75%;
                        background-color: #F2FCFC;
                    }
                    .signup_introducation{
                        text-align: center
                    }
                    .signup_form_container{
                        flex-direction: column;
                        font-family: sans-serif;
                        justify-content: space-around;
                        align-items: center;
                    }
                `
            }
        </style>
    )
}
export default signUpStyle