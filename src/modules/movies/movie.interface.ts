export interface IReviews {
	email: string;
	rating: number;
	reviews: string;
}

export interface IMovie extends Document {
	title: string;
	description: string;
	releaseDate: string;
	genre: string;
	isDeleted: boolean;
	viewCount: number;
	slug: String;
	reviews: [IReviews];
}
