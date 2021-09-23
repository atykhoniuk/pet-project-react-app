import React from "react";


const PostListItem = () => {
    return (
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
                Hello World
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-star btn-sm">
                    <i className="bi bi-star-fill"/>
                </button>
                <button type="button" className="btn-trash btn-sm">
                    <i className="bi bi-trash-fill"/>
                </button>
                <i className="bi bi-heart-fill"/>
            </div>
        </li>
    )
}

export default PostListItem;