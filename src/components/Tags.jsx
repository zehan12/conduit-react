import { Link } from "react-router-dom";
import React from "react";

function Tags(props) {

    return (
        <div className="bg-gray-200 p-2">
            <h3>Popular Tags</h3>
            {
                props.tags.map((tag) => <button key={tag + 1}
                    onClick={() => props.handleTags(tag)}
                    style={{ backgroundColor: "#818A91" }}
                    className="rounded-xl px-2 text-xs text-white m-1 p-1">
                    {tag}
                    {/* <Link to={`tags/:${tag}`}> {tag} </Link> */}
                </button>)
            }
        </div>
    )
}


export default Tags;