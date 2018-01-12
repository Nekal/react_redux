import React from 'react'
import '../styles/bootstrap.css'
import '../styles/newsDetail.css'
import DeleteNewsContainer from "../conteiners/DeleteNewsContainer";

const NewsDetail = (props) =>{
    let news = JSON.parse(window.localStorage.getItem(props.match.params.id))
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
                                        {/*<li><a className='btn btn-primary' href={"/edit/" + todo.id}>Edit</a></li>*/}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}

// NewsDetail.propTypes = {
//     props: PropTypes.object.isRequired,
// }

export default NewsDetail
