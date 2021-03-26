import { setStorage, removeStorage } from '../action/storageAction'

export const orderLocalStorage = store => next => action => {

    if ([setStorage.type, removeStorage.type].includes(action.type)) {
        next(action);
        const nextState = store.getState();
        try {
            localStorage.setItem('storage', JSON.stringify(nextState.storage));
        } catch (e) {
            console.log('ERROR SAVING STATE')
        }
        return;
    }
    return next(action);
};