import React from 'react'
import PropTypes from 'prop-types'
import '../styles/bootstrap.css'
import '../styles/news.css'

const DeleteNewsComponent = ({id, deleteNewsClick}) => {
    return (
        <button className="btn btn-primary btn-large" type={"submit"} onClick={() => {deleteNewsClick(id)}}>
             Delete Todo
        </button>
    )
}

DeleteNewsComponent.propTypes = {
    id: PropTypes.number.isRequired,
    deleteNewsClick: PropTypes.func.isRequired,
}

export default DeleteNewsComponent
