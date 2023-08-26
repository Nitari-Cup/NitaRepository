// interface StarRatingProps {
//     review: number;
// }
// function StarRating({ review }: StarRatingProps) {
//     const maxRating = 5;
//     const filledStars = Math.min(Math.round(review), maxRating);

//     return (
//     <div className="rating rating-lg">
//         {[...Array(maxRating)].map((_, index) => (
//         <input
//             key={index}
//             name={`rating-${index}`}
//             className={`mask mask-star-2 ${
//                 index < filledStars ? 'bg-orange-400' : 'bg-gray-300'
//             }`}
//         />
//         ))}
//     </div>
//     );
// }

// export default StarRating
