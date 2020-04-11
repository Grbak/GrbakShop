
let initialState = {
    brands: [
        {   title: 'Fender', 
            path: 'fender',},

        {   title: 'Gibson', 
            path: 'gibson',},

        {   title: 'Ibanez', 
            path: 'ibanez',},

        {   title: 'Epiphone', 
            path: 'epiphone',},

        {   title: 'Jackson', 
            path: 'jackson',},
        
        {   title: 'ESP', 
            path: 'esp',},

        {   title: 'B.C.Rich', 
            path: 'bc_rich',},

        {   title: 'Cort', 
            path: 'cort',},
    ],
};
    

const brandsReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return {...state};
    }
};

export default brandsReducer;