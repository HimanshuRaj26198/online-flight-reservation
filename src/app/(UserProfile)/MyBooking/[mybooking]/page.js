'use client';
import { useState, useEffect } from "react";

const MyBooking = () => {

    const [activeTab, setActiveTab] = useState("1"); // Default to "Upcoming"
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch bookings based on activeTab
    const fetchBookings = async (tabId) => {
        setLoading(true);
        setBookings([]); // Reset bookings while loading
        try {
            // Replace with your API endpoint
            const response = await fetch(`/api/bookings?type=${tabId}`);
            const data = await response.json();
            setBookings(data);
        } catch (error) {
            console.error("Error fetching bookings:", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchBookings(activeTab);
    }, [activeTab]);

    return (
        <>
            <div className="rightCntr" id="mytrip" style={{ display: "block" }}>
                <div className="tabBox">
                    <ul className="tabs">
                        <li>
                            <a
                                onClick={() => setActiveTab("1")}
                                className={`ac ac1 ${activeTab === "1" ? "active" : ""}`}
                            >
                                Upcoming
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => setActiveTab("2")}
                                className={`ac ac2 ${activeTab === "2" ? "active" : ""}`}
                            >
                                Completed
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => setActiveTab("3")}
                                className={`ac ac3 ${activeTab === "3" ? "active" : ""}`}
                            >
                                Cancelled
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="tabContent2" id="mybooking">
                    <div className="row">
                        <div className="col-sm-12 title">
                            <h2 className="pull-left">
                                <i
                                    className="fa fa-plane"
                                    style={{ transform: "rotate(45deg)", color: "#000" }}
                                />{" "}
                                Flight Booking(s)
                            </h2>
                        </div>
                    </div>
                    <div className="flightbooking">
                        {loading ? (
                            <div id="loadingimg" className="loading">
                                <img
                                    src="/assets/us/profile/profile/images/loader.gif"
                                    alt="loading image"
                                />
                                <span>Loading...</span>
                            </div>
                        ) : (
                            <div className="table-responsive">
                                <table className="table text-center table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Booking No.</th>
                                            <th>From</th>
                                            <th>To</th>
                                            <th>Travel Date</th>
                                            <th>Booking Date</th>
                                            <th>Total Price</th>
                                            <th>Detail</th>
                                        </tr>
                                    </thead>
                                    <tbody className="hstr" id="fa1">
                                        {bookings.length > 0 ? (
                                            bookings.map((booking) => (
                                                <tr key={booking.id}>
                                                    <td>{booking.bookingNo}</td>
                                                    <td>{booking.from}</td>
                                                    <td>{booking.to}</td>
                                                    <td>{booking.travelDate}</td>
                                                    <td>{booking.bookingDate}</td>
                                                    <td>{booking.totalPrice}</td>
                                                    <td>
                                                        <a href={`/booking/${booking.id}`} className="btn btn-primary">
                                                            View Details
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr className="norecord">
                                                <td colSpan={7}>
                                                    <div className="alert alert-danger" role="alert">
                                                        No record found
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>

    )

}

export default MyBooking;