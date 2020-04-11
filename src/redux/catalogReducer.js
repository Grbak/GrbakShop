const CHANGE_TAB = 'CHANGE-TAB';
const UPDATE_NEW_COMMENT_TEXT = 'UPDATE-NEW-COMMENT-TEXT';
const ADD_COMMENT = 'ADD-COMMENT';
const SET_PRODUCTS = 'SET-PRODUCTS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_PRODUCTS_COUNT = 'SET-PRODUCTS-COUNT';

let initialState = {
    products: [],
    newCommentText: '',
    currentPage: 1,
    productsCount: 0,
    currentTab: 1,
    pageSize: 8,
};

const catalogReducer = (state = initialState, action) => {
    switch(action.type) { 
        case CHANGE_TAB:
            return {
                ...state,
                currentTab: action.flag,
            };

        case UPDATE_NEW_COMMENT_TEXT:
            return {
                ...state,
                newCommentText: action.newText,
            };

        case ADD_COMMENT:
            console.log('PRODUCTS', (action.productId - 1) % state.pageSize);
            let newComment = {text: state.newCommentText, time: action.time};
            let currentProductComments = [...state.products[(action.productId - 1) % state.pageSize].comments, newComment];

            let currentProduct = {
                ...state.products[(action.productId - 1) % state.pageSize],
                comments: currentProductComments,
            }

            let newStateProducts = [...state.products];
            newStateProducts[(action.productId - 1) % state.pageSize] = currentProduct;

            return {
                ...state,
                newCommentText: '',
                products: newStateProducts,
            };

        case SET_PRODUCTS:
            let newProducts = [...action.products];
            return {
                ...state,
                products: newProducts,
            };
        
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };

        case SET_PRODUCTS_COUNT:
            return {
                ...state,
                productsCount: action.count,
            };

        default:  
            return {...state};
    }
};

export const changeTab = (flag) => ({type: CHANGE_TAB, flag: flag});
export const addComment = (currentProductId, currentTime) => {
    return {type: ADD_COMMENT, productId: currentProductId, time: currentTime};
};
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setProducts = (products) => ({type: SET_PRODUCTS, products: products});
export const updateNewCommentText = (text) => {
    return {type: UPDATE_NEW_COMMENT_TEXT, newText: text, };
};
export const setProductsCount = (count) => ({type: SET_PRODUCTS_COUNT, count});

export default catalogReducer;

