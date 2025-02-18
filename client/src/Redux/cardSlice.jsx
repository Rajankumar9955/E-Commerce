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
               },
               qntyIncrease:(state,actions)=>{
                  for(var i=0; i<state.cart.length; i++)
                  {
                    if(state.cart[i].id==actions.payload.id)
                    {
                        state.cart[i].qnty++;
                    }
                  }
               } ,
               qntyDecrease:(state,actions)=>{
                for(var i=0; i<state.cart.length; i++)
                {
                  if(state.cart[i].id==actions.payload.id)
                  {
                      if(state.cart[i].qnty<=1){
                        alert("Quantity Doesn't less then 1");
                      }
                      else{
                            state.cart[i].qnty--;
                      }
                  }
                }
             } ,
             proDelete:(state,actions)=>{
                state.cart=state.cart.filter(key=>key.id!=actions.payload.id)
             },
             wishlist:(state, actions)=>{
                state
             }
    }
})
export const {addtoCart,qntyIncrease,qntyDecrease,proDelete}=cartSlice.actions;
export default cartSlice.reducer;