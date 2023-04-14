
import { configureStore } from '@reduxjs/toolkit'
import productReducer from './reducers/product.reducer'

// Création d'un store Redux
const store = configureStore({
    // l'ensemble des reducers du store
    reducer: {
        // ajouter les reducers
        // alias (éventuellement nom du domaine): nom du reducer
        prod: productReducer

    },
    // activation des outils de dev (actif uniquement en DEV)
    devTools: import.meta.env.DEV
})

export default store