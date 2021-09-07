const { PRODUCT_LIST_FAIL, 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CART_ADD_ITEM } = require( "./ProductConst");

export const productListReducer =( 
    state = {loading : true, products: [] },
     action
     ) => {
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading: true} ;
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload,   };
        case PRODUCT_LIST_FAIL:
            return {loading:false, error: action.payload};
        default:
            return state;
    }
};

export const productDetailsReducer = (
    state = {product: {}, loading:true}, action
) => {
    switch (action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading: true};
        case PRODUCT_DETAILS_SUCCESS:
            return {loading : false, product: action.payload};
        case PRODUCT_DETAILS_FAIL:
            return {loading: false, error: action.payload};
        default : 
            return state
    

    }
};

export const cartReducer = (state = {cartItems:[]}, action) => {
    
    switch (action.type){   
        case CART_ADD_ITEM:
            const item = action.payload;
            console.log(JSON.stringify(item) + ' items present data......')
            const existItem = state.cartItems.find((x) => x.product === item.product);
            console.log(JSON.stringify(state.cartItems)+ '===========cartitems.... data....')
            if(existItem){
                return{
                    ...state,
                    cartItems: state.cartItems.map((x)=>
                    x.product === existItem.product ? item:x),
                };
            }else{
                return{...state, cartItems:[...state.cartItems, item]};
            }
            default:
                return state;
    }
};