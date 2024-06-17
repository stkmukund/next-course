// import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest,
    {params}: {params : {id : number}}){
    if (params.id > 10)
        return NextResponse.json({
            error: 'User not found'
        })
    return NextResponse.json({
        name: 'John',
        age: 30,
        gender:'male',
        id: 1
    })
}

export async function POST(request: NextRequest){
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
    }, {status : 201})
}