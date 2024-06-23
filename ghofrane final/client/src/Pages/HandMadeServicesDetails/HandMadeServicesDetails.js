import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { get_hand_Made_service } from "../../redux/actions/Actions";
import AddOffer from "./AddOffer";
import {
  add_feedback_to_handMade,
  verify_offre_between_client_handMade,
} from "../../redux/actions/clientAction";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { add_Chat, add_selectedChat } from "../../redux/actions/chatActions";
import axios from "axios";
import { errorToast, url } from "../../utils";

const HandMadeServicesDetails = () => {
  const { id } = useParams();
  const { serviceDetails, user } = useSelector((state) => state.LoginReducer);
  const { chats } = useSelector((state) => state.chatReducer);
  const navigate = useNavigate();

  const { verifyClientHandMadeOffer } = useSelector(
    (state) => state.clientReducer
  );
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  useEffect(() => {
    dispatch(get_hand_Made_service(id));
    dispatch(verify_offre_between_client_handMade(id));
  }, []);
  const handleShow = () => {
    setShow(!show);
  };
  const [feedBack, setFeedBack] = useState({
    rate: 1,
    comment: "",
  });
  const handleChange = (e) => {
    setFeedBack({ ...feedBack, [e.target.name]: e.target.value });
  };
  const submitFeedback = (e) => {
    e.preventDefault();
    dispatch(add_feedback_to_handMade(feedBack, id));
    setFeedBack({
      rate: 1,
      comment: "",
    });
  };
  const RatingStars = (rating) => {
    const generateStars = () => {
      const stars = [];
      for (let i = 0; i < 5; i++) {
        stars.push(
          <span
            key={i}
            className={`fa fa-star ${i < rating ? "text-gold" : "text-gray"}`}
          ></span>
        );
      }
      return stars;
    };

    return <div className="sf-related-job-rating">{generateStars()}</div>;
  };

  const accessChat = async () => {
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("accessToken"),
        },
      };
      const { data } = await axios.post(
        `${url}/api/v1/chat`,
        {
          userId: id,
        },
        config
      );
      if (!chats.find((c) => c._id === data._id))
        dispatch(add_Chat([data, ...chats]));
      dispatch(add_selectedChat(data));
      navigate("/messages");
    } catch (error) {
      errorToast(error);
    }
  };
  return (
    <div className="page-content bg-white">
      {serviceDetails !== undefined ? (
        <>
          <div className="sf-job-benner sf-overlay-wrapper">
            <div className="banner-job-row">
              <div className="sf-overlay-main" />
              <div className="sf-banner-job-heading-wrap">
                <div className="sf-banner-job-heading-area">
                  <div className="sf-banner-job-logo-pic">
                    <img src={serviceDetails.handMadeService.avatar} alt="" />
                  </div>
                  <div className="sf-banner-job-heading-large">
                    {serviceDetails.handMadeService.fullName}
                  </div>
                  <ul className="sf-banner-job-dutation">
                    <li>
                      {/* <i className="fa fa-clock-o" /> Posted date:{" "}
                      <span className="jobs-timing">2 years ago</span> */}
                    </li>
                    <li>
                      {/* <i className="fa fa-hourglass-o" /> Expries in:{" "}
                      <span className="jobs-date-label">January 26, 2022</span> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="section-content ">
            {/* Left & right section start */}
            <div className="container">
              {/*Job Information Start*/}
              <div className="sf-job-details-fileds sf-job-details-fileds-two">
                <ul className="job-listing-meta meta">
                  <li className="location">
                    <span className="job-meta-icon">
                      <img
                        src="https://aonetheme.com/sf-html-demo/images/job-cin/location.png"
                        alt=""
                      />
                    </span>
                    <div className="sf-job-meta-info">
                      <h5 className="job-meta-title">Location:</h5>
                      <span className="job-meta-text">
                        <a className="google_map_link">
                          {serviceDetails.handMadeService.address}
                        </a>
                      </span>
                    </div>
                  </li>

                  <li className="location">
                    <span className="job-meta-icon">
                      <img
                        src="https://aonetheme.com/sf-html-demo/images/job-cin/tag.png"
                        alt=""
                      />
                    </span>
                    <div className="sf-job-meta-info">
                      <h5 className="job-meta-title">Job : </h5>
                      <span className="job-meta-text">
                        {serviceDetails.handMadeService.job.jobName}
                      </span>
                    </div>
                  </li>
                  <li>
                    <span className="job-meta-icon">
                      <img
                        src="https://aonetheme.com/sf-html-demo/images/job-cin/clock.png"
                        alt=""
                      />
                    </span>
                    <div className="sf-job-meta-info">
                      <h5 className="job-meta-title">Job Type:</h5>
                      <span className="job-meta-text">Hours</span>
                    </div>
                  </li>
                  <li className="date-posted">
                    <span className="job-meta-icon">
                      <img
                        src="https://aonetheme.com/sf-html-demo/images/job-cin/user.png"
                        alt=""
                      />
                    </span>
                    <div className="sf-job-meta-info">
                      <h5 className="job-meta-title">City:</h5>
                      <span className="job-meta-text">
                        {serviceDetails.handMadeService.city}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              {/*Job Information End*/}
              <div className="row">
                {/* Left part start */}
                <div className="col-lg-8 col-md-12">
                  <br />
                  <h3>Description</h3>
                  <p>{serviceDetails.profileDetails.description}</p>

                  <br />
                  <div className="aon-job-gallery">
                    <h3 className="m-b30">Photo</h3>
                    {serviceDetails?.profileDetails?.project.map(
                      (el, index) => {
                        return (
                          <div key={index}>
                            <h4>{el.name}</h4>
                            <p>{el.description}</p>
                            <ImageGallery
                              items={el.Photo.map((url) => ({
                                original: url,
                                thumbnail: url,
                              }))}
                              lazyLoad={true}
                            />
                          </div>
                        );
                      }
                    )}
                  </div>
                  {/* <div className="aon-job-video">
                    <h3 className="m-b30">Video</h3>
                  </div> */}
                  <div className="clear sf-blog-comment-wrap" id="comment-list">
                    <div className="comments-area" id="comments">
                      <h2 className="comments-title m-t0">
                        <span>
                          ({serviceDetails.profileDetails.feedBack.length})
                        </span>{" "}
                        Feedback
                      </h2>
                      <div>
                        {/* COMMENT LIST START */}
                        <ol className="comment-list">
                          {serviceDetails.profileDetails.feedBack.map(
                            (el, index) => {
                              return (
                                <li className="comment" key={index}>
                                  <div className="comment-body">
                                    <div className="comment-author vcard">
                                      <img
                                        className="avatar photo"
                                        src={el.client.avatar}
                                        alt=""
                                      />
                                      <cite className="fn">
                                        {el.client.fullName}
                                      </cite>
                                    </div>
                                    <div className="comment-meta ">
                                      <span className="says">
                                        <div className="sf-related-jobs">
                                          Rate:
                                          {RatingStars(el.rate)}
                                        </div>
                                      </span>
                                      <br />
                                      <a href="#">
                                        {el.createdAt.slice(8, 10)}-
                                        {el.createdAt.slice(5, 7)}-
                                        {el.createdAt.slice(0, 4)} AT{" "}
                                        {el.createdAt.slice(11, 16)}
                                      </a>
                                      <p>{el.comment}</p>
                                    </div>
                                  </div>
                                </li>
                              );
                            }
                          )}
                        </ol>

                        {verifyClientHandMadeOffer?.some(
                          (el) => el.handMade === id && el.status === "Accepted"
                        ) ? (
                          <div className="comment-respond m-t30" id="respond">
                            <form
                              className="comment-form"
                              id="commentform"
                              method="post"
                            >
                              <p className="comment-form-url">
                                <label htmlFor="url">Rate</label>
                                <input
                                  className="form-control"
                                  type="number"
                                  name="rate"
                                  max={5}
                                  value={feedBack.rate}
                                  placeholder="Rate"
                                  onChange={handleChange}
                                  id="url"
                                />
                              </p>
                              <p className="comment-form-comment">
                                <label htmlFor="comment">Comment</label>
                                <textarea
                                  className="form-control"
                                  rows={8}
                                  name="comment"
                                  value={feedBack.comment}
                                  placeholder="Comment"
                                  id="comment"
                                  onChange={handleChange}
                                  defaultValue={""}
                                />
                              </p>
                              <p className="form-submit">
                                <button
                                  className="sf-btn-large"
                                  type="button"
                                  onClick={submitFeedback}
                                >
                                  Post FeedBack
                                </button>
                              </p>
                            </form>
                          </div>
                        ) : null}
                        {/* LEAVE A REPLY END */}
                      </div>
                    </div>
                  </div>

                  {/*Job Description End*/}
                </div>
                {/* Left part END */}
                {/* Side bar start */}
                <div className="col-lg-4 col-md-12">
                  {user?.role === "client" ? (
                    <aside className="sf-jobdetail-sidebar">
                      <div className="sf-jobdetail-blocks">
                        <a
                          className="sf-btn-large2"
                          href="#"
                          onClick={handleShow}
                        >
                          Send Offer <i className="fa fa-send" />
                        </a>
                      </div>
                      <div
                        className="sf-jobdetail-blocks"
                        onClick={() => accessChat()}
                      >
                        <a className="sf-btn-large2" href="#">
                          Chat <i className="fa fa-message" />
                        </a>
                      </div>
                    </aside>
                  ) : null}
                </div>
                {/* Side bar END */}
              </div>
            </div>
          </div>
        </>
      ) : null}
      <AddOffer show={show} handleShow={handleShow} handMadeId={id} />
    </div>
  );
};

export default HandMadeServicesDetails;
