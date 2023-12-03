export interface Recipe {
    id: number;
    slug: string;

    title: string;
    description: string;
    article: string;
    image: string;

    difficulty: 'easy'|'medium'|'hard';
    duration: number;
    price: number;
    rating: number;

    created_at: string;
    updated_at: string;
}
