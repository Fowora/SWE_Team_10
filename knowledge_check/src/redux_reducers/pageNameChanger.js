


const pageNameChangerReducer = (state = 'H', action) => {
    switch(action.type){
        case 'NAMECHANGE': return state = action.Data;
        default: return 'There is an error somewhere here';
    }
}
export default pageNameChangerReducer;