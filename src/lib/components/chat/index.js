import React, { useState, useEffect} from 'react';

const frame = (props) => {

    let style = {
        height: props.height? props.height : "89%",
        widht: props.width? props.width : "300px",
        backgroundColor: "#000000"
    }

    //let types = [ "div", "span"]
    console.log(props.children)
    return(
        <div id="chat" style={style}>

        </div>
    );
}

export default frame;