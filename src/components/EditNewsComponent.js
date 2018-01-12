import React from 'react'
import '../styles/addForm.css'
import '../styles/bootstrap.css'
import PropTypes from 'prop-types'

let EditNewsComponent = ({news, editNewsClick}) => {
    let title
    let content
    return (
        <div className="container">
            <div className="form-group addNews">
                <h3 className="page-header">Edit news</h3>
                <div className="form-group">
                    <label htmlFor="listItemName">Title <span>*</span></label>
                    <input className="form-control" placeholder="Input title" defaultValue={news.title} ref={node => {
                        title = node
                    }} />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="listItemDescription">Description</label>
                    <textarea className="form-control" placeholder="Input description" rows="10" defaultValue={news.content} ref={node => {
                        content = node

                    }} />
                </div>
                <button className="btn btn-primary btn-large" onClick={() => {
                    news.title = title.value
                    news.content = content.value
                    editNewsClick(news)
                }}>
                    Edit
                </button>
            </div>
        </div>
    )
}

EditNewsComponent.propTypes = {
    news: PropTypes.object.isRequired,
    editNewsClick: PropTypes.func.isRequired,
}

export default EditNewsComponent