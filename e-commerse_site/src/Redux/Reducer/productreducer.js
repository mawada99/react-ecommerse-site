export default function productReducer(state=[],action){
    if(action.type=="GET-PRODUCT") return action.payload
    
return state
}