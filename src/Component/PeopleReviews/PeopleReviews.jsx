import { Star, ThumbsUp, ThumbsDown } from "lucide-react";
import "./PeopleReviews.css"
const reviews = [
  {
    id: 1,
    name: "Randy Walker",
    date: "Nov 12, 2024",
    location: "67-04 Myrtle Ave Glendale, NY 11385",
    rating: 5,
    text: "Excellent apartment in the very center of the city, attractions and entertainment venues are located 50m from the flat. The flat was perfectly clean and had basic slippers, gel-shampoo, clean towels.",
    likes: 6,
    dislikes: 0,
    profileImage: "./src/assets/Images/profile-1.jpg",
  },
  {
    id: 2,
    name: "Kathryn Murphy",
    date: "Sep 17, 2024",
    location: "517 82nd St, Brooklyn, NY 11209",
    rating: 5,
    text: "I recently rented an apartment, and it has been a fantastic experience. The apartment itself is beautiful, with modern finishes and plenty of natural light. The property management team is very attentive and responds quickly to any maintenance requests. The common areas, including the pool and gym, are always clean and well-maintained.",
    likes: 13,
    dislikes: 2,
    profileImage: "./src/assets/Images/profile-2.jpg",
  },
  {
    id: 3,
    name: "Ralph Edwards",
    date: "Aug 9, 2024",
    location: "929 Hart St, Brooklyn, NY 11237",
    rating: 5,
    text: "I had a great experience with Michael Williams when selling my home. The team was professional, reliable, and extremely knowledgeable about the market. They provided excellent marketing for my property, which attracted a lot of interest and ultimately led to a quick sale above the asking price. I highly recommend their services to anyone looking to sell their home.",
    likes: 4,
    dislikes: 1,
    profileImage: "./src/assets/Images/profile-3.jpeg",
  },
  {
    id: 4,
    name: "Ralph Edwards",
    date: "Jul 4, 2024",
    location: "1234 Maple Street, Brooklyn, NY 11201",
    rating: 4,
    text: "I recently rented an apartment and had a positive experience overall. The location is convenient, and the building amenities are great. The apartment itself is spacious and well-maintained. However, there were a few minor issues with the plumbing that took a little longer to fix than expected. Despite that, I'm happy with my decision and would recommend it to others.",
    likes: 10,
    dislikes: 5,
    profileImage: "./src/assets/Images/profile-4.jpg",
  },
];

const ReviewCard = ({ review }) => {
  return (
    <>
      <div className="review-card">
        {/* Header - Profile Image, Name, Date, and Rating */}
        <div className="review-header">
          <div className="review-user">
            <img src={review.profileImage} alt={review.name} className="profile-image" />
            <div>
              <h3 className="review-name">{review.name}</h3>
              <span className="review-date">{review.date}</span>
            </div>
          </div>

          {/* Star Ratings on the Right */}
          <div className="review-stars">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="star-icon" fill="currentColor" />
            ))}
          </div>
        </div>

        <p className="review-location">Review on: {review.location}</p>
        <p className="review-text">{review.text}</p>

        {/* Like & Dislike Buttons */}
        <div className="review-actions">
          <button className="action-button">
            <ThumbsUp className="icon" /> {review.likes}
          </button>
          <button className="action-button">
            <ThumbsDown className="icon" /> {review.dislikes}
          </button>
        </div>

        {/* Divider */}
        <hr className="divider" />
      </div>
    </>
  );
};

export default function ReviewsPepoles() {
  return (
    <div style={{ maxWidth: "80%", margin: "0 auto", padding: "16px" }}>
      <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>Reviews</h2>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}


