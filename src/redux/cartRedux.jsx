import {createSlice} from "@reduxjs/toolkit"
//50.dakika

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{

        //her siparişte eklediğimizi bir olarak sepete atar mesela aynı anda aynı ceketten beş tane eklersek cart quantity bir artarken o sipariş içindeki quantity 5 tir
        addProduct:(state,action)=>{
            // //we can do this just in react tool kit
            // //it s cart quantity
            // state.quantity +=1;
            // //payload is our new product
            // state.products.push(action.payload)
            // //different quantity
            // state.total += action.payload.price * action.product.quantity;
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        }
    }
});

export const {addProduct} = cartSlice.actions
export default cartSlice.reducer;
