export interface IReviews {
  email: string;
  rating: number;
  reviews: string;
}

export interface IMovie {
  title: string;
  description: string;
  releaseDate: string;
  genre: string;
  isDeleted: boolean;
  viewCount: number;
  reviews: [IReviews];
}
