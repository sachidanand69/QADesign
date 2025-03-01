import ReviewsPepoles from "../PeopleReviews/PeopleReviews";
import ReviewComponent from "../Reviews/Review";
import { companies } from "./CompanyData";
import { useLocation } from "react-router-dom";


export default function CompanyDetails() {
    const location = useLocation();
    const services = location.state || {};

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            {/* Cover Image */}
            <div style={{ height: '33vh', width: '100%', backgroundColor: '#ccc' }}>
                <img
                    src="./src/assets/Images/image-1.jpg"
                    alt="Cover"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>

            {/* Profile Card */}
            <div style={styles.profileCard}>
                <div style={styles.profileHeader}>
                    {/* Logo and Company Info */}
                    <div style={styles.logoContainer}>
                        <div style={styles.logo}>
                            <img
                                src={services.image}
                                alt="Company Logo"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div>
                            <h2 style={styles.companyName}>{services.companyName}</h2>
                            <p style={styles.textMuted}>{services.city}</p>
                        </div>
                    </div>

                    {/* Connect Button */}
                    <a href="#" style={styles.connectButton}>
                        Connect
                    </a>
                </div>

                {/* Description and Additional Info */}
                <p style={styles.companyDescription}>{services.description}</p>

                <div style={styles.companyInfo}>
                    <div>
                        <h4 style={styles.infoTitle}>Year of Establishment</h4>
                        <p>{services.yearOfEstablishment}</p>
                    </div>
                    <div>
                        <h4 style={styles.infoTitle}>Countries Serviced</h4>
                        <p>{services.countriesServiced}</p>
                    </div>
                    <div>
                        <h4 style={styles.infoTitle}>Rating</h4>
                        <p>{services.rating} ⭐</p>
                    </div>
                    <div>
                        <h4 style={styles.infoTitle}>Social Media</h4>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" , marginLeft:"30px"}}>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img src="./src/assets/Images/linkedin.png" alt="LinkedIn" width="34" style={{ verticalAlign: "middle" }} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src="./src/assets/Images/twit.png" alt="Twitter" width="34" style={{ verticalAlign: "middle" }} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="./src/assets/Images/facebook.png" alt="Facebook" width="34" style={{ verticalAlign: "middle" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <h2 style={{ textAlign: "left", marginLeft: "10%", width: "80%" }}>About This Company</h2>
            <p style={{ textAlign: "center", maxWidth: "80%", margin: "0 auto" }}>{services.about}</p>

            {/* Visa Services Section */}
            <h2 style={{ textAlign: "left", marginLeft: "10%", width: "80%" }}>
            {Object.keys(services.servicesOffered)[0]}
          </h2>
          <ul style={{ marginLeft: "10%", width: "80%" }}>
            {companies[0].servicesOffered["Visa Services"].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          

            <ReviewComponent ratings={companies[0].overallRatings} />
            <ReviewsPepoles />
        </div>
    );
}

/* ✅ Responsive Inline Styles */
const styles = {
    profileCard: {
        position: 'relative',
        width: '90%',
        maxWidth: '800px',
        margin: 'auto',
        marginTop: '-4rem',
        backgroundColor: 'white',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '1.5rem',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },
    profileHeader: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
    },
    logo: {
        width: '80px',
        height: '80px',
        backgroundColor: '#aaa',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '4px solid white'
    },
    companyName: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        margin: 0
    },
    textMuted: {
        color: '#555',
        margin: 0
    },
    connectButton: {
        backgroundColor: '#007bff',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        textDecoration: 'none',
        transition: '0.3s ease-in-out',
        textAlign: 'center'
    },
    companyDescription: {
        fontSize: '1rem',
        color: '#333',
        marginTop: '1rem',
        textAlign: 'justify'
    },
    companyInfo: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '16px',
        width: '100%',
        marginTop: '1rem',
        textAlign: 'center'
    },
    infoTitle: {
        fontWeight: 'bold'
    },
    sectionContainer: {
        width: '90%',
        maxWidth: '800px',
        margin: 'auto',
        marginTop: '2rem',
        padding: '1.5rem',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px'
    },
    list: {
        listStyleType: 'disc',
        paddingLeft: '1.5rem'
    }
};


