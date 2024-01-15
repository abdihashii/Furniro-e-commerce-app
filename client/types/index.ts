export interface IProduct {
	created_at: string;
	description: string | null;
	id: string;
	img_src: string | null;
	name: string;
	popularity: number | null;
	price: number;
	slug: string;
	updated_at: string | null;
	quantity: number | null;
}
