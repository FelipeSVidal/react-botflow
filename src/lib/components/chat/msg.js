import React, { useState, useEffect} from 'react';

const frame = (props) => {

    let style = {
        height: props.height? props.height : "100%",
        widht: props.width? props.width : "300px"
    }

    let types = [ "div", "span"]
    console.log(props.children)
    return(
        <div id="chatbot" style={style}>
            {
                props.children.forEach(element => {
                    if(element.type? !types.includes(element.type) : false) throw " Invalid Element ";
                    return {element}
                })
            }
        </div>
    );
}

export default frame;