import React from 'react'
import '../styles/bootstrap.css'
import '../styles/newsDetail.css'

const NewsDetail = (props) =>{
    let todo = JSON.parse(window.localStorage.getItem(props.match.params.id))
    return (
        <div className='container'>
            <div className='row detail'>
                <div className='col-md-12'>
                    <div className='thumbnail'>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h1 className="mt-3">{todo.title}</h1>
                                    <hr />
                                    <p>{todo.content}</p>
                                    <hr />
                                    <ul className="list-inline list-unstyled">
                                        {/*<li><DeleteTodo id={todo.id}/></li>*/}
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
