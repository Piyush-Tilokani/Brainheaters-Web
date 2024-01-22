import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    
]

export const studyroomRecentsSlice = createSlice({
  name: 'studyroomRecents',
  initialState,
  reducers: {
    addRecent: (state,action) => {
      const idx = state.findIndex(item=>item._id === action.payload._id)
      if(idx > 0){
        let _state = state.filter(item=>item._id !== action.payload._id)
        _state.unshift(action.payload)
        _state = _state.slice(0,5)
        return _state
      }
      else if(idx < 0){
        let _state = [...state]
        _state.unshift(action.payload)
        _state = _state.slice(0,5)
        return _state
      }
    },
  },
})


// Action creators are generated for each case reducer function
export const { addRecent } = studyroomRecentsSlice.actions

export default studyroomRecentsSlice.reducer