import React from 'react';
import './App.css';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

import * as actions from './services/actions'
import Slideshow from './components/slideshow'
import Searchbar from './components/searchbar'

function App(props) {
  const {
    actions,
    results,
    previousImage,
    currentImage,
    nextImage
  } = props
        
  return (
    <div className="App">
      <h1>Superhuman Image Project</h1>
      <Searchbar onSearch={_.debounce(actions.search, 1000)} />
      <Slideshow 
        results={results}  
        prevImage={previousImage} 
        currentImage={currentImage} 
        nextImage={nextImage} 
        next={actions.nextImage}
        prev={actions.previousImage}
      />
    </div>
  );
}

function mapStateToProps (state) {
  return {
    results: state.search.results,
    currentImage: state.search.image,
    previousImage: state.search.previous_image,
    nextImage: state.search.next_image
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch,
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
