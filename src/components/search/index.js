import React from "react";


const Search = (props) => {

    return (
      
        <input 
        className ="input-small mb-1"
        type="search"
        style={{"width":"100%"}}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        >
        </input>


    )
}

export default Search;