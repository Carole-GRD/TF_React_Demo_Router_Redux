import { createAction } from '@reduxjs/toolkit'



// création d'un produit
export const productActionCreate = createAction('products/createProduct', (product) => {
    // renvoi un objet avec le payload
    return {
        payload: {
            ...product,
            id: nanoid()
        }   
    }
})
// Exemple d'action généré => {type: 'products/createProduct', payload: {data} }



// suppression d'un produit
export const productActionDelete = createAction('products/deleteProduct')
// Exemple d'action généré => {type: 'products/deleteProduct', payload: 42}
