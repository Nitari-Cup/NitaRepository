import { useState, useEffect } from 'react';
import axios from 'axios';

interface ReviewData {
  [key: string]: {
    purchase_date: string;
    review: number;
    title: string;
    discription: string;
    model: string;
    create_at: string;
  };
}

export const useFetchReview = (): ReviewData | null => {
  const [reviewData, setReviewData] = useState<ReviewData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://nitari-api.onrender.com/fetchReview');
        setReviewData(response.data); // 全データを取得
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return reviewData;
};
