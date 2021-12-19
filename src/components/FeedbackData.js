import {
    addFeedbackService,
    updateFeedbackService,
    deleteFeedbackService,
    viewAllFeedbackService,
    viewFeedbackService,
} from "./services/FeedbackService";
  import { useDispatch, useSelector } from "react-redux";
  import { useState } from "react";
  import {
    addFeedback,
    updateFeedback,
    deleteFeedback,
    viewAllFeedback,
    viewFeedback,
  } from "../redux/FeedbackSlice";
  import { Store } from "redux";
  import { Provider } from "react";
  
  const FeedbackData = () => {
    const [feedbackId, setfeedbackId] = useState("");
    const dispatch = useDispatch();
    const feedbackDataFromStore = useSelector(
      (state) => state.feedback.feedbackState
    );
    const feedbackList = useSelector((state) => state.feedback.feedbackList);
  
    const handleFeedback = (e) => {
      console.log("handleFeedback");
      setfeedbackId(e.target.value);
    };
  
    const submitaddFeedback = (evt) => {
      evt.preventDefault();
      console.log("submitaddFeedback");
      addFeedbackService()
        .then((response) => {
          dispatch(addFeedback(response.data));
        })
        .catch(() => {
          alert(`Something is wrong!`);
        });
    };
  
    const submitupdateFeedback = (evt) => {
      evt.preventDefault();
      console.log("submitupdateFeedback");
      updateFeedbackService()
        .then((response) => {
          dispatch(updateFeedback(response.data));
        })
        .catch(() => {
          alert(`Something is wrong!`);
        });
    };
  
    const submitdeleteFeedback = (evt) => {
      evt.preventDefault();
      console.log("submitdeleteFeedback");
      deleteFeedbackService(feedbackId)
        .then((response) => {
          dispatch(deleteFeedback(response.data));
        })
        .catch(() => {
          alert(`Feedback with ${feedbackId} not found.`);
        });
    //   console.log(Object.keys(feedbackList));
      setfeedbackId("");
    };
  
    const submitviewAllFeedback = (evt) => {
      evt.preventDefault();
      console.log("submitviewAllFeedback");
      viewAllFeedbackService()
        .then((response) => {
          dispatch(viewAllFeedback(response.data));
        })
        .catch(() => {
          alert(`Something is wrong!`);
        });
    };
  
    const submitviewFeedbackById = (evt) => {
      evt.preventDefault();
      console.log("submitviewFeedbackById");
      viewFeedbackService(feedbackId)
        .then((response) => {
          dispatch(viewFeedback(response.data));
        })
        .catch(() => {
          alert(`Feedback with ${feedbackId} not found.`);
        });
      console.log(Object.keys(feedbackList));
      setfeedbackId("");
    };
    return (
      <div className="container">
        <h1 className="display-4 text-primary mt-3 mb-3">Feedback Component</h1>
        <p>
          Fetch data from backend, store it in redux store and get it to component
        </p>
        <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
          <p>delete Feedback by FeedbackId</p>
          <form
            className="form form-group form-primary"
            onSubmit={submitdeleteFeedback}
          >
            <input
              className="form-control mt-3"
              type="number"
              id="feedbackId"
              name="FeedbackId"
              value={feedbackId}
              onChange={handleFeedback}
              placeholder="Enter FeedbackId to delete"
              autoFocus
              required
            />
            <input
              className="form-control mt-3 btn btn-primary"
              type="submit"
              value="Delete Feedback"
            />
          </form>
  
          <p>
            Data from store: {feedbackDataFromStore.feedbackId}{" "}
            {feedbackDataFromStore.driverRating}{" "}
            {feedbackDataFromStore.serviceRating}{" "}
            {feedbackDataFromStore.overallRating} {feedbackDataFromStore.comment}{" "}
            {feedbackDataFromStore.feedbackDate}
          </p>
        </div>
        
        <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
          <p>View Feedback by FeedbackId</p>
          <form
            className="form form-group form-primary"
            onSubmit={submitviewFeedbackById}
          >
            <input
              className="form-control mt-3"
              type="number"
              id="feedbackId"
              name="FeedbackId"
              value={feedbackId}
              onChange={handleFeedback}
              placeholder="Enter FeedbackId to search"
              autoFocus
              required
            />
            <input
              className="form-control mt-3 btn btn-primary"
              type="submit"
              value="Find Feedback"
            />
          </form>
  
          <p>
            Data from store: {feedbackDataFromStore.feedbackId}{" "}
            {feedbackDataFromStore.driverRating}{" "}
            {feedbackDataFromStore.serviceRating}{" "}
            {feedbackDataFromStore.overallRating} {feedbackDataFromStore.comment}{" "}
            {feedbackDataFromStore.feedbackDate}
          </p>
        </div>
        
        <div>
          <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
            <p>Find all Feedback</p>
            <div>
              <form className="form form-group form-primary">
                <input
                  className="mt-3 btn btn-primary btn-block"
                  type="button"
                  onClick={viewAllFeedback}
                  value="Find All Employees"
                />
              </form>
            </div>
            <table className="table table-light table-striped ">
              <thead>
                <tr>
                  <th>feedbackId</th>
                  <th>driverRating</th>
                  <th>serviceRating</th>
                  <th>overallRating</th>
                  <th>comment</th>
                  <th>feedbackDate</th>
                </tr>
              </thead>
              {/* <tbody>
                {feedbackList.map((emp, k) => {
                  return (
                    <tr k={k}>
                      {" "}
                      <td>{emp.feedbackId}</td> <td>{emp.driverRating}</td>{" "}
                      <td>{emp.serviceRating}</td> <td>overallRating</td>{" "}
                      <td>comment</td> <td>feedbackDate</td>
                    </tr>
                  );
                })}
              </tbody> */}
            </table>
          </div>
        </div>
        <div className="col-4 border border-light shadow p-3 mb-5 bg-white">
          <p>Some other functionality</p>
        </div>
      </div>
    );
  };
export default FeedbackData;