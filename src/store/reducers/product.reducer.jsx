import { createReducer } from '@reduxjs/toolkit'
import { productActionCreate, productActionDelete } from '../actions/product.action'

// état initial du store pour les produits
const initialState = {
    products: [],
    count: 0
}

// Version SANS Immer (à l'ancienne !)
const productReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(productActionCreate, (state, action) => {
            const product = action.payload;
            return {
                ...state,
                count: state.count + 1,
                products: [...state.products, product]
            }
        })
        .addCase(productActionDelete, (state, action) => {
            const targetId = action.payload;
            return {
                ...state,
                count: state.count - 1,
                products: state.products.filter(product => product.id !== targetId)
            }
        })
})


export default productReducer