import React from 'react'
import '../styles/addForm.css'
import '../styles/bootstrap.css'
import {Link} from "react-router-dom";
import PropTypes from "prop-types";


let AddNewsComponent = ({addNewsClick}) => {
    let title
    let content
    return (
        <div className="container">
            <div className="form-group addNews">
                <h3 className="page-header">Add news</h3>
                <div className="form-group">
                    <label htmlFor="listItemName">Title <span>*</span></label>
                    <input className="form-control" placeholder="Input title" ref={node => {
                        title = node
                    }} />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="listItemDescription">Description</label>
                    <textarea className="form-control" placeholder="Input description" rows="10" ref={node => {
                        content = node
                    }} />
                </div>
                <Link to={"/"}>
                    <button className="btn btn-primary btn-large" onClick={() => {addNewsClick(title.value, content.value)}}>
                        Add
                    </button>
                </Link>
            </div>
        </div>
    )
}

AddNewsComponent.propTypes = {
    addNewsClick: PropTypes.func.isRequired,
}

export default AddNewsComponent
