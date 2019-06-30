import * as Actions from './actions'

export const initialState = {
  results: [],
  total: 0,
  total_pages: 0,
  current_page: null,
  current_image: null,
  previous_image: null,
  image: null,
  next_image: null,
  img_details: {},
  search: null
}

const searchReducer = (state = initialState, action = {}) => {
  let newState = null
  
	switch (action.type) {
		case Actions.SEARCH:
      const {
        result: {
          results
        },
        search,
        total, 
        total_pages
      } = action.data
      
      newState = Object.assign(
        {}, 
        state, 
        {
          results,
          search,
          total,
          total_pages,
          current_page: 1,
          current_image: 0,
          image: results[0],
          next_image: results[1]
        }
      )
      
      return newState
    case Actions.NEXT_PAGE:      
      debugger;
      
      // newState = Object.assign(
      //   {}, 
      //   state, 
      //   {
      //     results,
      //     search,
      //     total,
      //     total_pages,
      //     current_page: 1,
      //     current_image: 0,
      //     image: results[0],
      //     next_image: results[1]
      //   }
      // )
      
      return newState
    case Actions.CHANGE_IMAGE:
      const {
        prev,
        image, 
        next,
        current_image
      } = action.data
    
      newState = Object.assign(
        {}, 
        state, 
        {
          previous_image: prev,
          image: image,
          next_image: next,
          current_image
        }
      )
      return newState
    case Actions.DETAILS:
      let details = state.img_details
      
      details[action.data.id] = action.data
    
      newState = Object.assign(
        {}, 
        state, 
        {
          img_details: details
        }
      )
      
      return newState
		default:
			return state
	}
}

export default searchReducer
