import React, {useState} from "react";

function Block(props) {
    const [styleIndex, setStyleIndex] = useState(0);

    let style = {
        width: "100px",
        height: "100px",
        borderColor: props.borderColor,
        borderStyle: "solid",
        borderWidth: "2px",
        backgroundColor: props.backColor
    }

    let styleArray = [
        {
            borderColor: props.borderColor,
            backgroundColor: props.backColor
        },
        {
         borderColor: "blue",
         backgroundColor: "red"
        },
        {
            borderColor: "green",
            backgroundColor: "blue"
        },
        {
            borderColor: "red",
            backgroundColor: "green"
        }
    ]

    function switchColors() {
        if (props.clickable) {
            if (styleIndex === 0 || styleIndex === 1) {
                setStyleIndex(2);
            } else if (styleIndex === 2) {
                setStyleIndex(3)
            } else if (styleIndex === 3) {
                setStyleIndex(1);
            }
        }
    }

    return (
        <div style={{...style, ...styleArray[styleIndex]}} onClick={switchColors}>
        </div>
    );
}

export default Block;