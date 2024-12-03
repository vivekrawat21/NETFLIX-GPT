import {configureStore} from '@reduxjs/toolkit';
import authReducer from './AuthSlice.js';

const AuthStore = configureStore({
    reducer: {
        auth: authReducer,
    },
});
export default AuthStore;