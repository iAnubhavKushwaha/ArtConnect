import { z } from "zod";

export const eventFormSchema = z.object({
    title: z.string().min(3, { message: 'Title must be at least 3 characters long' }),
    description: z.string().min(3, { message: 'Description must be at least 3 characters long' }),
    location: z.string().min(3, { message: 'Location must be at least 3 characters long' }).max(400, { message: 'Location must be at most 400 characters long' }),
    imageUrl: z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string().url()
    })