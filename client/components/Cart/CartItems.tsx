'use client';

import React from 'react';
import useCart from '@/hooks/useCart';

const CartItems = () => {
	const { cart } = useCart();

	return (
		<section>
			<h2>Cart Items:</h2>

			<ul>
				{cart.map((cartItem) => {
					return (
						<li key={cartItem.id}>
							<p>{cartItem.name}</p>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default CartItems;
