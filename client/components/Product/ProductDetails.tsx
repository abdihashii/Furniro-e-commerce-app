'use client';

import { IProduct } from '@/types';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/database.types';
import useCart from '@/hooks/useCart';

const ProductDetails = ({ product }: { product: IProduct }) => {
	const supabase = createClientComponentClient<Database>();

	const { cart, addToCart } = useCart();

	const [selectedSize, setSelectedSize] = React.useState<string>('S');
	const [selectedColor, setSelectedColor] = React.useState<string>('purple');
	const [selectedQuantity, setSelectedQuantity] = React.useState<number>(1);
	const [selectedImage, setSelectedImage] = React.useState<{
		img_src: string;
		alt: string;
	}>({
		img_src: product.img_src ?? '',
		alt: product.name ?? '',
	});

	const [productImages, setProductImages] = React.useState<any[]>([]);

	useEffect(() => {
		const fetchProductImages = async () => {
			try {
				const { data: images, error } = await supabase
					.from('product_images')
					.select('*')
					.order('alt_text', { ascending: true });

				if (error) {
					throw new Error(error.message);
				}

				setProductImages(images);
			} catch (error) {
				console.log(error);
			}
		};

		fetchProductImages();
	}, [supabase]);

	return (
		<section className="grid w-full grid-cols-2 gap-[106px] px-[50px] py-10 lg:px-[100px] 2xl:px-[400px]">
			{/* Images */}
			<article className="flex h-[500px] flex-row gap-[78px] overflow-hidden">
				<div className="flex h-full w-28 flex-col gap-8 overflow-y-auto px-4">
					{productImages &&
						productImages.map((image) => (
							<div
								key={image.id}
								className="relative h-20 w-20 flex-shrink-0 cursor-pointer rounded-[10px] bg-[#F9F1E7]"
								onClick={() =>
									setSelectedImage({
										img_src: image.img_src,
										alt: image.alt_text,
									})
								}
							>
								<Image
									src={image.img_src ?? ''}
									alt={image.alt_text ?? ''}
									fill={true}
									objectFit="cover"
								/>
							</div>
						))}
				</div>

				<div className="relative h-[500px] w-[423px]">
					<Image
						className="rounded-[10px]"
						src={selectedImage.img_src}
						alt={selectedImage.alt}
						fill={true}
						objectFit="cover"
					/>
				</div>
			</article>

			{/* Product details */}
			<article className="space-y-[18px]">
				<h1 className="text-[42px]">{product.name}</h1>
				<p className="text-2xl font-medium text-[#9f9f9f]">${product.price}</p>

				{/* Review rating */}
				<div className="flex flex-row gap-4">
					<p>stars</p>
					<p className="border-l-2 border-l-[#9f9f9f] pl-4 text-[#9f9f9f]">
						5 customer reviews
					</p>
				</div>

				{/* Description */}
				<p className="text-[13px]">{product.description}</p>

				{/* Sizes */}
				<div className="space-y-3">
					<p className="text-sm text-[#9f9f9f]">Size</p>

					<div className="flex flex-row gap-4">
						<div className="relative inline-block">
							<input
								className="hidden"
								type="radio"
								name="size"
								id="S"
								checked={selectedSize === 'S'}
								value="S"
								onChange={(e) => setSelectedSize(e.target.value)}
							/>
							<label
								className={`flex h-[30px] w-[30px] cursor-pointer items-center justify-center overflow-hidden rounded-[5px] hover:bg-[#B88E2F] hover:text-white
              ${
								selectedSize === 'S'
									? 'bg-[#B88E2F] text-white'
									: 'bg-[#F9F1E7]'
							}
            `}
								htmlFor="S"
							>
								S
							</label>
						</div>

						<div className="relative inline-block">
							<input
								className="hidden"
								type="radio"
								name="size"
								id="M"
								checked={selectedSize === 'M'}
								value="M"
								onChange={(e) => setSelectedSize(e.target.value)}
							/>
							<label
								className={`flex h-[30px] w-[30px] cursor-pointer items-center justify-center overflow-hidden rounded-[5px] hover:bg-[#B88E2F] hover:text-white
                ${
									selectedSize === 'M'
										? 'bg-[#B88E2F] text-white'
										: 'bg-[#F9F1E7]'
								}
              `}
								htmlFor="M"
							>
								M
							</label>
						</div>

						<div className="relative inline-block">
							<input
								className="hidden"
								type="radio"
								name="size"
								id="L"
								checked={selectedSize === 'L'}
								value="L"
								onChange={(e) => setSelectedSize(e.target.value)}
							/>
							<label
								className={`flex h-[30px] w-[30px] cursor-pointer items-center justify-center overflow-hidden rounded-[5px] hover:bg-[#B88E2F] hover:text-white
              ${
								selectedSize === 'L'
									? 'bg-[#B88E2F] text-white'
									: 'bg-[#F9F1E7]'
							}
            `}
								htmlFor="L"
							>
								L
							</label>
						</div>
					</div>
				</div>

				{/* Colors */}
				<div className="space-y-3">
					<p className="text-sm text-[#9f9f9f]">Color</p>

					<div className="flex flex-row gap-4">
						<div className="relative inline-block">
							<input
								className="hidden"
								type="radio"
								name="color"
								id="purple"
								checked={selectedColor === 'purple'}
								value="purple"
								onChange={(e) => setSelectedColor(e.target.value)}
							/>
							<label
								className={`block h-[30px] w-[30px] cursor-pointer overflow-hidden rounded-full border-2 bg-[#816DFA] hover:border-[#B88E2F]
              ${
								selectedColor === 'purple'
									? 'border-[#B88E2F]'
									: 'border-[#816DFA]'
							}
            `}
								htmlFor="purple"
							/>
						</div>

						<div className="relative inline-block">
							<input
								className="hidden"
								type="radio"
								name="color"
								id="black"
								checked={selectedColor === 'black'}
								value="black"
								onChange={(e) => setSelectedColor(e.target.value)}
							/>
							<label
								className={`block h-[30px] w-[30px] cursor-pointer overflow-hidden rounded-full border-2 bg-black hover:border-[#B88E2F]
                ${
									selectedColor === 'black'
										? 'border-[#B88E2F]'
										: 'border-black'
								}
              `}
								htmlFor="black"
							/>
						</div>

						<div className="relative inline-block">
							<input
								className="hidden"
								type="radio"
								name="color"
								id="gray"
								checked={selectedColor === 'gray'}
								value="gray"
								onChange={(e) => setSelectedColor(e.target.value)}
							/>
							<label
								className={`block h-[30px] w-[30px] cursor-pointer overflow-hidden rounded-full border-2 bg-[#9f9f9f] hover:border-[#B88E2F]
                ${
									selectedColor === 'gray'
										? 'border-[#B88E2F]'
										: 'border-[#9f9f9f]'
								}
              `}
								htmlFor="gray"
							/>
						</div>
					</div>
				</div>

				{/* Quantity, cart, and compare */}
				<div className="flex flex-row gap-[18px] border-b border-[#D9D9D9] pb-[60px] pt-4">
					{/* Quantity */}
					<div className="flex h-[64px] w-[123px] flex-row items-center justify-between gap-3 rounded-[15px] border border-[#9f9f9f] px-3 py-2 font-medium">
						<button
							className={`w-fit ${
								cart.some((p) => p.id === product.id)
									? 'cursor-not-allowed opacity-50'
									: 'cursor-pointer'
							}`}
							onClick={() => {
								if (selectedQuantity > 1)
									setSelectedQuantity(selectedQuantity - 1);
							}}
							disabled={
								selectedQuantity === 1 || cart.some((p) => p.id === product.id)
							}
						>
							-
						</button>
						<p
							className={`${
								cart.some((p) => p.id === product.id) && 'opacity-50'
							}`}
						>
							{selectedQuantity}
						</p>
						<button
							className={`w-fit ${
								cart.some((p) => p.id === product.id)
									? 'cursor-not-allowed opacity-50'
									: 'cursor-pointer'
							}`}
							onClick={() => setSelectedQuantity(selectedQuantity + 1)}
							disabled={
								selectedQuantity === 1 || cart.some((p) => p.id === product.id)
							}
						>
							+
						</button>
					</div>

					{/* Cart */}
					<button
						className={`h-[64px] w-[215px] rounded-[15px] border text-xl
							${
								cart.some((p) => p.id === product.id)
									? 'cursor-not-allowed border-[#B88E2F] bg-[#B88E2F] text-white'
									: 'border-black bg-white hover:border-[#B88E2F] hover:text-[#B88E2F]'
							}
						`}
						onClick={() => addToCart(product)}
						disabled={
							selectedQuantity === 0 || cart.some((p) => p.id === product.id)
						}
					>
						{cart.some((p) => p.id === product.id) ? (
							<span className="ml-2">✔ Added</span>
						) : (
							'Add to cart'
						)}
					</button>

					{/* Compare */}
					<button className="h-[64px] w-[215px] rounded-[15px] border border-black text-xl hover:border-[#B88E2F] hover:text-[#B88E2F]">
						+ Compare
					</button>
				</div>

				{/* SKU, category, tags, and share */}
				<div className="pt-[40px]">
					<table className="text-[#9f9f9f]">
						<tbody>
							{/* SKU */}
							<tr>
								<td className="pb-4 pr-8">SKU</td>
								<td className="pb-4">SS001</td>
							</tr>

							{/* Category */}
							<tr>
								<td className="pb-4 pr-8">Category</td>
								<td className="pb-4">Sofas</td>
							</tr>

							{/* Tags */}
							<tr>
								<td className="pb-4 pr-8">Tags</td>
								<td className="pb-4">Chair, Furniture, Sofa</td>
							</tr>

							{/* Share */}
							<tr>
								<td className="pb-4 pr-8">Share</td>
								<td className="pb-4">Facebook, Twitter, Pinterest</td>
							</tr>
						</tbody>
					</table>
				</div>
			</article>
		</section>
	);
};

export default ProductDetails;
