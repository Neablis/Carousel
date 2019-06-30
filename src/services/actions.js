export const SEARCH = 'SEARCH'
export const CHANGE_IMAGE = 'CHANGE_IMAGE'
export const DETAILS = 'DETAILS'
export const NEXT_PAGE = 'NEXT_PAGE'

const rootURL = 'https://api.unsplash.com'
const clientId = '6bb5bb78cfde81736048d37f2d3399d5024a6a5be277ad88a4b1a366a5e4f77f'

export function search(search, page=1) {
  return (dispatch, getState) => {
    fetch(`${rootURL}/search/photos?page=${page}&query=${search}&client_id=${clientId}`)
      .then((response) => {
        response
          .json()
          .then((result) => {
            dispatch(details(result.results[0].id))
            
            dispatch({
              type: SEARCH,
              data: {
                result,
                search: search,
              }
            })
          })
      })
  }
}

export function getNextPage() {
  return (dispatch, getState) => {
    const {
      search,
      page
    } = getState().search

    fetch(`${rootURL}/search/photos?page=${page}&query=${search}&client_id=${clientId}`)
      .then((response) => {
        response
          .json()
          .then((result) => {            
            dispatch({
              type: NEXT_PAGE,
              data: {
                result,
                search: search,
              }
            })
          })
      })
  }
}

// GET /photos/:id/statistics
export function details(id) {
  return (dispatch, getState) => {
    fetch(`${rootURL}/photos/${id}/statistics?client_id=${clientId}`)
      .then((response) => {
        response
          .json()
          .then((result) => {
            dispatch({
              type: DETAILS,
              data: result
            })
          })
      })
  }
}

export function nextImage() {
  return (dispatch, getState) => {
    let state = getState().search
            
    let current_image = state.current_image + 1

    let prev = state.image
    let image = state.next_image
    let next = state.results[current_image + 1]
    
    if (state.img_details[prev.id]) {
      dispatch(details(prev.id))
    }
    
    if (state.img_details[image.id]) {
      dispatch(details(image.id))
    }
    
    if (state.img_details[next.id]) {
      dispatch(details(next.id))
    }

    dispatch({
      type: CHANGE_IMAGE,
      data: {
        prev,
        image,
        next,
        current_image
      }
    })
  }
}

export function previousImage() {
  return (dispatch, getState) => {
    let state = getState().search
        
    let current_image = state.current_image - 1
    
    let prev = state.results[current_image - 1]
    let image = state.previous_image
    let next = state.image
    
    if (state.img_details[prev.id]) {
      dispatch(details(prev.id))
    }
    
    if (state.img_details[image.id]) {
      dispatch(details(image.id))
    }
    
    if (state.img_details[next.id]) {
      dispatch(details(next.id))
    }

    dispatch({
      type: CHANGE_IMAGE,
      data: {
        prev,
        image,
        next,
        current_image
      }
    })
  }
}