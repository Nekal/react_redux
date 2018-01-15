import React from 'react'
import PropTypes from 'prop-types'
import '../styles/bootstrap.css'
import '../styles/news.css'
import {Link} from "react-router-dom";
import {store} from "../index";

const News = ({news}) => {
    let state = store.getState()
    let id = null
    let index = null
    for(let i = 0; i < state.news.length; i++) {
        if (state.news[i] !== undefined && news.id === state.news[i].id) {
            id = state.news[i].id
            index = i
        }
    }

     return (
        <div  className='container' onLoad={() => {
            if (state.news[index] !== undefined && news.id === state.news[index].id) {
                document.getElementById(news.id).style.background = "white"
                delete state.news[index]
            }
        }}>
            <img src={"https://vice-web-statics-cdn.vice.com/icons/close-navigation-menu-white.svg"} alt={""}/>
            <div className='row'>
                <div className='col-md-10'>
                    <div id={news.id} className='thumbnail animated' style={{background: id === news.id? "#8fcafe": "white"}}>
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


News.propTypes = {
    news: PropTypes.object.isRequired,
}

export default News
