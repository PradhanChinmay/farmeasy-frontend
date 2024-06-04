import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import Services from "../Components/Services";

function LandingHomePage() {
    return (
        <div>
            <Navbar />
            <Home />
            <Services />
            <Footer />
        </div>
    );
}

export default LandingHomePage;