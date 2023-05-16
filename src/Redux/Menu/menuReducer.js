const initialState = {
    menuData: {}  // Initial empty menu data
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MENU_DATA':
            return {
                ...state,
                menuData: action.payload
            };
        default:
            return state;
    }
};

export default menuReducer;