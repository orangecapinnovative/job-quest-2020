import { FETCH_CATEGORIES, SEARCH_JOKES, SEARCH_JOKE } from '../actions'
export const fetchCategories = () => {
    return {
        type: FETCH_CATEGORIES
    }
}
export function SearchJokes(item) {
    return {
        type: SEARCH_JOKES,
        item
    }
}
export function SearchJoke(id) {
    return {
        type: SEARCH_JOKE,
        id
    }
}
