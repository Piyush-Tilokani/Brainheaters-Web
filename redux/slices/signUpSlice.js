import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  university:null,
  year:null,
  department:null,
  full_name:null,
  college:null,
  password:null,
  email:null,
}

export const signUpSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    addUniversity: (state,action) => {
      state.university = action.payload
    },
    addStudyRoom: (state,action) => {
      const parsed =  JSON.parse(action.payload)
      state.department = parsed.department
      state.year = parsed.year
      //state = {...state,...parsed}
    },
    addUserData: (state, action) => {
      state.college = action.payload.college,
      state.full_name = action.payload.full_name,
      state.email = action.payload.email,
      state.password = action.payload.password
    }
  },
})

// Action creators are generated for each case reducer function
export const { addUniversity, addStudyRoom, addUserData } = signUpSlice.actions

export default signUpSlice.reducer