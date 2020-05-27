import {AssortmentAPI} from '../api/api';

const CHANGE_TAB = 'CHANGE-TAB';
const UPDATE_NEW_COMMENT_TEXT = 'UPDATE-NEW-COMMENT-TEXT';
const ADD_COMMENT = 'ADD-COMMENT';
const SET_PRODUCTS = 'SET-PRODUCTS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_PRODUCTS_COUNT = 'SET-PRODUCTS-COUNT';
const SET_BRANDS = 'SET-BRANDS';
const SET_FILTER = 'SET-FILTER';
const SET_SORT_DIRECTION = 'SET-SORT-DIRECTION';
const SET_SORT_PARAMETER = 'SET-SORT-PARAMETER';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    products: [],
    brands: [],
    newCommentText: '',
    currentPage: 1,
    productsCount: 0,
    currentTab: 1,
    pageSize: 8,
    isFetching: false,
    sortParams: {
        filter: {
            brands: [],
        },
        direction: -1,
        parameter: 'price',
    }
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

        case SET_BRANDS:
            return {
                ...state,
                brands: action.brands,
            };

        case SET_FILTER:
            let filter = {
                brands: action.newFilter.brands,
            };
            return {
                ...state,
                sortParams: {...state.sortParams, filter},
            };

        case SET_SORT_DIRECTION:
            return {
                ...state,
                sortParams: {...state.sortParams, direction: action.newSortDirection,},
            };

        case SET_SORT_PARAMETER: 
            return {
                ...state,
                sortParams: {...state.sortParams, parameter: action.newSortParameter,},
            };

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
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
export const setBrands = (brands) => ({type: SET_BRANDS, brands});
export const setFilter = (newFilter) => ({type: SET_FILTER, newFilter});
export const setSortDirection = (newSortDirection) => ({type: SET_SORT_DIRECTION, newSortDirection});
export const setSortParameter = (newSortParameter) => ({type: SET_SORT_PARAMETER, newSortParameter});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default catalogReducer;

export const getBrandsThunk = () => {
    return (dispatch) => {
        AssortmentAPI.getBrands()
        .then(data => {
            dispatch(setBrands(data.brandsNames));
        });
    };
};

export const getProductsThunk = (currentPage, pageSize, filter, sortParameter, sortDirection) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        AssortmentAPI.getProducts(currentPage, pageSize, filter, sortParameter, sortDirection)
            .then(data => {
                dispatch(setProducts(data.products))
                dispatch(setProductsCount(data.productsCount));
                dispatch(toggleIsFetching(false));
            });
    };
};
