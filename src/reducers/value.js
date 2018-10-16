
import { FETCH_CATEGORIES } from '../actions'
const initialState = []
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return console.log('reducers value')
        // return [
        //     fetch(`/categories`)
        //     .then(res => res.json())
        // .then(({ value }) =>  console.log(store.getState())
        // ]
        //   }
        default:
            return state
    }
}