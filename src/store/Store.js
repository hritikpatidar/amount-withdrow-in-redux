const { legacy_createStore } = require("redux")
const { default: rootReducer } = require("../reducer/Reducer")

let storeObject = legacy_createStore(rootReducer,1000)

console.log(storeObject)
export default storeObject;