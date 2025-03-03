import "./slidefilter.css";
import { useState, useEffect, useRef } from "react";
import { Save, SaveIcon } from "lucide-react";
import { companies } from "../CompanyDetails/CompanyData";
import { useNavigate } from "react-router-dom";

const services = [
    "Visa Services",
    "Admission Services",
    "Insurance Services",
    "Travel and Tourism",
    "Other Services",
];

const mockData = [
    { id: 1, city: companies[0].city, service: Object.keys(companies[0].servicesOffered)[0], rating: companies[0].rating, lat: 19.076, lon: 72.8777, company: companies[0] },
    { id: 2, city: companies[1].city, service: Object.keys(companies[1].servicesOffered)[0], rating: companies[1].rating, lat: 28.7041, lon: 77.1025, company: companies[1] },
    { id: 3, city: companies[2].city, service: Object.keys(companies[2].servicesOffered)[0], rating: companies[2].rating, lat: 12.9716, lon: 77.5946, company: companies[2] },
    { id: 4, city: companies[3].city, service: Object.keys(companies[3].servicesOffered)[0], rating: companies[3].rating, lat: 13.0827, lon: 80.2707, company: companies[3] },
    { id: 5, city: companies[4].city, service: Object.keys(companies[4].servicesOffered)[0], rating: companies[4].rating, lat: 22.5726, lon: 88.3639, company: companies[4] },
];

export default function SliderFilter() {
    const [location, setLocation] = useState("");
    const [distance, setDistance] = useState("");
    const [serviceTypeList, setServiceTypeList] = useState([]);
    const [rating, setRating] = useState([]);
    const [userCoords, setUserCoords] = useState(null);
    const [saved, setSaved] = useState({});
    const ratingRanges = [[1, 2], [2, 3], [3, 4], [4, 5],[5,6]];

    const navigate = useNavigate();
    const handleNavigate = (item) => {
        navigate("/QADesign/companydetails", { state: item });
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUserCoords({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                });
            }
        );
    }, []);

    const removeItem = (value) => {
        setServiceTypeList(prevItems => prevItems.filter(item => item !== value));
    }

    function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 3958.8;
        const dLat = ((lat2 - lat1) * Math.PI) / 180;
        const dLon = ((lon2 - lon1) * Math.PI) / 180;
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos((lat1 * Math.PI) / 180) *
            Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }

    useEffect(() => {
        if (location && userCoords) {
            const selectedCity = mockData.find((city) => city.city.toLowerCase() === location.toLowerCase());
            if (selectedCity) {
                const dist = calculateDistance(userCoords.lat, userCoords.lon, selectedCity.lat, selectedCity.lon);
                setDistance(dist.toFixed(2));
            }
        }
    }, [location, userCoords]);

    const clearFilter = (filter) => {
        if (filter === "location") setLocation("");
        if (filter === "serviceType") setServiceTypeList([]);
        if (filter === "rating") setRating([]);
    };

    const filteredData = mockData.filter(
        (item) =>
            (!location || item.city.toLowerCase().includes(location.toLowerCase())) &&
            (serviceTypeList.length === 0 || serviceTypeList.includes(item.service)) &&
            (rating.length === 0 || rating.some(range => item.rating >= range[0] && item.rating < range[1])) // Now properly checks numbers
    );

    return (
        <div className="container">
            {/* Search Filters */}
            <div className="search-box">
                <h2>Search Services</h2>
                <input
                    placeholder="Enter City (e.g., Mumbai)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="input-field"
                />
                <input
                    type="number"
                    placeholder="Distance (miles)"
                    value={distance}
                    readOnly
                    className="input-field"
                />

                <h3>Select Service Type:</h3>
                <div className="radio-group vertical">
                    {services.map((service) => (
                        <div key={service}>
                            <input
                                type="checkbox"
                                id={service}
                                name="serviceType"
                                value={service}
                                onChange={(e) => {
                                    let value = e.target.value;
                                    setServiceTypeList((prevList) =>
                                        prevList.includes(value)
                                            ? prevList.filter((item) => item !== value)
                                            : [...prevList, value]
                                    );
                                }}
                                checked={serviceTypeList.includes(service)}
                            />
                            <label htmlFor={service}>{service}</label>
                        </div>
                    ))}
                </div>

                <h3>Select Rating:</h3>
                <div className="radio-group vertical">
                    {ratingRanges.map((range, index) => (
                        <label key={index} className="block mt-2">
                        <input
                        type="checkbox"
                        name="rating"
                        value={JSON.stringify(range)}
                        onChange={(e) => {
                            let value = JSON.parse(e.target.value); 
                            setRating((prevList) =>
                                prevList.some((r) => r[0] === value[0] && r[1] === value[1])
                                    ? prevList.filter((r) => r[0] !== value[0] || r[1] !== value[1])
                                    : [...prevList, value]
                            );
                        }}
                        checked={rating.some((r) => r[0] === range[0] && r[1] === range[1])}
                        className="mr-2"
                    />
                    {range[0]} ⭐
                        </label>
                    ))}
                </div>
            </div>

            {/* Results Section */}
            <div className="results">
                <div className="selected-filters">
                    {location && <div className="filters"><button onClick={() => clearFilter("location")}>✖</button> {location}</div>}
                    {serviceTypeList.map((item) => (
                        <div key={item} className="filters">
                            <button onClick={() => removeItem(item)}>✖</button> {item}
                        </div>
                    ))}
                    {rating.map((range, index) => (
                        <div key={index} className="filters">
                            <button onClick={() => setRating((prev) => prev.filter((r) => r[0] !== range[0] || r[1] !== range[1]))}>
                                ✖
                            </button>
                            {range[0]} ⭐
                        </div>
                    ))}
                </div>

                {filteredData.length === 0 ? (
                    <p>No services found.</p>
                ) : (
                    filteredData.map((item) => (
                        <div key={item.id} className="result-card">
                            {/* Left: Image */}
                            <div className="result-card__image" onClick={() => handleNavigate(item.company)} style={{cursor:"pointer"}}>
                                <img src={item.company.image} alt={item.service} />
                            </div>

                            <div className="result-card__content" onClick={() => handleNavigate(item.company)} style={{cursor:"pointer"}}>
                                <h3>{item.company.companyName}</h3>
                                <p>City: {item.company.city}</p>
                                <p>{item.company.description}</p>
                            </div>

                            <div className="result-card__actions">
                            <button className="save-btn" onClick={() => setSaved((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}>
                                    {saved[item.id] ? <SaveIcon size={20} color="#007bff" /> : <Save size={20} />}
                                </button>
                                <p>{item.company.rating} ⭐</p>
                                <button className="connect-btn">Connect</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}


