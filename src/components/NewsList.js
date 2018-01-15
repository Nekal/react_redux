import React from 'react'
import News from './News'
import '../styles/newsList.css'

const NewsList = () => {
    let newsList = []

    for(let i = 0; i < window.localStorage.length; i++) {
        let key = window.localStorage.key(i)
        newsList.push(JSON.parse(window.localStorage.getItem(key)))
    }
    return (
        <div className="list">
            <ul>
                {newsList.map(news =>
                    <News news={news} key={news.id}/>
                )}
            </ul>
        </div>
    )
}




export default NewsList
