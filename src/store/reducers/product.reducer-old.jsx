import { createReducer } from '@reduxjs/toolkit'
import { productActionCreate, productActionDelete } from '../actions/product.action'

// état initial du store pour les produits
const initialState = {
    products: [
        {
            "id": "TEST",
            "name": "Produit 1",
            "description": "Produit simple (en stock)",
            "code": "zaza001",
            "price": 42,
            "discount": null,
            "inStock": true
        }
    ],
    count: 1
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
            const products = state.products.filter(product => product.id !== targetId)
            return {
                ...state,
                count: products.length,
                products 
            }
        })
})


export default productReducer