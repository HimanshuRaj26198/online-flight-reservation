
const userSignUp = ({ onSignInClick }) => {
    return (
        <>
            <div className="login_popup" id="singUp" >
                <div className="inner">
                    <div className="loginBox">
                        <div className="left">
                            <div className="title">Sign up and stay one step ahead.</div>
                            <ul>
                                <li>Avail discounts exclusive to our registered users.</li>
                                <li>Your saved information means faster booking.</li>
                                <li>Stay updated on our latest offers.</li>
                            </ul>
                        </div>
                        <div className="right">
                            <form
                                name="newUserReg"
                                id="newUserReg"
                                data-gtm-form-interact-id={1}
                            >
                                <div
                                    id="Messageloginsup"
                                    style={{ display: "none" }}
                                    className="alert alert-danger"
                                >
                                    Invalid credentials provided.Please try again.
                                </div>
                                <h3>Sign up</h3>
                                <p>Use your social media information to connect with us</p>
                                <a onclick="facebookLogin()" className="facebook" style={{}}>
                                    Facebook
                                </a>
                                <a className="google_login" id="gsigup">
                                    Google
                                </a>
                                <div className="form-row">
                                    <input
                                        id="user_firstname"
                                        name="firstname"
                                        type="text"
                                        className="textbox textOnly"
                                        placeholder="First name"
                                    />
                                    <i className="fa fa-user-o icon" />
                                    <div className="error_text">First Name is required</div>
                                </div>
                                <div className="form-row">
                                    <input
                                        id="user_lastname"
                                        name="lastname"
                                        type="text"
                                        className="textbox textOnly"
                                        placeholder="Last name"
                                    />
                                    <i className="fa fa-user-o icon" />
                                    <div className="error_text">Last Name is required</div>
                                </div>
                                <div className="form-row">
                                    <input
                                        id="user_uemail"
                                        name="uemail"
                                        type="text"
                                        className="textbox valid"
                                        placeholder="Email"
                                        data-gtm-form-interact-field-id={2}
                                    />
                                    <i className="fa fa-envelope-o icon" />
                                    <div className="error_text">Email is required</div>
                                </div>
                                <div className="form-row">
                                    <input
                                        id="user_password"
                                        name="password"
                                        maxLength={4}
                                        minLength={4}
                                        type="password"
                                        className="textbox numbersOnly valid"
                                        placeholder="Pin"
                                        data-gtm-form-interact-field-id={3}
                                    />
                                    <i className="fa fa-lock icon" />
                                    <div className="error_text">Pin is required</div>
                                </div>
                                <div className="form-row">
                                    <span className="pin-text">
                                        Enter your 4 digit numeric pin
                                    </span>
                                </div>
                                <div className="form-row">
                                    <input
                                        id="user_repassword"
                                        name="repassword"
                                        maxLength={4}
                                        minLength={4}
                                        type="password"
                                        className="textbox numbersOnly"
                                        placeholder="Confirm Pin"
                                    />
                                    <i className="fa fa-lock icon" />
                                    <div className="error_text">Confirm pin is required</div>
                                </div>
                                <div className="form-row">
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6">
                                            <input
                                                type="text"
                                                placeholder="Enter the code"
                                                className="textbox"
                                                style={{ padding: 10 }}
                                                id="user_captchaCode"
                                                name="captchaCode"
                                                autoComplete="off"
                                            />
                                            <div className="error_text captchaerror">
                                                Captcha is required
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 relative">
                                            <span
                                                style={{ display: "block" }}
                                                className="refresh-btn"
                                            >
                                                <img
                                                    style={{
                                                        float: "right",
                                                        width: 17,
                                                        cursor: "pointer"
                                                    }}
                                                    src="/us/profile/profile/images/refresh.svg"
                                                />
                                            </span>
                                            <div className="capcha">aIwsTp</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row text">
                                    {" "}
                                    By signing up, I agree to Lookbyfare General{" "}
                                    <a
                                        className="text-green"
                                        target="_blank"
                                        href="https://www.lookbyfare.com/us/terms-conditions"
                                    >
                                        {" "}
                                        Terms and Conditions
                                    </a>{" "}
                                    and{" "}
                                    <a
                                        className="text-green"
                                        target="_blank"
                                        href="https://www.lookbyfare.com/us/privacy-policy"
                                    >
                                        Privacy Policy
                                    </a>
                                </div>
                                <div className="form-row">
                                    <button
                                        className="button"
                                        onclick="submitSignUp()"
                                        type="button"
                                    >
                                        Sign up{" "}
                                        <span
                                            className="button_loding_div"
                                            style={{ display: "none" }}
                                        >
                                            <i className="button_loader blnk" />
                                        </span>
                                    </button>
                                    <a
                                        className="button grayBtn"
                                        href="javascript:void(0);"
                                        onClick={onSignInClick}
                                    >
                                        Back
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        
        </>
    )
}

export default userSignUp;