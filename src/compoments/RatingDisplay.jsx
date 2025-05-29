
export const RatingDisplay = ({rating}) => {

    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
        <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="text-[#f6aa1c] text-xl">★</span>
      ))}
      {halfStar && <span className="text-[#f6aa1c] text-xl">☆</span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-300 text-xl">★</span>
      ))}
      <span className="mx-3 text-sm font-medium bg-[#f6aa1c] text-white px-3 py-1 rounded-sm">{rating.toFixed(1)} ★</span>
    </div>
    )
}