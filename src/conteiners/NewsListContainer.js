import { connect } from 'react-redux'
import React from "react";
// import PropTypes from 'prop-types'
import NewsListComponent from "../components/NewsListComponent";
import {getAllNewsAction} from "../actions";

let NewsListContainer = () => {
    getAllNewsAction()
        .then((newsList) => {
            console.log(newsList)
            return (
                <NewsListComponent newsList={newsList}/>
            )
        })
        .catch(err => {
            console.log('ERROR: ' + JSON.stringify(err))
        })


    // console.log(newsList)
    // return (
    //     <NewsListComponent newsList={newsList}/>
    // )
}

// let NewsList = () => {
//     let newsList = getAllNewsAction()
//     console.log("container " + JSON.stringify(newsList))
//     if(newsList !== undefined) {
//         return {newsList}
//     } else {
//         return []
//     }
//
// }

// NewsListContainer.propTypes = {
//     newsList: PropTypes.array.isRequired,
// }

NewsListContainer = connect()(NewsListContainer)

export default NewsListContainer
