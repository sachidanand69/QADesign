import "./slidefilter.css";
import {useState, useEffect, useRef} from "react";
import { Save, SaveIcon } from "lucide-react"
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
    { id: 1, city: companies[0].city, service: Object.keys(companies[0].servicesOffered)[0], rating: 4, lat: 19.076, lon: 72.8777,company:companies[0]},
    { id: 2, city: companies[1].city, service: Object.keys(companies[1].servicesOffered)[0], rating: 5, lat: 28.7041, lon: 77.1025,company:companies[1]},
    { id: 3, city: companies[2].city, service: Object.keys(companies[2].servicesOffered)[0], rating: 3, lat: 12.9716, lon: 77.5946,company:companies[2]},
    { id: 4, city: companies[3].city, service: Object.keys(companies[3].servicesOffered)[0], rating: 2, lat: 13.0827, lon: 80.2707,company:companies[3]},
    { id: 5, city: companies[4].city, service: Object.keys(companies[4].servicesOffered)[0], rating: 5, lat: 22.5726, lon: 88.3639,company:companies[4]},
];

export default function SliderFilter() {
    const [location, setLocation] = useState("");
    const [distance, setDistance] = useState("");
    const [serviceType, setServiceType] = useState("");
    const [rating, setRating] = useState("");
    const [userCoords, setUserCoords] = useState(null);
    const [get, setget] = useState(false);
    const [get1, setget1] = useState(false);
    const serviceTypeRef = useRef("");
    const [ serviceTypeList, setServiceTypeList] =useState([]);

    const [saved, setSaved] = useState({});

    console.log()

    const toggleSave = (id) => {
        setSaved((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const navigate = useNavigate();
    const handleNavigate = (item) => {
        navigate("/companydetails", { state: item});
      };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUserCoords({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                });
            },
            // (error) => console.("Error getting location:", error)
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
        if (filter === "serviceType") setServiceTypeList([]);
        if (filter === "rating") setRating("");
    };

    // const filteredData = mockData.filter(
    //     (item) =>
    //         (!location || item.city.toLowerCase().includes(location.toLowerCase())) &&
    //         (serviceType === "" || serviceTypeList.includes(item.service)) &&
    //         (!rating || item.rating === Number(rating))
    // );

    const filteredData = mockData.filter(
        (item) =>
            (!location || item.city.toLowerCase().includes(location.toLowerCase())) &&
            (serviceTypeList.length === 0 || serviceTypeList.includes(item.service)) &&
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
                                // ref={serviceTypeRef}
                                type="checkbox"
                                id={service}
                                name="serviceType"
                                value={service}
                                onChange={
                                    (e) => {
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
                    {[1, 2, 3, 4, 5].map((num) => (
                        <label key={num} className="block mt-2">
                            <input
                                type="radio"
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

                <button className="button">Search</button>
            </div>


            {/* Results Section */}
            <div className="results">
                {/* Selected Filters */}
                <div className="selected-filters">
                    {location && <div className="filters" style={{ backgroundColor: "grey" }}><button onClick={() => clearFilter("location")}>✖</button> {location}</div>}
                    {
                        serviceTypeList.length >0 &&
                        (
                            serviceTypeList.map((item)=>
                                <div key={item} className="filters">
                                    <button onClick={() => clearFilter("serviceType")}>
                                        ✖
                                    </button>
                                    {item}</div>
                            )
                        )
                    }
                    {rating && <div className="filters"><button onClick={() => clearFilter("rating")}>✖</button> {rating} Stars</div>}
                </div>
                <h2>Available Services</h2>
                {filteredData.length === 0 ? (
                    <p>No services found.</p>
                ) : (
                    filteredData.map((item) => (
                        <div key={item.id} className="result-card" onClick={()=>handleNavigate(item.company)}>
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

