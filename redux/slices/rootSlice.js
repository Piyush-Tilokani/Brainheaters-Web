import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sessionExpired:false,
  authenticating:false
}

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setSessionExpired: (state,action) => {
      state.sessionExpired = action.payload
    },
    setAuthenticating: (state,action) => {
      state.authenticating = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setSessionExpired } = rootSlice.actions

export default rootSlice.reducer