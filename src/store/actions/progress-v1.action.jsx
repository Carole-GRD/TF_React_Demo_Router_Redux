import  { createAction, createAsyncThunk } from '@reduxjs/toolkit'


export const progressActionIncr = createAction('progress/incr');


export const progressActionBegin = createAsyncThunk(
    'progress/begin',
    async (limit, thunkAPI) => {
        
        // Test de garde (si valeur "true" => le process est stoppé)
        if (!limit || typeof(limit) !== 'number' || isNaN(limit) || limit <= 0) {
            // Reject de la fonction

            // Solution 1 - générer une erreur
            // comme on est dans une promesse, on lance une erreur 
            throw Error('Limite invalide !');

            // Solution 2 - Envoyer une promesse echouer (via thunkAPI)
            // OU BIEN avec thunkAPI (dans ce as ne pas oublier le return)
            // return thunkAPI.rejectWithValue('Limite invalide !');
        }


        let count = 0;

        while (count < limit) {
            // Envoi une action custom pour indiquer que le compteur incremente !
            thunkAPI.dispatch(progressActionIncr(count));


            // Faire attendre le js pendant ~ 1 sec
            await new Promise((resolve) => {
                // Envoi du "resolve" de la promesse après 1 seconde
                // setTimeout(() => {resolve()}, 1000)
                // OU BIEN
                setTimeout(resolve, 1000)
            })

            count++;
        }

        return 'Finish';
        // return;
    }
)