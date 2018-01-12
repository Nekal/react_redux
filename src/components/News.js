import React from 'react'
import PropTypes from 'prop-types'
import '../styles/bootstrap.css'
import '../styles/news.css'

const News = ({id, title, content }) => (

    <div className='container'>
        <div className='row'>
            <div className='col-md-10'>
                <div className='thumbnail'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="mt-12">{title}</h1>
                                <hr />
                                <p className="content">{content}</p>
                                <hr />
                                <ul className="list-inline list-unstyled" style={{textAlign: 'right'}}>
                                    <li><a href={id}> read me</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



)

News.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default News
