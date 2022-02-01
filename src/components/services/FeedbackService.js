import axios from "axios";

const addFeedbackService = (feedBack) => {
  console.log(`addFeebackService`);
  return axios.post(`/addFeedBack`, feedBack);
};
const updateFeedbackService = (feedBack) => {
  console.log(`updateFeedbackService`);
  return axios.post(`/updateFeedBack`, feedBack);
};
const deleteFeedbackService = (feedBackId) => {
  console.log(`deleteFeedbackService`);
  return axios.delete(`/deleteFeedBack/${feedBackId}`);
};
const viewFeedbackService = (feedBackId) => {
  console.log(`viewBusByTypeService`);
  return axios.get(`/viewFeedBack/${feedBackId}`);
};
const viewAllFeedbackService = () => {
  console.log(`viewAllFeedbackService`);
  return axios.get(`/viewAllFeedBack`);
};

export {
  addFeedbackService,
  updateFeedbackService,
  deleteFeedbackService,
  viewFeedbackService,
  viewAllFeedbackService,
};