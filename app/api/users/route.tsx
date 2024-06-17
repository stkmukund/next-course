import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest){
    return NextResponse.json({message : 'Hello from the server'});
}

export async function POST(request: NextRequest){
    const body = await request.json();
    const validation  = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors)
    return NextResponse.json({
        name: body.name,
        age: body.age,
        gender: body.gender,
        id: body.id
    }, {status : 201})
}