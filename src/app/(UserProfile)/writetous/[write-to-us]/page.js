'use client';

const WriteToUs = () => {

    return (
        <>
            <div className="rightCntr" id="writeus" style={{ display: "block" }}>
                <div
                    id="Messageloginsup_writeus"
                    style={{ display: "none" }}
                    className="alert alert-danger"
                >
                    Invalid credentials provided.Please try again.
                </div>
                <div
                    id="MessageSuccess_writeus"
                    style={{ display: "none" }}
                    className="alert alert-success"
                >
                    Your Feedback is submitted successfully.
                </div>
                <h2 className="main_title">Write To Us</h2>
                {/*  / Change password Start here \ */}
                <div className="formBox">
                    <div id="personal_infoform">
                        <form id="writeus_Reqform" name="writeus_Reqform">
                            <div className="row">
                                <div className="col-sm-7">
                                    <div className="row form-group">
                                        <div className="col-sm-12">
                                            <label className="label">
                                                Please select your feedback category below{" "}
                                                <sup className="star"> *</sup>
                                            </label>
                                            <div className="select_dropdown">
                                                <select id="user_category" name="category">
                                                    <option value="">Select Category</option>
                                                    <option value="Cancellation">Cancellation</option>
                                                    <option value="Refund">Refund</option>
                                                    <option value="Chargeback">Chargeback</option>
                                                    <option value="Customer service">
                                                        Customer service
                                                    </option>
                                                    <option value="Technical Issue">
                                                        Technical Issue
                                                    </option>
                                                    <option value="Feedback">Feedback</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                <div className="error_text">
                                                    feedback category is required
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="row form-group experience"
                                        style={{ display: "none" }}
                                    >
                                        <div className="col-sm-12 inputSet">
                                            <label className="label" style={{ paddingLeft: 0 }}>
                                                Overall Experience
                                            </label>
                                            <label>
                                                <input
                                                    name="Experience"
                                                    type="radio"
                                                    defaultChecked=""
                                                    defaultValue="Excellent"
                                                />
                                                <span>Excellent</span>
                                            </label>
                                            <label>
                                                <input
                                                    name="Experience"
                                                    type="radio"
                                                    defaultValue="Great"
                                                />
                                                <span>Great</span>
                                            </label>
                                            <label>
                                                <input
                                                    name="Experience"
                                                    type="radio"
                                                    defaultValue="Average"
                                                />
                                                <span>Average</span>
                                            </label>
                                            <label>
                                                <input
                                                    name="Experience"
                                                    type="radio"
                                                    defaultValue="Poor"
                                                />
                                                <span>Poor</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-sm-12">
                                            <label className="label">
                                                Is there anything you would like to tell us?
                                                <sup className="star"> *</sup>
                                            </label>
                                            <textarea
                                                rows={4}
                                                cols={4}
                                                className="textbox"
                                                id="user_feedback"
                                                name="feedback"
                                                defaultValue={""}
                                            />
                                            <div className="error_text">feedback is required</div>
                                        </div>
                                    </div>
                                    <button
                                        className="button mt_mob"
                                        onclick="submitfeedback()"
                                        type="button"
                                    >
                                        Submit{" "}
                                        <span
                                            className="button_loding_div"
                                            style={{ display: "none" }}
                                        >
                                            <i className="button_loader blnk" />
                                        </span>
                                    </button>
                                </div>
                                <div className="col-sm-5">
                                    <h4>USA Office</h4>
                                    <div className="contact-block">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <address>
                                                    <i className="fa fa-map-marker" />
                                                    <span>
                                                        A Red Diamond Affair LLC, 1 Meadowlands Plaza
                                                        Suite 200, East Rutherford, NJ 07073
                                                    </span>
                                                </address>
                                            </div>
                                            <div className="col-sm-12">
                                                <i className="fa fa-phone" />
                                                <a href="tel:+1-248-274-7239">+1-248-274-7239</a>
                                            </div>
                                            <div className="col-sm-12">
                                                <i className="fa fa-envelope-o" />
                                                <a href="mailto:support@lookbyfare.com">
                                                    support@lookbyfare.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/*  \ Change password End here / */}
            </div>
        </>
    )

}

export default WriteToUs;