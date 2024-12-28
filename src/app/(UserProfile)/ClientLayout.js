"use client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../_components/firebase/config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function ClientLayout({ children }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const router = useRouter();

    const user=sessionStorage.getItem("UserAuthentication")

    const [activeTab, setActiveTab] = useState("mytrip"); // Default active tab

    // Menu items array
    const menuItems = [
        { id: "mytrip", label: "My Booking", href: "/mybooking/akjsdjkn", className: "mytrip" },
        { id: "myinformation", label: "My Information", href: "/myinformation/slkdjlik", className: "myinformation" },
        { id: "offers", label: "Latest Offers", href: "/latestoffer/slkdjlika", className: "reward offers" },
        { id: "settings", label: "Settings", href: "/settings/slkdjliak", className: "setting settings" },
        { id: "writeus", label: "Write To Us", href: "/writetous/slkdajlik", className: "deal writeus" },
        { id: "signout", label: "Sign Out", href: "#", className: "signout" },
    ];

    // Handle click and navigation
    const handleTabClick = (id, href) => {
        if (id === "signout") {
            handleSignOut();
        } else {
            setActiveTab(id); // Update active tab
            router.push(href); // Navigate to the corresponding page
        }
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Remove user session info from sessionStorage
                sessionStorage.removeItem("user");
                setIsLoggedIn(false);
                setUsername('');

                // Show success toast message
                toast.success("You have successfully signed out.");
                router.push("/");
            })
            .catch((error) => {
                // Show error message if sign-out fails
                console.error("Sign-out error: ", error);
                toast.error("An error occurred while signing out. Please try again.");
            });
    };


    return (
        <>
            {/* Navebar */}
            <div className="loginBar">
                <input type="hidden" id="goo_signin" name="goo_signin" defaultValue="Yes" />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="topmenuBox">
                                <ul>
                                    {isLoggedIn ? (
                                        <li className="dropdown loginDropdown loginpg">
                                            <a
                                                className="login"
                                                data-toggle="dropdown"
                                                href="javascript:void(0);"
                                                aria-expanded="true"
                                            >
                                                <span className="displayusername">Welcome {user.displayName}</span>{" "}
                                                <span className="fa fa-angle-down support-icon" />
                                            </a>
                                            <ul className="dropdown-menu loginMenu">
                                                <li>
                                                    <a className="mytrip removeAll active" href="/MyBooking/laksjd">
                                                        My Booking
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="myinformation removeAll" href="/MyInformation/aljsjdkl">
                                                        My Information
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="reward offers removeAll" href="/offers">
                                                        Latest Offers
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="setting settings removeAll" href="/settings">
                                                        Settings
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="writeus deal removeAll" href="/writeus">
                                                        Write To Us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="signout removeAll"
                                                        onClick={() => {
                                                            // Perform sign-out logic
                                                            setIsLoggedIn(false);
                                                        }}
                                                    >
                                                        Sign Out
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    ) : (
                                        <li className="dropdown loginDropdown signpg">
                                            <a
                                                className="login"
                                                data-toggle="dropdown"
                                                href="javascript:void(0);"
                                                aria-expanded="true"
                                            >
                                                Account <span className="fa fa-angle-down support-icon" />
                                            </a>
                                            <ul className="dropdown-menu withoutlogin">
                                                <li>
                                                    <a href="/us/profile/sign-in">Sign in</a>
                                                </li>
                                                <li>
                                                    <a href="/us/profile/signup">Create an Account</a>
                                                </li>
                                            </ul>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header */}
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <a className="logo" href="https://www.onlineflightreservation.com/">
                                <img
                                    src="/assets/logo.png"
                                    alt="logo"
                                    style={{ width: 160, marginTop: 10 }}
                                />
                            </a>
                            <div className="topmenuBox">
                                <ul>
                                    <li>
                                        <a href="https://www.onlineflightreservation.com/">Flights</a>
                                    </li>
                                    {/* <li>
                                        <a href="https://www.lookbyfare.com/us/hotel/">Hotels</a>
                                    </li>
                                    <li>
                                        <a href="https://www.lookbyfare.com/us/car/">Cars</a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Container */}
            <div className="container">
                <main role="main" className="pb-3">
                    <input type="hidden" id="pageid" defaultValue="myinfo" />
                    <input type="hidden" id="billdtl" defaultValue="false" />
                    <input type="hidden" id="loginpg" defaultValue={2} />
                    {/*  / Profile  container \ */}
                    <div id="profileCntr">
                        <div className="row">
                            <div className="col-sm-12 row-flex main-section-container">
                                {/*  / Left container Start here \ */}
                                <div className="leftCntr">
                                    <div className="profile_imageBlock">
                                        <figure className="image">
                                            <span className="changeColor">HA</span>
                                        </figure>
                                        <div className="name_col">
                                            <div className="name">
                                                <span className="displayusername_2">Himanshu Anand</span>
                                                <div className="small">
                                                    Last login: <br className="d-none d-xl-block" />
                                                    <span className="LastLoginDate">
                                                        Dec 26, 2024, 8:08:53 AM
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="leftMenu">
                                        <ul>
                                            {menuItems.map((item) => (
                                                <li key={item.id}>
                                                    <a
                                                        href="#"
                                                        className={`${item.className} removeAll ${activeTab === item.id ? "active" : ""}`}
                                                        onClick={(e) => {
                                                            e.preventDefault(); // Prevent default link behavior
                                                            handleTabClick(item.id, item.href);
                                                        }}
                                                    >
                                                        {item.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>{" "}

                                {/* RIGHT CENTER SPACE */}

                                {children}


                            </div>
                        </div>
                    </div>
                    {/*  \ Profile container / */}
                    {/*  \ wrapper / */}
                    {/* Add Traveller end here*/}
                    <div className="modal" id="addModal">
                        <div className="modal-dialog">
                            <div className="modal-content formBox">
                                {/* Modal Header */}
                                <div className="modal-header">
                                    <h4 className="modal-title">Traveler </h4>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                    />
                                </div>
                                {/* Modal body */}
                                <div className="modal-body">
                                    <form id="addpax_Req">
                                        <div className="row form-group">
                                            <div className="col-sm-6">
                                                <label className="label">
                                                    First Name<sup className="star">*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="user_fname"
                                                    name="fname"
                                                    className="textbox textOnly"
                                                />
                                                <div className="error_text">First Name is required</div>
                                            </div>
                                            <div className="col-sm-6">
                                                <label className="label">Middle Name</label>
                                                <input
                                                    type="text"
                                                    id="mname"
                                                    name="mname"
                                                    className="textbox textOnly"
                                                />
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-sm-6">
                                                <label className="label">
                                                    Last Name<sup className="star">*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="user_Laname"
                                                    name="Laname"
                                                    className="textbox textOnly"
                                                />
                                                <div className="error_text">Last Name is required</div>
                                            </div>
                                            <div className="col-sm-6">
                                                <label className="label">
                                                    Gender<sup className="star">*</sup>
                                                </label>
                                                <div className="select_dropdown">
                                                    <select id="user_genderpopup" name="genderpopup">
                                                        <option value="">Select Gender</option>
                                                        <option value={1}>Male</option>
                                                        <option value={2}>Female </option>
                                                    </select>
                                                    <div className="error_text">Gender is required</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-sm-6">
                                                <label className="label">
                                                    Date of Birth<sup className="star">*</sup>
                                                </label>
                                                <div className="relative">
                                                    <div id="dobdiv">
                                                        <input
                                                            type="text"
                                                            placeholder=""
                                                            defaultValue=""
                                                            readOnly=""
                                                            className="textbox hasDatepicker"
                                                            id="user_dobid"
                                                            name="dobid"
                                                        />
                                                        <i className="fa fa-calendar" aria-hidden="true" />
                                                        <div className="error_text">
                                                            Date of Birth is required
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <label className="label">
                                                    {" "}
                                                    Nationality<sup className="star">*</sup>
                                                </label>
                                                <div className="select_dropdown">
                                                    <select
                                                        className="Select Country"
                                                        data-val="true"
                                                        data-val-required="The nationality field is required."
                                                        id="user_nationality"
                                                        name="nationality"
                                                    >
                                                        <option value="">Select Country</option>
                                                        <option value="AF">Afghanistan</option>
                                                        <option value="AL">Albania</option>
                                                        <option value="DZ">Algeria</option>
                                                        <option value="AS">American Samoa</option>
                                                        <option value="AD">Andorra</option>
                                                        <option value="AO">Angola</option>
                                                        <option value="AI">Anguilla</option>
                                                        <option value="AQ">Antarctica</option>
                                                        <option value="AG">Antigua and Barbuda</option>
                                                        <option value="AR">Argentina</option>
                                                        <option value="AM">Armenia</option>
                                                        <option value="AW">Aruba</option>
                                                        <option value="AU">Australia</option>
                                                        <option value="AT">Austria</option>
                                                        <option value="AZ">Azerbaijan</option>
                                                        <option value="BS">Bahamas</option>
                                                        <option value="BH">Bahrain</option>
                                                        <option value="BD">Bangladesh</option>
                                                        <option value="BB">Barbados</option>
                                                        <option value="BY">Belarus</option>
                                                        <option value="BE">Belgium</option>
                                                        <option value="BZ">Belize</option>
                                                        <option value="BJ">Benin</option>
                                                        <option value="BM">Bermuda</option>
                                                        <option value="BT">Bhutan</option>
                                                        <option value="BO">Bolivia</option>
                                                        <option value="BQ">
                                                            Bonaire, Sint Eustatius and Saba
                                                        </option>
                                                        <option value="BA">Bosnia Herzegovina</option>
                                                        <option value="BW">Botswana</option>
                                                        <option value="BR">Brazil</option>
                                                        <option value="IO">British Indian Ocean Territory</option>
                                                        <option value="VG">British Virgin Islands</option>
                                                        <option value="BN">Brunei Darussalam</option>
                                                        <option value="BG">Bulgaria</option>
                                                        <option value="BF">Burkina Faso</option>
                                                        <option value="BI">Burundi</option>
                                                        <option value="KH">Cambodia</option>
                                                        <option value="CM">Cameroon</option>
                                                        <option value="CA">Canada</option>
                                                        <option value="CV">Cape Verde</option>
                                                        <option value="KY">Cayman Islands</option>
                                                        <option value="CF">Central African Republic</option>
                                                        <option value="TD">Chad</option>
                                                        <option value="CL">Chile</option>
                                                        <option value="CN">China</option>
                                                        <option value="CX">Christmas Island</option>
                                                        <option value="CC">Cocos Islands</option>
                                                        <option value="CO">Colombia</option>
                                                        <option value="KM">Comoros</option>
                                                        <option value="CK">Cook Islands</option>
                                                        <option value="CR">Costa Rica</option>
                                                        <option value="HR">Croatia</option>
                                                        <option value="CU">Cuba</option>
                                                        <option value="CW">Curacao</option>
                                                        <option value="CY">Cyprus</option>
                                                        <option value="CZ">Czech Republic</option>
                                                        <option value="CD">
                                                            Democratic Republic of the Congo
                                                        </option>
                                                        <option value="DK">Denmark</option>
                                                        <option value="DJ">Djibouti</option>
                                                        <option value="DM">Dominica</option>
                                                        <option value="DO">Dominican Republic</option>
                                                        <option value="TL">East Timor</option>
                                                        <option value="EC">Ecuador</option>
                                                        <option value="EG">Egypt</option>
                                                        <option value="SV">El Salvador</option>
                                                        <option value="GQ">Equatorial Guinea</option>
                                                        <option value="ER">Eritrea</option>
                                                        <option value="EE">Estonia</option>
                                                        <option value="SZ">Eswatini</option>
                                                        <option value="ET">Ethiopia</option>
                                                        <option value="FK">Falkland Islands</option>
                                                        <option value="FO">Faroe Islands</option>
                                                        <option value="FJ">Fiji</option>
                                                        <option value="FI">Finland</option>
                                                        <option value="FR">France</option>
                                                        <option value="GF">French Guiana</option>
                                                        <option value="PF">French Polynesia</option>
                                                        <option value="GA">Gabon</option>
                                                        <option value="GM">Gambia</option>
                                                        <option value="GE">Georgia</option>
                                                        <option value="DE">Germany</option>
                                                        <option value="GH">Ghana</option>
                                                        <option value="GI">Gibraltar</option>
                                                        <option value="GR">Greece</option>
                                                        <option value="GL">Greenland</option>
                                                        <option value="GD">Grenada</option>
                                                        <option value="GP">Guadeloupe</option>
                                                        <option value="GU">Guam</option>
                                                        <option value="GT">Guatemala</option>
                                                        <option value="GG">Guernsey</option>
                                                        <option value="GN">Guinea</option>
                                                        <option value="GW">Guinea-Bissau</option>
                                                        <option value="GY">Guyana</option>
                                                        <option value="HT">Haiti</option>
                                                        <option value="HM">
                                                            Heard Island and McDonald Islands
                                                        </option>
                                                        <option value="HN">Honduras</option>
                                                        <option value="HK">Hong Kong</option>
                                                        <option value="HU">Hungary</option>
                                                        <option value="IS">Iceland</option>
                                                        <option value="IN">India</option>
                                                        <option value="ID">Indonesia</option>
                                                        <option value="IR">Iran</option>
                                                        <option value="IQ">Iraq</option>
                                                        <option value="IE">Ireland</option>
                                                        <option value="IM">Isle of Man</option>
                                                        <option value="IL">Israel</option>
                                                        <option value="IT">Italy</option>
                                                        <option value="CI">Ivory Coast</option>
                                                        <option value="JM">Jamaica</option>
                                                        <option value="JP">Japan</option>
                                                        <option value="JE">Jersey</option>
                                                        <option value="JO">Jordan</option>
                                                        <option value="KZ">Kazakhstan</option>
                                                        <option value="KE">Kenya</option>
                                                        <option value="KI">Kiribati</option>
                                                        <option value="KW">Kuwait</option>
                                                        <option value="KG">Kyrgyzstan</option>
                                                        <option value="LA">
                                                            Lao Peoples Democratic Republic
                                                        </option>
                                                        <option value="LV">Latvia</option>
                                                        <option value="LB">Lebanon</option>
                                                        <option value="LS">Lesotho</option>
                                                        <option value="LR">Liberia</option>
                                                        <option value="LY">Libya</option>
                                                        <option value="LI">Liechtenstein</option>
                                                        <option value="LT">Lithuania</option>
                                                        <option value="LU">Luxembourg</option>
                                                        <option value="MO">Macau</option>
                                                        <option value="MG">Madagascar</option>
                                                        <option value="MW">Malawi</option>
                                                        <option value="MY">Malaysia</option>
                                                        <option value="MV">Maldives</option>
                                                        <option value="ML">Mali</option>
                                                        <option value="MT">Malta</option>
                                                        <option value="MH">Marshall Islands</option>
                                                        <option value="MQ">Martinique</option>
                                                        <option value="MR">Mauritania</option>
                                                        <option value="MU">Mauritius</option>
                                                        <option value="YT">Mayotte</option>
                                                        <option value="MX">Mexico</option>
                                                        <option value="FM">Micronesia</option>
                                                        <option value="MD">Moldova</option>
                                                        <option value="MC">Monaco</option>
                                                        <option value="MN">Mongolia</option>
                                                        <option value="ME">Montenegro</option>
                                                        <option value="MS">Montserrat</option>
                                                        <option value="MA">Morocco</option>
                                                        <option value="MZ">Mozambique</option>
                                                        <option value="MM">Myanmar</option>
                                                        <option value="NA">Namibia</option>
                                                        <option value="NR">Nauru</option>
                                                        <option value="NP">Nepal</option>
                                                        <option value="NL">Netherlands</option>
                                                        <option value="NC">New Caledonia</option>
                                                        <option value="NZ">New Zealand</option>
                                                        <option value="NI">Nicaragua</option>
                                                        <option value="NE">Niger</option>
                                                        <option value="NG">Nigeria</option>
                                                        <option value="NU">Niue</option>
                                                        <option value="NF">Norfolk Island</option>
                                                        <option value="KP">North Korea</option>
                                                        <option value="MP">Northern Mariana Islands</option>
                                                        <option value="NO">Norway</option>
                                                        <option value="OM">Oman</option>
                                                        <option value="PK">Pakistan</option>
                                                        <option value="PW">Palau</option>
                                                        <option value="PS">
                                                            Palestinian Territory, Occupied
                                                        </option>
                                                        <option value="PA">Panama</option>
                                                        <option value="PG">Papua New Guinea</option>
                                                        <option value="PY">Paraguay</option>
                                                        <option value="PE">Peru</option>
                                                        <option value="PH">Philippines</option>
                                                        <option value="PN">Pitcairn</option>
                                                        <option value="PL">Poland</option>
                                                        <option value="PT">Portugal</option>
                                                        <option value="PR">Puerto Rico</option>
                                                        <option value="QA">Qatar</option>
                                                        <option value="MK">Republic of Macedonia</option>
                                                        <option value="CG">Republic of the Congo</option>
                                                        <option value="RE">Reunion</option>
                                                        <option value="RO">Romania</option>
                                                        <option value="RU">Russia</option>
                                                        <option value="RW">Rwanda</option>
                                                        <option value="BL">Saint Barthelemy</option>
                                                        <option value="SH">Saint Helena</option>
                                                        <option value="MF">Saint Martin</option>
                                                        <option value="WS">Samoa</option>
                                                        <option value="SM">San Marino</option>
                                                        <option value="ST">Sao Tome and Principe</option>
                                                        <option value="SA">Saudi Arabia</option>
                                                        <option value="SN">Senegal</option>
                                                        <option value="RS">Serbia</option>
                                                        <option value="SC">Seychelles</option>
                                                        <option value="SL">Sierra Leone</option>
                                                        <option value="SG">Singapore</option>
                                                        <option value="SX">Sint Maarten</option>
                                                        <option value="SK">Slovakia</option>
                                                        <option value="SI">Slovenia</option>
                                                        <option value="SB">Solomon Islands</option>
                                                        <option value="SO">Somalia</option>
                                                        <option value="ZA">South Africa</option>
                                                        <option value="GS">
                                                            South Georgia and the South Sandwich Islands
                                                        </option>
                                                        <option value="KR">South Korea</option>
                                                        <option value="SS">South Sudan</option>
                                                        <option value="ES">Spain</option>
                                                        <option value="LK">Sri Lanka</option>
                                                        <option value="KN">
                                                            St. Christopher (St. Kitts) Nevis
                                                        </option>
                                                        <option value="LC">St. Lucia</option>
                                                        <option value="PM">St. Pierre and Miquelon</option>
                                                        <option value="VC">St. Vincent and The Grenadines</option>
                                                        <option value="SD">Sudan</option>
                                                        <option value="SR">Suriname</option>
                                                        <option value="SJ">Svalbard and Jan Mayen</option>
                                                        <option value="SE">Sweden</option>
                                                        <option value="CH">Switzerland</option>
                                                        <option value="SY">Syrian Arab Republic</option>
                                                        <option value="TW">Taiwan</option>
                                                        <option value="TJ">Tajikistan</option>
                                                        <option value="TZ">Tanzania</option>
                                                        <option value="TH">Thailand</option>
                                                        <option value="TG">Togo</option>
                                                        <option value="TK">Tokelau</option>
                                                        <option value="TO">Tonga</option>
                                                        <option value="TT">Trinidad and Tobago</option>
                                                        <option value="TN">Tunisia</option>
                                                        <option value="TR">Turkey</option>
                                                        <option value="TM">Turkmenistan</option>
                                                        <option value="TC">Turks and Caicos Islands</option>
                                                        <option value="TV">Tuvalu</option>
                                                        <option value="UG">Uganda</option>
                                                        <option value="UA">Ukraine</option>
                                                        <option value="AE">United Arab Emirates</option>
                                                        <option value="GB">United Kingdom</option>
                                                        <option value="US">United States</option>
                                                        <option value="UM">
                                                            United States Minor Outlying Islands (the)
                                                        </option>
                                                        <option value="UY">Uruguay</option>
                                                        <option value="VI">US Virgin Islands</option>
                                                        <option value="UZ">Uzbekistan</option>
                                                        <option value="VU">Vanuatu</option>
                                                        <option value="VA">Vatican</option>
                                                        <option value="VE">Venezuela</option>
                                                        <option value="VN">Vietnam</option>
                                                        <option value="EH">Western Sahara</option>
                                                        <option value="YE">Yemen</option>
                                                        <option value="ZM">Zambia</option>
                                                        <option value="ZW">Zimbabwe</option>
                                                    </select>
                                                    <div className="error_text">Country is required</div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* Modal footer */}
                                <div className="modal-footer">
                                    <input
                                        type="hidden"
                                        name="paxindex_hidden"
                                        id="paxindex_hidden"
                                        defaultValue={0}
                                    />
                                    <button
                                        type="button"
                                        className="btn button grayBtn"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        id="addbtn"
                                        style={{ display: "none" }}
                                        className="btn button"
                                        onclick="submitPassenger_details()"
                                    >
                                        Save{" "}
                                        <span className="button_loding_div" style={{ display: "none" }}>
                                            <i className="button_loader blnk" />
                                        </span>
                                    </button>
                                    <button
                                        type="button"
                                        id="editbtn"
                                        style={{ display: "none" }}
                                        className="btn button"
                                        onclick="submitPassenger_details()"
                                    >
                                        Update{" "}
                                        <span className="button_loding_div" style={{ display: "none" }}>
                                            <i className="button_loader blnk" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* delete tooltip start here*/}
                    <div className="modal" id="delModal">
                        <div className="modal-dialog">
                            <div className="modal-content formBox">
                                <button
                                    type="button"
                                    className="btn-close close"
                                    data-bs-dismiss="modal"
                                />
                                {/* Modal body */}
                                <div className="modal-body">
                                    <div className="delete_record">
                                        <img src="/assets/us/profile/profile/images/cross.png" alt="" />
                                        <h3>Are you sure?</h3>
                                        <p>Do you really want to delete these records?</p>
                                    </div>
                                </div>
                                {/* Modal footer */}
                                <div className="modal-footer mx-auto no-border-top">
                                    <button
                                        type="button"
                                        className="btn button grayBtn"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="btn button delete"
                                        onclick="DeletePassenger_details()"
                                    >
                                        Delete{" "}
                                        <span className="button_loding_div" style={{ display: "none" }}>
                                            <i className="button_loader blnk" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="moreinfodiv"></div>
                    <link
                        href="/assets/us/profile/profile/css/payment-style.css"
                        rel="stylesheet"
                    />
                </main>
            </div>

            {/* Footer */}
            <footer>
                <div className="footer-component">
                    <div className="copyright-block">
                        <div className="container">
                            <div _ngcontent-crx-c2="">
                                <b _ngcontent-crx-c2="">Disclaimer:</b>
                                <div className="discalimer">
                                    OnlineFlightReservations is an independent travel portal. Its parent company is A
                                    Red Diamond Affair LLC. The information that's displayed on this
                                    website, www.onlineflightreservation.com, is for general purposes. All the
                                    necessary steps have been taken to ensure that the information
                                    displayed in the website is accurate and up- to-date. However, under
                                    no circumstance, We do not provide any warranty or representation,
                                    whether implied or expressed, when it comes to the accuracy,
                                    completeness or reliability of the information displayed on the
                                    website. If you need to have any queries answered, you can write to
                                    us at{" "}
                                    <a href="mailto:contact@onlineflightreservation.com">contact@onlineflightreservation.com</a>
                                </div>
                            </div>
                            <div className="copyright">
                                {" "}
                                Copyright © 2019-2024 • Online Flight Reservation 2140 Hall Johnson Rd Ste 102-171 Grapevine, TX 76051
                                {" "}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
