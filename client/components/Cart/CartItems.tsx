'use client';

import React from 'react';
import useCart from '@/hooks/useCart';
import Image from 'next/image';

const CartItems = () => {
	const { cart, deleteFromCart } = useCart();

	return (
		<section className="flex w-full flex-row gap-8 py-20 lg:px-[100px] xl:px-[200px] 2xl:px-[300px]">
			<article className="w-3/4">
				{/* Cart items */}
				<table className="w-full">
					<thead className="w-full bg-[#F9F1E7]">
						<tr className="font-medium">
							<th className="py-4"></th>
							<th className="py-4">Product</th>
							<th className="py-4">Price</th>
							<th className="py-4">Quantity</th>
							<th className="py-4"></th>
						</tr>
					</thead>

					<tbody>
						{cart.map((cartItem) => (
							<tr
								key={cartItem.id}
								className="text-center"
							>
								<td className="pt-8">
									<Image
										src={cartItem.img_src as string}
										alt={cartItem.name}
										width={100}
										height={100}
									/>
								</td>

								<td className="pt-8">{cartItem.name}</td>

								<td className="pt-8">${cartItem.price}</td>

								<td className="pt-8">1</td>

								<td className="pt-8">
									<button
										className="rounded-md bg-red-500 px-4 text-white hover:bg-red-700"
										onClick={() => deleteFromCart(cartItem)}
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</article>

			<article className="h-[390px] w-1/4 bg-[#F9F1E7]">
				<h1>Cart Totals</h1>
			</article>
		</section>
	);
};

export default CartItems;
