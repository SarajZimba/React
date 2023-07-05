const context = {
    count:0,
    data:100
}

const counterReducer = (state=context, action) => {
    switch(action.type){
        case "INCREASE":
            return {...state, count: ++state.count}
        case "DECREASE":
            return {...state, count: --state.count}
        case "RESET":
            return {...state, count: 0}
        case "INCREASE_DATA":
            return {...state, data: state.data + 10}
        case "DECREASE_DATA":
            return {...state, data: state.data - 10}
        case "RESET_DATA":
            return {...state, data: 0}
        
            default:
                return state;
    }
    
}

export default counterReducer