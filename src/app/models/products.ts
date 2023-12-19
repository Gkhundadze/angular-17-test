export interface Products {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating: Rating,
    title: string,
}
interface Rating {
    count: number,
    rate: number
}