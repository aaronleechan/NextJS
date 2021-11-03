import { splitStyle } from "../../css";

const SplitScreen  =({
    left: Left,
    right: Right,
    leftWeight = 1,
    rightWeight = 1
}) =>{
    return(
        <div className="split_style_container">
            <div className="split_style_leftpane"><Left/></div>
            <div className="split_style_rightpane"><Right/></div>
            {splitStyle({left: leftWeight,right: rightWeight})}
        </div>
    )
}

export default SplitScreen