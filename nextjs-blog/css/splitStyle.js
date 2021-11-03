const SplitStyle = (props)=>{
    const {left,right} = props
    return(
        <style jsx>
            {
                `
                    .split_style_container{
                        display: flex;
                        width: 100%;
                    }
                    .split_style_leftpane{
                        flex: ${left}
                    }
                    .split_style_rightpane{
                        flex: ${right}
                    }
                `
            }
        </style>
    )
}

export default SplitStyle;