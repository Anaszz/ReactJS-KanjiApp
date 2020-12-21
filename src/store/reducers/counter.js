//REDUCER -> les states et la modification apportée en réponse à une ACTION 
const counterReducer = (state = 3, action) => {
    switch (action.type) { //connecte le nom de l'action au reducer
        case 'DECREMENT':
            return state -1;
        default:
            return state
    }
}

export default counterReducer