import { cartAtom } from '@/atoms/cartAtom';
import { IProduct } from '@/types';
import { useAtom } from 'jotai';

const useCart = () => {
	const [cart, setCart] = useAtom(cartAtom);

	const addToCart = (product: IProduct) => {
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

	return {
		cart,
		addToCart,
	};
};

export default useCart;
