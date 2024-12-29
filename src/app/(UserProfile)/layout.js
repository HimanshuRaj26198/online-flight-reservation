import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import "./_css/style.css";
import "./_css/inline.css";
import "./_css/jquery-ui.css";
import "./_css/bootstrap-min.css";
import ClientLayout  from "./ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Cheap Flights, Compare Flights & Airline Deals - onlineflightreservations.com",
    description: "Find the cheapest flight tickets with OnlineFlightReservations ! Compare prices effortlessly and book the best deals on flights through our advanced algorithm. Start saving on your next trip today",
    icons: {
        icon: '/favicon.ico'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
            </head>
            <body className={"profilemgt"}>
                <ToastContainer />
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
