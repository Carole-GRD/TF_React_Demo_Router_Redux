import  { createAction, createAsyncThunk } from '@reduxjs/toolkit'


export const progressActionIncr = createAction('progress/incr');


export const progressActionBegin = createAsyncThunk(
    'progress/begin',
    async (limit, { getState, dispatch }) => {
        // L'incrément du count est généré par le reducer du store

        // si on met le "state.active" dans le "progressActionIncr" du reducer
        // while (thunkAPI.getState().active) {
        // OU BIEN
        while (getState().progress.current < getState().progress.end) {
            // Envoi une action custom pour indiquer que le compteur incremente !
            dispatch(progressActionIncr());

            // Faire attendre le js pendant ~ 1 sec
            await new Promise((resolve) => {
                // Envoi du "resolve" de la promesse après 1 seconde
                // setTimeout(() => {resolve()}, 1000)
                // OU BIEN
                setTimeout(resolve, 1000)
            })
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