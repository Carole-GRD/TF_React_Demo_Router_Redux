import { createReducer } from '@reduxjs/toolkit'
import { productActionCreate, productActionDelete } from '../actions/product.action'

// état initial du store pour les produits (categorie "prod")
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


// Version AVEC Immer (moderne !)

// -> PAS BESOIN DE L'INSTALLER DANS PACKAGE.JSON CAR IL EST PRÉSENT DANS Redux Toolkit

// Redux Toolkit nous permet d'écrire une logique "mutante" dans les réducteurs. Il ne modifie pas réellement l'état car il utilise la bibliothèque Immer, qui détecte les changements apportés à un "état provisoire" et produit un nouvel état immuable basé sur ces changements.
const productReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(productActionCreate, (state, action) => {
            // dans action.payload, il y a l'objet produit à créer
            state.products.push(action.payload);
            state.count++;

        })
        .addCase(productActionDelete, (state, action) => {

            // dans action.payload, il y a l'id du produit à supprimer
            const targetId = action.payload;

            state.products = state.products.filter(product => product.id !== targetId);
            state.count = state.products.length;
        })
})


export default productReducer