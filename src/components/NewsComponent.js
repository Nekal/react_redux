// import React from 'react'
// import PropTypes from 'prop-types'
// import '../styles/bootstrap.css'
// import '../styles/news.css'
// import {Link} from 'react-router-dom';
//
// const NewsComponent = ({news, status}) => {
//     return (
//         <div  className='container'>
//             <div className='row'>
//                 <div className='col-md-10'>
//                     <div id={news.id} className={'thumbnail animated viewed' + (status ? ' new' : ' viewed')}>
//                     {/*<div id={news.id} className={'thumbnail'}>*/}
//                         <div className={'container'}>
//                             <div className='row'>
//                                 <div className='col-lg-12'>
//                                     <h1 className='mt-12'>{news.title}</h1 >
//                                     <hr/>
//                                     <p className='content'>{news.description}</p>
//                                     <hr/>
//                                     <ul className='list-inline list-unstyled' style={{textAlign: 'right'}}>
//                                         <li><Link to={'/news/' + news.id}> read me</Link></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
//
//
// NewsComponent.propTypes = {
//     news: PropTypes.object.isRequired,
//     status: PropTypes.bool.isRequired,
// }
//
// export default NewsComponent
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/bootstrap.css';
import '../styles/news.css';
import {Link} from 'react-router-dom';

class NewsComponent extends React.Component {
  constructor (props) {
    super(props);
    this.news = props.news;
    this.status = props.status;
    this.element = null;
  }

  componentWillMount () {

  }

  componentDidMount () {
    if (this.status) {
      this.element.className += ' new';
      document.getElementById(this.news.id).className += ' new';
    }
  }

  componentWillAppear () {
    this.element.className += ' viewed';
  }

  componentDidAppear () {
    this.element.className += ' viewed';
  }

  componentWillUpdate () {
    this.element.className += ' viewed';
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-10'>
            <div id={this.news.id} className={'thumbnail animated'} ref={(ref) => {
              this.element = ref;
            }}>
              <div className={'container'}>
                <div className='row'>
                  <div className='col-lg-12'>
                    <h1 className='mt-12'>{this.news.title}</h1 >
                    <hr/>
                    <p className='content'>{this.news.description}</p>
                    <hr/>
                    <ul className='list-inline list-unstyled' style={{textAlign: 'right'}}>
                      <li><Link to={'/news/' + this.news.id}> read me</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NewsComponent.propTypes = {
  news: PropTypes.object.isRequired
};

export default NewsComponent;
