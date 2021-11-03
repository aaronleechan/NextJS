const textInputStyle = () =>{
    return(
        <style jsx>
            {
                `
                .input-form{
                    position: relative;
                    overflow: hidden;
                }
                input{
                    color: #595f6e;
                    padding-top: 20px;
                    border: none;
                    width: 100%;
                    height: 100%;
                    outline: none;
                }
                .input-form label{
                    position: absolute;
                    bottom: 0px;
                    left: 0%;
                    width: 100%;
                    height: 70%;
                    font-size: 12px;
                    pointer-events: none;
                    border-bottom: 1px solid black;
                }
                .input-form label::after{
                    content: "";
                    left: 0px;
                    bottom: -2px;
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    border-bottom: 3px solid #5fa8d3;
                    transform: translateX(-100%);
                    transition: transform 0.3s ease;
                }
                .content-name{
                    position: absolute;
                    bottom: 5px;
                    left: 0px;
                    transition: all 0.3s ease;
                }
                input:focus + label .content-name, 
                .input:valid + label .content-name{
                    transform: translateY(-150%);
                    font-size: 14px;
                    color: #5fa8d3;
                }
                input:focus + label::after, 
                input:valid + label::after{
                    transform: translateX(0%)
                }
                `
            }
        </style>
    )
}

export default textInputStyle