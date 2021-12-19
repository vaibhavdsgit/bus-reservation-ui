import { createSlice } from "@reduxjs/toolkit";
import Feedback from "../components/models/Feedback";

const feedbackSlice = createSlice({
  name: "feedback",
  initialState: {
    feedbackState: new Feedback(),
    feedbackList: []
  },

  reducers: {
    addFeedback: (state, action) => {
      console.log("FeedbackSlice reducers addFeedback");
      state.feedbackState = action.payload;
    },

    updateFeedback: (state, action) => {
      console.log("FeedbackSlice reducers updateFeedback");
      state.feedbackState = action.payload;
    },

    deleteFeedback: (state, action) => {
      console.log("FeedbackSlice reducers deleteFeedback");
      state.feedbackState = action.payload;
    },

    viewFeedback: (state, action) => {
      console.log("FeedbackSlice reducers viewAllFeedback");
      state.feedbackState = action.payload;
    },

    viewAllFeedback: (state, action) => {
      console.log("FeedbackSlice reducers getAllFeedback");
      state.feedbackList = action.payload;
    },
  },
});
export const {
  addFeedback,
  updateFeedback,
  deleteFeedback,
  viewAllFeedback,
  viewFeedback,
} = feedbackSlice.actions;

export default feedbackSlice.reducer;