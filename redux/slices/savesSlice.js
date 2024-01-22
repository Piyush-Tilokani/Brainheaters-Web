import { createSlice } from '@reduxjs/toolkit'

const initialState = {'42353453':{
  
}}

export const savesSlice = createSlice({
  name: 'saves',
  initialState,
  reducers: {
    addSave: (state,action) => {

    },
    removeSave: (state,action) => {

    },
  },
})


// Action creators are generated for each case reducer function
export const { addSave,removeSave } = savesSlice.actions

export default savesSlice.reducer