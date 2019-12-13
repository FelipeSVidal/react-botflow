import React, { useState, useEffect} from 'react';

const frame = (props) => {

    let style = {
        height: props.height? props.height : "9%",
        widht: props.width? props.width : "300px",
        backgroundColor: "#FFFFFF"
    }

    //let types = [ "div", "span"]
    console.log(props.children)
    return(
        <div id="input" style={style}>

        </div>
    );
}

export default frame;