

import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./cardSlice"
import myWishlist from "./wishlistSlice";


// persist

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
  }
const addtocart = persistReducer(persistConfig, myReducer)
const  addtowishlist= persistReducer(persistConfig, myWishlist)

const store=configureStore({
    reducer:{
        mycart:addtocart,
        wishlist:addtowishlist,
    }
})
export default store
export const persistore=persistStore(store);




// another method but it will all remoce from the card when you refresh

// import { configureStore } from "@reduxjs/toolkit";
// import myReducer from "./cardSlice"
// import myWishlist from "./wishlistSlice";

// const store=configureStore({
//     reducer:{
//         mycart:myReducer,
//         wishlist:myWishlist,
//     }
// })
// export default store