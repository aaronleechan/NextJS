const buttonStyle = () =>{
    return(
        <style jsx>
            {
                `
                    .submit-button-style{
                        color: #ffff;
                        background-color: #007bff;
                        border-color: #007bff;
                        display: inline-block;
                        font-weight: 400;
                        text-align: center;
                        white-space: nowrap;
                        vertical-align: middle;
                        border: 1px solid transparent;
                        border-radius: 0.25em;
                        width: 100px;
                        height: 35px;
                        padding: 10px;
                        text-decoration: none;
                        margin-top: 10px
                    }
                `
            }
        </style>
    )
}

export default buttonStyle;