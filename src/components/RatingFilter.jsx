export default function RatingFilter({ stars, label }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-lg">
            {i < stars ? (
              <span className="text-[#F08B2C]">★</span>
            ) : (
              <span className="text-gray-600">★</span>
            )}
          </span>
        ))}
      </div>
      <span className="text-gray-200">{label}</span>
    </label>
  );
}
