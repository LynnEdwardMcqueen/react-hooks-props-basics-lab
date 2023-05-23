import React from "react";

function Links(props) {
    return (
      <div>
        <h3>Links</h3>
        {props.github ? <a href= {props.github}>{props.github}</a> : null }
        {props.linkedin ? <a href= {props.linkedin}>{props.linkedin}</a> : null }
      </div>
    )
}

export default Links