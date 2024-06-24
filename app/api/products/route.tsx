import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";



export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors)

    // const user = await prisma.user.findUnique({
    //     where : {
    //         email : body.email
    //     }
    // })

    // if(user)
    //     return NextResponse.json({
    //         error : `User ${body.email} already exists`
    //     });

    const newProduct = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price
        }
    })

    return NextResponse.json(newProduct, { status: 201 })
}