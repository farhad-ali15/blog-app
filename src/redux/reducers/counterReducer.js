
const initialState = 0
export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DEPOSIT':
            return state += action.payload
        case 'WITHDRAW':
            return state -= action.payload
        default:
            return state
    }
    

}