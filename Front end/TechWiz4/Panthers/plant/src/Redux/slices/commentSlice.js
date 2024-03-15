import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  commentUser: '',
  commentMessge: '',
  rating:null,
  listComment:[],
  countComment:0,
};

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
      setCommentUser: (state, action) => {
        state.commentUser = action.payload;
      },
      setCommentMessage: (state, action) => {
        state.commentMessge = action.payload;
      },
      setRating:(state,action)=>{
        state.rating=action.payload
      },
      setAddComment: (state, action) => {
        let NewItem=action.payload
        state.listComment=[...state.listComment,NewItem]
        state.countComment++;
      },
    },
  });
  
  export const { setCommentUser, setCommentMessage, setAddComment,setRating } = commentSlice.actions;
  
  export default commentSlice.reducer;
  