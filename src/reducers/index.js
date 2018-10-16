import value from './value'
function combineReducers(reducers) {
    return (state = {}, action) => Object.keys(reducers).reduce(
        (result, key) => ({ ...result, [key]: reducers[key](state[key], action) })
        , {})
}
export default combineReducers({
    value
}) 