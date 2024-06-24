import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest){
    const users = await prisma.user.findMany();
    return NextResponse.json({
        message : 'Hello from the server',
        user : users
    });
}

export async function POST(request: NextRequest){
    const body = await request.json();
    const validation  = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors)

    const user = await prisma.user.findUnique({
        where : {
            email : body.email
        }
    })

    if(user)
        return NextResponse.json({
            error : `User ${body.email} already exists`
        });

    const newUser = await prisma.user.create({
        data : {
            name : body.name,
            email : body.email
        }
    })

    return NextResponse.json(newUser, {status : 201})
}

export async function DELETE(request: NextRequest){
    const body = await request.json();
    const validation  = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors)

    const user = await prisma.user.findUnique({
        where : {
            email : body.email
        }
    })

    if(!user)
        return NextResponse.json({
            error : `User ${body.email} not exists`
        });

    // const newUser = await prisma.user.delete({
    //     where : {
    //         email : user.email
    //     }
    // })

    return NextResponse.json({newUser : "not in service"})
}