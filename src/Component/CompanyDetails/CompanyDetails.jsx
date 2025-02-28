import ReviewsPepoles from "../PeopleReviews/PeopleReviews";
import ReviewComponent from "../Reviews/Review";
import { companies } from "./CompanyData";
import { useLocation } from "react-router-dom";

export default function CompanyDetails() {
    companies[0].servicesOffered["Visa Services"].map((item)=>console.log(item))
    const location = useLocation();
    const services = location.state || {}
    console.log(services)
    
    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            {/* Cover Image */}
            <div style={{ height: '33vh', width: '100%', backgroundColor: '#ccc' }}>
                <img
                    src="#"
                    alt="Cover"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>

            {/* Profile Card */}
            <div style={{
                position: 'relative',
                width: '75%',
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
            }}>
                <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                    {/* Logo and Company Info */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{
                            width: '96px',
                            height: '96px',
                            backgroundColor: '#aaa',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '4px solid white',
                            marginRight: '16px'
                        }}>
                            <img
                                src="#"
                                alt="Company Logo"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>{companies[0].companyName}</h2>
                            <p style={{ color: '#555', margin: 0 }}>{companies[0].city},{companies[0].country}</p>
                        </div>
                    </div>

                    {/* Connect Button */}
                    <button style={{
                        backgroundColor: '#007bff',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}>
                        Connect
                    </button>
                </div>

                {/* Description and Additional Info */}
                <p style={{ fontSize: '1rem', color: '#333', marginTop: '1rem' }}>{companies[0].description}</p>

                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '1rem' }}>
                    <div>
                        <h4 style={{ fontWeight: 'bold' }}>Year of Establishment</h4>
                        <p>{companies[0].yearOfEstablishment}</p>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 'bold' }}>Countries Serviced</h4>
                        <p>{companies[0].countriesServiced}</p>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 'bold' }}>Rating</h4>
                        <p>4.5 ⭐</p>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 'bold' }}>Social Media</h4>
                        <p>📘 📷 🐦 💼</p>
                    </div>
                </div>
            </div>
            {/* About Section */}
            <div style={{ width: '75%', margin: 'auto', marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                <h2>About This Company</h2>
                <p>
                    This company is a leader in its industry, offering high-quality services and products across multiple countries.
                    With a strong reputation and years of experience, the company continues to grow and innovate.
                </p>
            </div>

            {/* Visa Services Section */}
            <div style={{ width: '75%', margin: 'auto', marginTop: '2rem', padding: '1.5rem', backgroundColor: '#ffffff', borderRadius: '8px' }}>
                <h2>Visa Services</h2>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                    {companies[0].servicesOffered["Visa Services"].map((item)=>
                        <li key={item}>{item}</li>
                    )}
                </ul>
            </div>

            <ReviewComponent ratings={companies[0].overallRatings}/>
            <ReviewsPepoles/>
        </div>
    );
}

