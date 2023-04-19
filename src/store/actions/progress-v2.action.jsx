import  { createAction, createAsyncThunk } from '@reduxjs/toolkit'


export const progressActionIncr = createAction('progress/incr');


export const progressActionBegin = createAsyncThunk(
    'progress/begin',
    async (limit, thunkAPI) => {

        // action à créer pour récupérer la limite sans passer par "meta.arg"
        // -> voir reducer
        // thunkAPI.dispatch(progressActionStart(limit));

        let count = 0;

        while (count < limit) {
            // Envoi une action custom pour indiquer que le compteur incremente !
            // thunkAPI.dispatch(progressActionIncr(count));
            // MODIFIEE EN :
            thunkAPI.dispatch(progressActionIncr());


            // Faire attendre le js pendant ~ 1 sec
            await new Promise((resolve) => {
                // Envoi du "resolve" de la promesse après 1 seconde
                // setTimeout(() => {resolve()}, 1000)
                // OU BIEN
                setTimeout(resolve, 1000)
            })

            count++;
        }

        // return 'Finish';
        return;
    },
    {
        condition: (limit) => {
            // Test d'acceptation (si valeur "true" => le process continue)
            return limit && typeof(limit) === 'number' && !isNaN(limit) && limit > 0;
        },
        dispatchConditionRejection: true
    }
)