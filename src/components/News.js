import React from 'react'
import PropTypes from 'prop-types'
import '../styles/bootstrap.css'
import '../styles/news.css'

const News = ({news}) => {
     return (
        <div  className='container' onLoad={() => {
            if (news.status === 'new') {
                document.getElementById(news.id).style.background = "white"
                news.status = "viewed"
                window.localStorage.setItem(news.id, JSON.stringify(news))
            }
        }}>

            <img src={"https://vice-web-statics-cdn.vice.com/icons/close-navigation-menu-white.svg"} alt={""}/>
            <div className='row'>
                <div className='col-md-10'>
                    <div id={news.id} className='thumbnail animated' style={{background: news.status === "new"? "#8fcafe": "white"}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h1 className="mt-12">{news.title}</h1 >
                                    <hr/>
                                    <p className="content">{news.content}</p>
                                    <hr/>
                                    <ul className="list-inline list-unstyled" style={{textAlign: 'right'}}>
                                        <li><a href={news.id}> read me</a></li>
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
