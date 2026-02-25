import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "@/redux/slices/counterReducer";
import productReducer from "@/redux/slices/productSlice";
import loggerMiddleware from "@/redux/middleware";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
}

const persistedCounterReducer = persistReducer(persistConfig, counterReducer);

export const store = configureStore({
    reducer: {
        counter: persistedCounterReducer,
        products: productReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(loggerMiddleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

