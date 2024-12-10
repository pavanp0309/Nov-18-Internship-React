import React from "react";


// Child Component
function Card(props){
    console.log(props) // object
    return (
        <>
        <h1>{props.id}.{props.data}Learning The Props Concept</h1>
        {/* displaying the Children Props */}
        {props.children}
        </>
    )
}

export default Card