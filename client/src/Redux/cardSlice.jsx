import {createSlice} from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
               addtoCart:(state,actions)=>{
                const productData=state.cart.filter(key=>key.id==actions.payload.id);
                if(productData.length>=1)
                {
                    alert("Product Already Added!");
                }
                else
                {
                    state.cart.push(actions.payload)
                    alert("Product Added Successfully");
                }
               }  
    }
})
export const {addtoCart}=cartSlice.actions;
export default cartSlice.reducer;