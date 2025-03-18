import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    products:[],
    searchTerm:'',
    filteredData:[]

}

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        setProducts(state,action)
        {
            state.products = action.payload
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload.toLowerCase(); // Convert search term to lowercase
            state.filteredData = state.products.filter(product => 
                product.name.toLowerCase().includes(state.searchTerm) // Compare with product name
            );
        }
        

    }
})

export const {setProducts,setSearchTerm}=productSlice.actions;
export default productSlice.reducer