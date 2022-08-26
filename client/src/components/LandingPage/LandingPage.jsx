import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="landingPage">
            <Link to="/Home">
                <button>Ingresar</button>
            </Link>
        </div>
    )
}

export default LandingPage;