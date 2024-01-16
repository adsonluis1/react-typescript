export const coutReducer = (state:number, action:'mais' | 'menos'):number=>{
    switch (action) {
        case 'mais':
            return state+1
        case 'menos':
            return state-1
        default:
            return state
    }
}