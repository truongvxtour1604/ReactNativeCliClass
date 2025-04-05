import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import AsyncStorage from "@react-native-async-storage/async-storage"

import counterReducer from "./lap/lap6/counterSlice"
import imageReducer from "./lap/lap5/imageSlice"

// Import pokemonApi
import { pokemonApi } from "./lap/lap6/pokemonAPI"

// Cấu hình persist (chỉ persist imageReducer)
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
}

// Tạo persisted reducer cho imageReducer
const persistedImageReducer = persistReducer(persistConfig, imageReducer)

// Tạo store với các reducer
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    image: persistedImageReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer, // Thêm reducer của RTK Query
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(pokemonApi.middleware), // Thêm middleware của RTK Query
})

// Persistor
export const persistor = persistStore(store)

// Types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
