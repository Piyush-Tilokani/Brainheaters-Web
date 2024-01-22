import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  university:null,
  year:null,
  department:null,
  full_name:null,
  college:null,
  password:null,
  email:null,
  accessToken:null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserData: (state,action) => {
      state = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { saveUserData } = userSlice.actions

export default userSlice.reducer