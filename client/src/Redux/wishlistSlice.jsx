

import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:"wishlist",
    initialState:{
        wish:[]
    },
    reducers:{
        addtowishlist:(state, actions)=>{
            const wishData=state.wish.filter(key=>key.id==actions.payload.id)
            if(wishData.length>=1){
                alert("Product Already Added in wishlist");
            }
            else
            {
                state.wish.push(actions.payload);
                alert("Product Added into Wishlist");
            }
        }
    }
})
export const{addtowishlist}=wishlistSlice.actions;
export default wishlistSlice.reducer