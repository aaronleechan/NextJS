const commonStyle = () =>{
    return(
        <style jsx>
            {
                `
                    img {
                        width: 50% !important;
                        height: 200px !important;
                        border-radius: 120px
                    }
                    form{
                        margin:20px;
                        font-size: 20px;
                    }
                    input{
                        display: block;
                    }
                `
            }
        </style>
    )
}

export default commonStyle;