'use client';

import React from 'react';
import useCart from '@/hooks/useCart';
import Image from 'next/image';

const CartItems = () => {
	const { cart, deleteFromCart } = useCart();

	return (
		<section className="py-20 lg:px-[100px] xl:px-[200px] 2xl:px-[300px]">
			<article>
				{/* Header for the cart items */}
				<div className="flex flex-row gap-9 bg-[#F9F1E7] py-4 pl-36 font-medium">
					<p>Product</p>
					<p>Price</p>
					<p>Quanity</p>
				</div>

				{/* Cart items */}
				<ul className="flex flex-col">
					{cart.map((cartItem) => (
						<li
							key={cartItem.id}
							className="flex flex-row gap-9"
						>
							<Image
								src={cartItem.img_src as string}
								alt={cartItem.name}
								width={100}
								height={100}
							/>

							<p>{cartItem.name}</p>
							<p>{cartItem.price}</p>
							<p>{cartItem.quantity ?? 1}</p>

							<button
								className="rounded-md bg-red-500 px-4 text-white hover:bg-red-700"
								onClick={() => deleteFromCart(cartItem)}
							>
								Delete
							</button>
						</li>
					))}
				</ul>
			</article>
		</section>
	);
};

export default CartItems;
