import { combineReducers, configureStore } from '@reduxjs/toolkit'
import signUpReducer from './slices/signUpSlice'
import resetPasswordSlice from './slices/resetPasswordSlice'
import savesSlice from './slices/savesSlice'
import userSlice from './slices/userSlice'
import rootSlice from './slices/rootSlice'
import studyroomRecentsSlice from './slices/studyroomRecents'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const rootReducer = combineReducers({
  signUp:signUpReducer,
  root:rootSlice,
  resetPassword:resetPasswordSlice,
  user:userSlice,
  studyroomRecents:studyroomRecentsSlice,
  saves:savesSlice,
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

let persistor = persistStore(store)
export { store, persistor }