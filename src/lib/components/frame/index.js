import React, { useState, useEffect} from 'react';

const frame = (props) => {

    let style = {
        height: props.height? props.height : "300px",
        width: props.width? props.width : "300px",
        backgroundColor: "#FF0000",
        border: '3px solid green'
     //   borderRadius: "5px",
     //   borderWidth: "2px",
     //   borderColor: "#FFFF00"
    }

    //let types = [ "div", "span"]
    console.log(props.children)
    return(
        <div id="chatbot" style={style}>
            {
                props.children.forEach(element => {
                    //if(element.type? !types.includes(element.type) : false) throw " Invalid Element ";
                    return element
                })
            }
            {props.children}
        </div>
    );
}

export default frame;