import * as z from 'zod';

export const contactFormSchema = z.object({
	name: z
		.string()
		.min(2, {
			message: 'Name must be at least 2 characters long',
		})
		.max(50, {
			message: 'Name must be at most 50 characters long',
		}),
	email: z.string().email({
		message: 'Please enter a valid email address',
	}),
	subject: z
		.string()
		.max(50, {
			message: 'Subject must be at most 50 characters long',
		})
		.optional(),
	message: z
		.string()
		.min(2, {
			message: 'Message must be at least 2 characters long',
		})
		.max(1000),
});
