import axios from "axios";

const addFeedbackService = (emp) => {
  console.log(`addFeedbackService`);
  return axios.post(`/addfeedback`, emp);
};

const updateFeedbackService = (emp) => {
  console.log(`updateFeedbackService`);
  return axios.post(`/updateFeedback`, emp);
};

const deleteFeedbackService = (eid) => {
  console.log(`deleteFeedbackService`);
  return axios.post(`/deleteFeedback/${eid}`);
};
const viewFeedbackService = (eid) => {
  console.log(`getEmpByIdService`);
  return axios.get(`/viewFeedback/${eid}`);
};
const viewAllFeedbackService = () => {
  console.log(`viewAllFeedbackService`);
  return axios.get(`/viewAllFeedback`);
};
export {
  addFeedbackService,
  updateFeedbackService,
  deleteFeedbackService,
  viewFeedbackService,
  viewAllFeedbackService,
};