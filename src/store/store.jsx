
import { configureStore } from '@reduxjs/toolkit'
import productReducer from './reducers/product.reducer'
// import loggerMiddleware from 'redux-logger'


// Customiser son middleware
// https://www.npmjs.com/package/redux-logger
// import {createLogger} from 'redux-logger'
// const loggerMiddleware =  createLogger({
//     diff: true
// })


// Création d'un store Redux
const store = configureStore({
    // l'ensemble des reducers du store
    reducer: {
        // ajouter les reducers
        // alias (éventuellement nom du domaine): nom du reducer
        prod: productReducer

    },
    // activation des outils de dev (actif uniquement en DEV)
    devTools: import.meta.env.DEV,

    // ajout du middelware Redux-Logger
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware)
    // OU BIEN 
    // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), loggerMiddleware]
})


export default store