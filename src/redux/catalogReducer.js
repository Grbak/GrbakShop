const CHANGE_TAB = 'CHANGE-TAB';
const UPDATE_NEW_COMMENT_TEXT = 'UPDATE-NEW-COMMENT-TEXT';
const ADD_COMMENT = 'ADD-COMMENT';

let initialState = {
    products: [
        {productId: 1, name: 'Fender Player Stratocaster Fender Plus Top ACB MN', 
        price: '$ 3 099 ,99', color: 'красный', country:'США', conf: 'SSS', type: 'цельнокорпусная',
        orientation:' правосторонняя', neckMaterial: 'клён', stringsNumber: 6, fretsNumber: 22,
        photo: 'https://www.guitarrasybaterias.com/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/0/1/0144552531_gtr_frt_001_rr_1.png', 
        availability: 1, comments: ['Красивая гитара', 'Хорошо лежит в руке!', 'теплый ламповый звук...', ], 
        description: ['Вдохновляющее звучание Stratocaster является одной из основ Fender. Обладающая классическим звуком, а именно колоколообразными верхами, панчевым средним диапазоном и мощными басами в сочетании с кристально чистой артикуляцией, электрогитара FENDER PLAYER STRATOCASTER HSS PLUS TOP MN ACB наполнена аутентичным ощущением и стилем Fender. Инструмент готов служить вашему музыкальному видению. Он достаточно универсален, чтобы справиться с любым музыкальным']},

        {productId: 2, name: 'Fender Player Stratocaster', 
        price: '$ 599,99', color: 'белый', country:'США', conf: 'HSS', type: 'цельнокорпусная',
        orientation:' правосторонняя', neckMaterial: 'клён', stringsNumber: 6, fretsNumber: 22,
        photo: 'https://cdn.webshopapp.com/shops/214622/files/284563530/image.jpg', 
        availability: 6, comments: ['Красивая гитара', 'Хорошо лежит в руке!', 'теплый ламповый звук...', ],
        description: ['Вдохновляющее звучание Stratocaster является одной из основ Fender. Обладающая классическим звуком, а именно колоколообразными верхами, панчевым средним диапазоном и мощными басами в сочетании с кристально чистой артикуляцией, электрогитара FENDER PLAYER STRATOCASTER HSS PLUS TOP MN ACB наполнена аутентичным ощущением и стилем Fender. Инструмент готов служить вашему музыкальному видению. Он достаточно универсален, чтобы справиться с любым музыкальным']},

        {productId: 3, name: 'Fender Classic Player Baja Telecaster', 
        price: '$ 799,99', color: 'древесный', country:'США', conf: 'SS', type: 'цельнокорпусная',
        orientation:' правосторонняя', neckMaterial: 'клён', stringsNumber: 6, fretsNumber: 22,
        photo: 'https://images.squarespace-cdn.com/content/v1/55873fffe4b0e842044c4c9a/1511384217165-3UYL50YJPF2MKDFEZCK6/ke17ZwdGBToddI8pDm48kJO6xy8wDQkaz2MIP3siPCQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2c46FJLhiTTH3_jCoYXbHcTG_DlxqfH_M4s5wMQj4_XwKMshLAGzx4R3EDFOm1kBS/Fender+Classic+Player+Baja+Telecaster+FRONT.png', 
        availability: 9, comments: ['Красивая гитара', 'Хорошо лежит в руке!', 'теплый ламповый звук.....', ],
        description: ['Вдохновляющее звучание Stratocaster является одной из основ Fender. Обладающая классическим звуком, а именно колоколообразными верхами, панчевым средним диапазоном и мощными басами в сочетании с кристально чистой артикуляцией, электрогитара FENDER PLAYER STRATOCASTER HSS PLUS TOP MN ACB наполнена аутентичным ощущением и стилем Fender. Инструмент готов служить вашему музыкальному видению. Он достаточно универсален, чтобы справиться с любым музыкальным']},

        {productId: 4, name: 'Fender Player Left Handed Telecaster', 
        price: '$ 919,99', color: 'черный', country:'США', conf:'SS', type: 'цельнокорпусная',
        orientation:' левосторонняя', neckMaterial: 'клён', stringsNumber: 6, fretsNumber: 22,
        photo: 'https://www.musoscorner.com.au/media/catalog/product/0/1/0145222506_gtr_frt_001_rl.png', 
        availability: 0, comments: ['Красивая гитара', 'Хорошо лежит в руке!', 'теплый ламповый звук.....', ],
        description: ['Вдохновляющее звучание Stratocaster является одной из основ Fender. Обладающая классическим звуком, а именно колоколообразными верхами, панчевым средним диапазоном и мощными басами в сочетании с кристально чистой артикуляцией, электрогитара FENDER PLAYER STRATOCASTER HSS PLUS TOP MN ACB наполнена аутентичным ощущением и стилем Fender. Инструмент готов служить вашему музыкальному видению. Он достаточно универсален, чтобы справиться с любым музыкальным']},

        {productId: 5, name: 'Fender Vintera 50s Telecaster ', 
        price: '$ 899,99', color: 'красный', country:'США', conf: 'SS', type: 'цельнокорпусная',
        orientation:' правосторонняя', neckMaterial: 'клён', stringsNumber: 6, fretsNumber: 22,
        photo: 'https://www.swingcitymusic.com/wp-content/uploads/2019/09/0149852340_gtr_frt_001_rr.png', 
        availability: 13, comments: ['Красивая гитара', 'Хорошо лежит в руке!', 'теплый ламповый звук.....', ],
        description: ['Вдохновляющее звучание Stratocaster является одной из основ Fender. Обладающая классическим звуком, а именно колоколообразными верхами, панчевым средним диапазоном и мощными басами в сочетании с кристально чистой артикуляцией, электрогитара FENDER PLAYER STRATOCASTER HSS PLUS TOP MN ACB наполнена аутентичным ощущением и стилем Fender. Инструмент готов служить вашему музыкальному видению. Он достаточно универсален, чтобы справиться с любым музыкальным']},

        {productId: 6, name: 'Fender Squier Affinity Stratocaster', 
        price: '$ 199,99', color: 'зеленый', country:'США', conf: 'SSS', type: 'цельнокорпусная',
        orientation:' правосторонняя', neckMaterial: 'палисандр', stringsNumber: 6, fretsNumber: 22,
        photo: 'https://images.squarespace-cdn.com/content/v1/55873fffe4b0e842044c4c9a/1513135287578-2DZDTHHWXSBNOTYD4UNY/ke17ZwdGBToddI8pDm48kFq-5U1G4ycqfjHitUPuTvoUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2N30YpliarI2Ls62HzKmeQ8kpxrTH6M4X-G_zkZGSRnAKMshLAGzx4R3EDFOm1kBS/Squier+Affinity+Strat+Surf+Green+Front.png', 
        availability: 17, comments: ['Красивая гитара', 'Хорошо лежит в руке!', 'теплый ламповый звук.....', ],
        description: ['Вдохновляющее звучание Stratocaster является одной из основ Fender. Обладающая классическим звуком, а именно колоколообразными верхами, панчевым средним диапазоном и мощными басами в сочетании с кристально чистой артикуляцией, электрогитара FENDER PLAYER STRATOCASTER HSS PLUS TOP MN ACB наполнена аутентичным ощущением и стилем Fender. Инструмент готов служить вашему музыкальному видению. Он достаточно универсален, чтобы справиться с любым музыкальным']},

        {productId: 7, name: 'Ibanez Artcore AM53', 
        price: '$ 9 999,99', color: 'коричневый', country:'США', conf: 'HH', type: 'полуакустическая',
        orientation:' правосторонняя', neckMaterial: 'ньятон', stringsNumber: 6, fretsNumber: 22,
        photo: 'https://i.pinimg.com/originals/7e/6e/76/7e6e761f6db252bb066057150781765d.png', 
        availability: 6, comments: ['Красивая гитара', 'Хорошо лежит в руке!', 'теплый ламповый звук.....', ],
        description: ['Вдохновляющее звучание Stratocaster является одной из основ Fender. Обладающая классическим звуком, а именно колоколообразными верхами, панчевым средним диапазоном и мощными басами в сочетании с кристально чистой артикуляцией, электрогитара FENDER PLAYER STRATOCASTER HSS PLUS TOP MN ACB наполнена аутентичным ощущением и стилем Fender. Инструмент готов служить вашему музыкальному видению. Он достаточно универсален, чтобы справиться с любым музыкальным']},

        {productId: 8, name: 'Ibanez SA360QM-SPB', 
        price: '$ 4 999,99', color: 'синий', country:'США', conf: 'HSS', type: 'цельнокорпусная',
        orientation:' правосторонняя', neckMaterial: 'ньятон', stringsNumber: 6, fretsNumber: 22,
        photo: 'http://soundfirst.ru/sites/fb1/d98/fb1d981f0/images/product/014/014319/251-1b08gu3wxgbsokc4gg8ws0gsos.png', 
        availability: 7, comments: ['Красивая гитара', 'Хорошо лежит в руке!', 'теплый ламповый звук.....', ],
        description: ['Вдохновляющее звучание Stratocaster является одной из основ Fender. Обладающая классическим звуком, а именно колоколообразными верхами, панчевым средним диапазоном и мощными басами в сочетании с кристально чистой артикуляцией, электрогитара FENDER PLAYER STRATOCASTER HSS PLUS TOP MN ACB наполнена аутентичным ощущением и стилем Fender. Инструмент готов служить вашему музыкальному видению. Он достаточно универсален, чтобы справиться с любым музыкальным']},

        {productId: 9, name: 'Ibanez Artcore AS73', 
        price: '$ 549,99', color: 'коричневый', country:'США', conf: 'HH', type: 'полуакустическая',
        orientation:' правосторонняя', neckMaterial: 'ньятон', stringsNumber: 6, fretsNumber: 22,
        photo: 'https://cdn2.bigcommerce.com/n-zfvgw8/6yzvyy2b/products/14221/images/62956/AS73TBC__18858.1399222635.500.750.png?c=2', 
        availability: 4, comments: ['Красивая гитара', 'Хорошо лежит в руке!', 'теплый ламповый звук.....', ],
        description: ['Вдохновляющее звучание Stratocaster является одной из основ Fender. Обладающая классическим звуком, а именно колоколообразными верхами, панчевым средним диапазоном и мощными басами в сочетании с кристально чистой артикуляцией, электрогитара FENDER PLAYER STRATOCASTER HSS PLUS TOP MN ACB наполнена аутентичным ощущением и стилем Fender. Инструмент готов служить вашему музыкальному видению. Он достаточно универсален, чтобы справиться с любым музыкальным']},

        // {productId: , name: '', price: '', color: '', country:'США', conf: , photo: '', availability: '', comments: [],},
    ],
    brands: ['Fender', 'Gibson', 'Ibanez', 'Epiphone', 'Jackson', 'ESP', 'B.C.Rich', 'Cort',],
    newCommentText: '',
};

const catalogReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_TAB:
            return state;
        case UPDATE_NEW_COMMENT_TEXT:
            state.newCommentText = action.newText;
            return state;
        case ADD_COMMENT:
            let currentProduct = state.products.find( p => { if(p.productId == action.productId) return true});
            currentProduct.comments.push(state.newCommentText);
            state.newCommentText = '';
            return state;
        default: 
            return state;
    }
};

export const changeTabActionCreator = () => ({type: CHANGE_TAB,});
export const addCommentActionCreator = (currentProductId) => {
    return {type: ADD_COMMENT, productId: currentProductId, };
};
export const updateNewCommentTextActionCreator = (text) => {
    return {type: UPDATE_NEW_COMMENT_TEXT, newText: text, };
};

export default catalogReducer;

