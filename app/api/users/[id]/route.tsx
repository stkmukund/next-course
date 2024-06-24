// import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { parse } from "path";

export async function GET(request: NextRequest,
    { params }: { params: { id: string } }) {
    const users = await prisma.user.findUnique({
        where: {
            id: params.id
        }
     })
    if (!users)
        return NextResponse.json({
            error: 'User not found'
        })
    return NextResponse.json(users)
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    if (!body.name)
        return NextResponse.json({
            error: 'Name to bhej mc'
        })
    return NextResponse.json({
        name: body.name,
        age: body.age,
        gender: body.gender,
        id: body.id
    }, { status: 201 })
}