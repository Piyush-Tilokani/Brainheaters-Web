import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email:null,
  OTPVerified:false
}

export const resetPasswordSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    addDetails: (state,action) => {
      state.email = action.payload,
      state.OTPVerified = true
    },
  }
})

// Action creators are generated for each case reducer function
export const { addDetails } = resetPasswordSlice.actions

export default resetPasswordSlice.reducer