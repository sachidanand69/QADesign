import { Star, ThumbsUp, ThumbsDown } from "lucide-react";

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
      {/* Header - Profile Image, Name, Date, and Rating */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={review.profileImage}
            alt={review.name}
            style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "12px", objectFit: "cover" }}
          />
          <div>
            <h3 style={{ fontWeight: "bold", margin: 0 }}>{review.name}</h3>
            <span style={{ color: "#777", fontSize: "14px" }}>{review.date}</span>
          </div>
        </div>

        {/* Star Ratings on the Right */}
        <div style={{ display: "flex", gap: "4px" }}>
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} style={{ color: "#FFD700" }} fill="currentColor" />
          ))}
        </div>
      </div>

      <p style={{ color: "#555", fontSize: "14px", margin: "4px 0" }}>Review on: {review.location}</p>
      <p style={{ color: "#555", fontSize: "14px" }}>{review.text}</p>

      {/* Like & Dislike Buttons */}
      <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
        <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" }}>
          <ThumbsUp style={{ width: "16px", height: "16px", marginRight: "4px" }} /> {review.likes}
        </button>
        <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" }}>
          <ThumbsDown style={{ width: "16px", height: "16px", marginRight: "4px" }} /> {review.dislikes}
        </button>
      </div>

      {/* Divider */}
      <hr style={{ margin: "16px 0", border: "0.5px solid #ddd" }} />
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


