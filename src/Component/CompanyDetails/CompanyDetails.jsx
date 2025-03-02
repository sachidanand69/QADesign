import ReviewsPepoles from "../PeopleReviews/PeopleReviews";
import ReviewComponent from "../Reviews/Review";
import { companies } from "./CompanyData";
import { useLocation } from "react-router-dom";
import "./ComapanyDetails.css";

export default function CompanyDetails() {
    const location = useLocation();
    const services = location.state || {};

    return (
        <div className="company-details-container">
            {/* Back Image */}
            <div className="cover-image">
                <img
                    src="./src/assets/Images/image-1.jpg"
                    alt="Cover"
                />
            </div>

            {/*Card */}
            <div className="profile-card">
                <div className="profile-header">
                    {/* Logo and Company Info */}
                    <div className="logo-container">
                        <div className="logo">
                        <img
                        src={services.image}
                        alt="Company Logo"
                        style={{ width: "70px", height: "70px"}}
                    />
                        </div>
                        <div>
                            <h2 className="company-name">{services.companyName}</h2>
                            <p className="text-muted">{services.city}</p>
                        </div>
                    </div>

                    <a href="#" className="connect-button">
                        Connect
                    </a>
                </div>

                {/* Description */}
                <p className="company-description">{services.description}</p>

                <div className="company-info">
                    <div>
                        <h4 className="info-title">Year of Establishment</h4>
                        <p>{services.yearOfEstablishment}</p>
                    </div>
                    <div>
                        <h4 className="info-title">Countries Serviced</h4>
                        <p>{services.countriesServiced}</p>
                    </div>
                    <div>
                        <h4 className="info-title">Rating</h4>
                        <p>{services.rating} ⭐</p>
                    </div>
                    <div>
                        <h4 className="info-title">Social Media</h4>
                        <div className="social-icons">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img src="./src/assets/Images/linkedin.png" alt="LinkedIn" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src="./src/assets/Images/twit.png" alt="Twitter" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="./src/assets/Images/facebook.png" alt="Facebook" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <h2 className="about-heading">About This Company</h2>
            <p className="about-text">{services.about}</p>

            {/* Visa Services Section */}
            <h2 className="service-heading">
                {Object.keys(services.servicesOffered)[0]}
            </h2>
            <ul className="service-list">
                {companies[0].servicesOffered["Visa Services"].map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
 
            {/* Review Component */}
            <ReviewComponent ratings={companies[0].overallRatings} />
            {/* Peoples Reviews */}
            <ReviewsPepoles />
        </div>
    );
}


