import React from 'react'
import '../styles/bootstrap.css'
import '../styles/newsDetail.css'
import DeleteNewsContainer from "../conteiners/DeleteNewsContainer";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const NewsDetailComponent = ({news}) =>{
    return (
        <div className='container'>
            <div className='row detail'>
                <div className='col-md-12'>
                    <div className='thumbnail'>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h1 className="mt-3">{news.title}</h1>
                                    <hr />
                                    <p>{news.content}</p>
                                    <hr />
                                    <ul className="list-inline list-unstyled">
                                        <li><DeleteNewsContainer id={news.id}/></li>
                                        <li><Link className='btn btn-primary' to={"/edit/" + news.id}>Edit</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}

NewsDetailComponent.propTypes = {
    news: PropTypes.object.isRequired,
}

export default NewsDetailComponent
