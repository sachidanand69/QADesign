import "./slidefilter.css";
import { useState, useEffect } from "react";
import { Save, SaveIcon } from "lucide-react"

const services = [
    "Visa Services",
    "Admission Services",
    "Insurance Services",
    "Travel and Tourism",
    "Other Services",
];

const mockData = [
    { id: 1, city: "Mumbai", service: "Visa Services", rating: 4, lat: 19.076, lon: 72.8777 },
    { id: 2, city: "Delhi", service: "Admission Services", rating: 5, lat: 28.7041, lon: 77.1025 },
    { id: 3, city: "Bangalore", service: "Insurance Services", rating: 3, lat: 12.9716, lon: 77.5946 },
    { id: 4, city: "Chennai", service: "Travel and Tourism", rating: 2, lat: 13.0827, lon: 80.2707 },
    { id: 5, city: "Kolkata", service: "Other Services", rating: 5, lat: 22.5726, lon: 88.3639 },
];

export default function SliderFilter() {
    const [location, setLocation] = useState("");
    const [distance, setDistance] = useState("");
    const [serviceType, setServiceType] = useState("");
    const [rating, setRating] = useState("");
    const [userCoords, setUserCoords] = useState(null);
    const [get, setget] = useState(false);
    const [get1, setget1] = useState(false);

    const [saved, setSaved] = useState({});

    const toggleSave = (id) => {
        setSaved((prev) => ({ ...prev, [id]: !prev[id] }));
    };


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUserCoords({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                });
            },
            (error) => console.error("Error getting location:", error)
        );
    }, []);

    function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 3958.8; // Radius of Earth in miles
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
        if (filter === "serviceType") setServiceType("");
        if (filter === "rating") setRating("");
    };

    const filteredData = mockData.filter(
        (item) =>
            (!location || item.city.toLowerCase().includes(location.toLowerCase())) &&
            (!serviceType || item.service === serviceType) &&
            (!rating || item.rating === Number(rating))
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
                                onClick={(e) => { if (get === true) { setServiceType(e.target.value); setget(false) } else { clearFilter("serviceType"); setget(true) } }}
                                checked={serviceType === service}
                                readOnly
                            />
                            <label htmlFor={service}>{service}</label>
                        </div>
                    ))}
                </div>

                <h3>Select Rating:</h3>
                <div className="radio-group vertical">
                    {[1, 2, 3, 4, 5].map((num) => (
                        <label key={num} className="block mt-2">
                            <input
                                type="checkbox"
                                name="rating"
                                value={num}
                                onChange={(e) => setRating(e.target.value)}
                                checked={rating === String(num)}
                                className="mr-2"
                            />
                            {num} Stars
                        </label>
                    ))}
                </div>
            </div>


            {/* Results Section */}
            <div className="results">
                {/* Selected Filters */}
                <div className="selected-filters">
                    {location && <div className="filters" style={{ backgroundColor: "grey" }}><button onClick={() => clearFilter("location")}>✖</button> {location}</div>}
                    {serviceType && <div className="filters"><button onClick={() => clearFilter("serviceType")}>✖</button> {serviceType}</div>}
                    {rating && <div className="filters"><button onClick={() => clearFilter("rating")}>✖</button> {rating} Stars</div>}
                </div>
                <h2>Available Services</h2>
                {filteredData.length === 0 ? (
                    <p>No services found.</p>
                ) : (
                    filteredData.map((item) => (
                        <div key={item.id} className="result-card">
                            {/* Left: Image */}
                            <div className="result-card__image">
                                <img src={item.image} alt={item.service} />
                            </div>

                            {/* Middle: Content */}
                            <div className="result-card__content">
                                <h3>{item.service}</h3>
                                <p>City: {item.city}</p>
                                <p>Rating: {item.rating} ⭐</p>
                            </div>

                            {/* Right: Buttons */}
                            <div className="result-card__actions">
                                <button className="save-btn" onClick={() => toggleSave(item.id)}>
                                    {saved[item.id] ? <SaveIcon size={20} color="#007bff" /> : <Save size={20} />}
                                </button>
                                <button className="connect-btn">Connect</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
