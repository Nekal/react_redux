import React from 'react'
import PropTypes from 'prop-types'
import '../styles/bootstrap.css'
import '../styles/news.css'
import {Link} from "react-router-dom";

const NewsComponent = ({news, status, viewedNews}) => {
     return (
        <div  className='container' onLoad={() => {
            if (status === "new") {
                document.getElementById(news.id).style.background = "white"
                viewedNews(news.id)
            }
        }}>
            <img src={"https://vice-web-statics-cdn.vice.com/icons/close-navigation-menu-white.svg"} alt={""}/>
            <div className='row'>
                <div className='col-md-10'>
                    <div id={news.id} className={'thumbnail animated ' + (status === "new"? "new": "viewed")} >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h1 className="mt-12">{news.title}</h1 >
                                    <hr/>
                                    <p className="content">{news.content}</p>
                                    <hr/>
                                    <ul className="list-inline list-unstyled" style={{textAlign: 'right'}}>
                                        <li><Link to={"/" + news.id}> read me</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


NewsComponent.propTypes = {
    news: PropTypes.object.isRequired,
}

export default NewsComponent