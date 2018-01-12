import React from 'react'
import News from './News'
import '../styles/newsList.css'

let newsList = []
for(let i = 0; i < window.localStorage.length; i++) {
    let key = window.localStorage.key(i)
    newsList.push(JSON.parse(window.localStorage.getItem(key)))
}

const NewsList = () => (
    <div className="list">
        <ul>
            {newsList.map(news =>
                <News key={news.id} id={news.id} title={news.title} content={news.content}/>
            )}
        </ul>
    </div>
)



export default NewsList
