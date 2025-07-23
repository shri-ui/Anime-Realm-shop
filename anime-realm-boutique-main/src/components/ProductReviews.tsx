
import React from 'react';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

interface Review {
  id: string;
  userName: string;
  userAvatar?: string;
  userInitials: string;
  rating: number;
  date: string;
  comment: string;
  helpful: number;
}

const mockReviews: { [productId: string]: Review[] } = {
  "1": [
    {
      id: "rev1",
      userName: "MangaMaster",
      userInitials: "MM",
      rating: 5,
      date: "2024-04-15",
      comment: "Absolutely love this Naruto figure! The details are amazing and it looks exactly as shown. The Sage Mode pose is dynamic and the paint job is fantastic.",
      helpful: 12
    },
    {
      id: "rev2",
      userName: "AnimeFan2000",
      userInitials: "AF",
      rating: 4,
      date: "2024-04-10",
      comment: "Great figure overall! Only giving 4 stars because the base is a bit wobbly, but the figure itself is perfect.",
      helpful: 5
    },
    {
      id: "rev3",
      userName: "OtakuCollector",
      userInitials: "OC",
      rating: 5,
      date: "2024-03-28",
      comment: "This is my third purchase from AnimeRealm and I'm never disappointed. The quality of this Naruto figure is exceptional. Shipping was fast too!",
      helpful: 9
    }
  ],
  "2": [
    {
      id: "rev4",
      userName: "DemonSlayerFan",
      userInitials: "DS",
      rating: 5,
      date: "2024-04-12",
      comment: "The craftsmanship on this Nichirin Blade is outstanding. The weight and feel are perfect, and the details on the handle are incredible.",
      helpful: 15
    },
    {
      id: "rev5",
      userName: "SwordCollector",
      userInitials: "SC",
      rating: 3,
      date: "2024-04-05",
      comment: "It's good but not great. The blade doesn't shine as shown in the pictures and there were some minor scratches on arrival.",
      helpful: 3
    }
  ],
  // Default reviews for any product without specific reviews
  "default": [
    {
      id: "rev-d1",
      userName: "AnimeLover",
      userInitials: "AL",
      rating: 5,
      date: "2024-04-05",
      comment: "Excellent product! Exactly as described and arrived quickly. Would definitely buy again!",
      helpful: 7
    },
    {
      id: "rev-d2",
      userName: "MerchCollector",
      userInitials: "MC",
      rating: 4,
      date: "2024-03-22",
      comment: "Really happy with this purchase. Great quality for the price point. Just wish there were more color options.",
      helpful: 3
    }
  ]
};

interface ProductReviewsProps {
  productId: string;
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ productId }) => {
  const reviews = mockReviews[productId] || mockReviews.default;
  
  // Calculate rating stats
  const totalReviews = reviews.length;
  const averageRating = reviews.reduce((total, review) => total + review.rating, 0) / totalReviews;
  
  // Count ratings by star level
  const ratingCounts = Array(5).fill(0);
  reviews.forEach(review => {
    ratingCounts[5 - review.rating]++;
  });
  
  // Calculate percentages
  const ratingPercentages = ratingCounts.map(count => (count / totalReviews) * 100);
  
  return (
    <div className="space-y-8">
      {/* Rating Summary */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex-1">
          <h3 className="text-lg font-semibold mb-4">Customer Ratings</h3>
          
          <div className="flex items-center mb-4">
            <div className="text-3xl font-bold mr-2">{averageRating.toFixed(1)}</div>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star 
                  key={index}
                  className={`h-5 w-5 ${
                    index < Math.floor(averageRating)
                      ? 'fill-anime-orange text-anime-orange' 
                      : index < averageRating 
                        ? 'fill-anime-orange/50 text-anime-orange' 
                        : 'fill-gray-200 text-gray-200'
                  }`}
                />
              ))}
            </div>
            <div className="text-sm text-gray-500 ml-2">
              {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}
            </div>
          </div>
          
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((stars, index) => (
              <div key={stars} className="flex items-center">
                <div className="w-12 text-sm text-gray-600">{stars} star</div>
                <div className="w-full mx-2">
                  <Progress value={ratingPercentages[index]} className="h-2" />
                </div>
                <div className="w-8 text-xs text-gray-500 text-right">
                  {ratingCounts[index]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Review List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  {review.userAvatar && <AvatarImage src={review.userAvatar} alt={review.userName} />}
                  <AvatarFallback className="bg-anime-purple text-white">{review.userInitials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{review.userName}</div>
                  <div className="text-xs text-gray-500">{review.date}</div>
                </div>
              </div>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star 
                    key={index}
                    className={`h-4 w-4 ${
                      index < review.rating
                        ? 'fill-anime-orange text-anime-orange' 
                        : 'fill-gray-200 text-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="mt-4 text-gray-700">{review.comment}</div>
            
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <button className="flex items-center hover:text-anime-purple">
                <span className="mr-1">Helpful</span>
                <span className="text-xs">({review.helpful})</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;
