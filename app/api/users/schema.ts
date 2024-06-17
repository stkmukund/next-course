import {z} from 'zod';

const schema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    age: z.number().min(18).max(100),
})

export default schema;