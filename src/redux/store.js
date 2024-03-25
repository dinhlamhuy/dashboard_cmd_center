import { configureStore } from '@reduxjs/toolkit';
;

const reducer = {
    // auth: authReducer,
    // product: productReducer,
    // electric: electricReducer,
    // machine: machineReducer,
}

const store = configureStore({
    reducer: reducer,
    devTools: true,
})

export default store;