import rerenderEntireTree from '../render.js'

let state = {
    catalogPage: {
        products: [
            {productId: 1, name: 'Fender Player Stratocaster Fender Plus Top ACB MN', price: '$ 3 100 000,00', color: 'Красный', country:'США', conf: 'SSS', photo: 'https://www.guitarrasybaterias.com/media/catalog/product/cache/1/image/363x/040ec09b1e35df139433887a97daa66f/0/1/0144552531_gtr_frt_001_rr_1.png', availability: 1, comments: ['Красивая гитара', 'Хорошо лежит в руке!', 'теплый ламповый звук.....', ], },
            {productId: 2, name: 'Fender Player Stratocaster', price: '$ 599,99', color: 'Белый', country:'США', conf: 'HSS', photo: 'https://cdn.webshopapp.com/shops/214622/files/284563530/image.jpg', availability: 6, comments: ['Красивая гитара', 'Хорошо лежит в руке!', 'теплый ламповый звук.....', ], },
            {productId: 3, name: 'Fender Classic Player Baja Telecaster', price: '$ 799,99', color: 'Древесный', country:'США', conf: 'SS', photo: 'https://images.squarespace-cdn.com/content/v1/55873fffe4b0e842044c4c9a/1511384217165-3UYL50YJPF2MKDFEZCK6/ke17ZwdGBToddI8pDm48kJO6xy8wDQkaz2MIP3siPCQUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2c46FJLhiTTH3_jCoYXbHcTG_DlxqfH_M4s5wMQj4_XwKMshLAGzx4R3EDFOm1kBS/Fender+Classic+Player+Baja+Telecaster+FRONT.png', availability: 9, comments: ['Красивая гитара', 'Хорошо лежит в руке!', 'теплый ламповый звук.....', ],},
            {productId: 4, name: 'Fender Player Left Handed Telecaster', price: '$ 919,99', color: 'Черный', country:'США', conf:'SS', photo: 'https://www.musoscorner.com.au/media/catalog/product/0/1/0145222506_gtr_frt_001_rl.png', availability: 0, comments: ['Красивая гитара', 'Хорошо лежит в руке!', 'теплый ламповый звук.....', ],},
            {productId: 5, name: 'Fender Vintera 50s Telecaster ', price: '$ 899,99', color: 'Красный', country:'США', conf: 'SS', photo: 'https://www.swingcitymusic.com/wp-content/uploads/2019/09/0149852340_gtr_frt_001_rr.png', availability: 13, comments: ['Красивая гитара', 'Хорошо лежит в руке!', 'теплый ламповый звук.....', ],},
            {productId: 6, name: 'Fender Squier Affinity Stratocaster', price: '$ 199,99', color: 'Зеленый', country:'США', conf: 'SSS', photo: 'https://images.squarespace-cdn.com/content/v1/55873fffe4b0e842044c4c9a/1513135287578-2DZDTHHWXSBNOTYD4UNY/ke17ZwdGBToddI8pDm48kFq-5U1G4ycqfjHitUPuTvoUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2N30YpliarI2Ls62HzKmeQ8kpxrTH6M4X-G_zkZGSRnAKMshLAGzx4R3EDFOm1kBS/Squier+Affinity+Strat+Surf+Green+Front.png', availability: 17, comments: ['Красивая гитара', 'Хорошо лежит в руке!', 'теплый ламповый звук.....', ],},
            {productId: 7, name: 'Ibanez Artcore AM53', price: '$ 9 999,99', color: 'Коричневый', country:'США', conf: 'HH', photo: 'https://i.pinimg.com/originals/7e/6e/76/7e6e761f6db252bb066057150781765d.png', availability: 6, comments: ['Красивая гитара', 'Хорошо лежит в руке!', 'теплый ламповый звук.....', ],},
            {productId: 8, name: 'Ibanez SA360QM-SPB', price: '$ 4 999,99', color: 'Синий', country:'США', conf: 'HSS', photo: 'http://soundfirst.ru/sites/fb1/d98/fb1d981f0/images/product/014/014319/251-1b08gu3wxgbsokc4gg8ws0gsos.png', availability: 7, comments: ['Красивая гитара', 'Хорошо лежит в руке!', 'теплый ламповый звук.....', ],},
            {productId: 9, name: 'Ibanez Artcore AS73', price: '$ 549,99', color: 'Коричневый', country:'США', conf: 'HH', photo: 'https://cdn2.bigcommerce.com/n-zfvgw8/6yzvyy2b/products/14221/images/62956/AS73TBC__18858.1399222635.500.750.png?c=2', availability: 4, comments: ['Красивая гитара', 'Хорошо лежит в руке!', 'теплый ламповый звук.....', ],},
            // {productId: , name: '', price: '', color: '', country:'США', conf: , photo: '', availability: '', comments: [],},
        ],
        brands: ['Fender', 'Gibson', 'Ibanez', 'Epiphone', 'Jackson', 'ESP', 'B.C.Rich', 'Cort',],
        newCommentText: '',
    },

    stocksPage: {
        stocksData: [
            {source: 'https://hobbymir.ru/upload/iblock/7a2/7a2e3d180ee66474f64cc2f083d77c32.png', description: 'ИНФОРМ  afdaf ОБ АКЦИИ',},
            {source: 'https://hobbymir.ru/upload/iblock/7a2/7a2e3d180ee66474f64cc2f083d77c32.png', description: 'ИНФОРМАЦИЯ fadadf ОБ АКЦИИ',},
            {source: 'https://hobbymir.ru/upload/iblock/7a2/7a2e3d180ee66474f64cc2f083d77c32.png', description: 'ИНФОРМАЦИЯ adfadf ОБ АКЦИИ',},
            {source: 'https://hobbymir.ru/upload/iblock/7a2/7a2e3d180ee66474f64cc2f083d77c32.png', description: 'ИНФОРМАЦИЯ assadasd ОБ АКЦИИ',},
        ],
    },
};

export let changingTab = () => {
    rerenderEntireTree(state);
};

export let updateNewCommentText = (newText) => {
    state.catalogPage.newCommentText = newText;
    rerenderEntireTree(state);
};

export let addComment = (productId) => {
    let currentProduct = state.catalogPage.products.find( p => { if(p.productId == productId) return true});
    currentProduct.comments.push(state.catalogPage.newCommentText);
    state.catalogPage.newCommentText = '';
    rerenderEntireTree(state);
};


export default state;

