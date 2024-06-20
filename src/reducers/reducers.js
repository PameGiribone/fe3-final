export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_DENTISTAS':
            return {...state, users: action.payload}
        case 'ADD_FAVORITE':           
            const exists = state.favoritos.some(fav => fav.id === action.payload.id);
             if (exists) {return state}
             return {...state, favoritos: [...state.favoritos, action.payload]};
        case 'GET_FAVORITES':
            return {...state, favoritos: action.payload}
        case 'SET_FAVORITOS':
            return {...state, favoritos: action.payload}
        case 'REMOVE_FAVORITE':
            return {...state, favoritos: state.favoritos.filter(fav => fav.id !== action.payload.id)}      
        case 'TOGGLE_THEME':
            return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
        default:
            throw new Error('Action type not found')
    }
}