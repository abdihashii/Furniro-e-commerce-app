import { cartAtom } from '@/atoms/cartAtom';
import { IProduct } from '@/types';
import { useAtom } from 'jotai';

const useCart = () => {
	const [cart, setCart] = useAtom(cartAtom);

	const addToCart = (product: Omit<IProduct, 'quantity'>) => {
		// Check if product is already in cart
		if (cart.some((p) => p.id === product.id)) {
			return {
				error: 'Product already in cart',
			};
		}

		const updatedCart = [...cart, product];

		setCart(updatedCart);

		return {
			success: 'Product added to cart',
		};
	};

	const deleteFromCart = (product: IProduct) => {
		const updatedCart = cart.filter((p) => p.id !== product.id);

		setCart(updatedCart);
	};

	const handleAddToCart = (product: IProduct) => {
		const { success, error } = addToCart(product);

		if (success) {
			console.log(success);
		}

		if (error) {
			console.log(error);
		}
	};

	return {
		cart,
		addToCart,
		deleteFromCart,
		handleAddToCart,
	};
};

export default useCart;
