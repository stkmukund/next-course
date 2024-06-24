import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";
import bcrypt  from "bcrypt";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export async function POST(request: NextRequest) {
    let body;
  try {
    body = await request.json();
  } catch (error) {
    return NextResponse.json({
        message: "Provide Email and Password",
        error,
    })
  }
  
  const validation = await schema.safeParse(body);
  if (!validation.success) return NextResponse.json(validation.error.errors);

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (user)
    return NextResponse.json({
      error: `User ${body.email} already exists`,
    });

  const hashedPassword = await bcrypt.hash(body.password, 10);
  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      hashedPassword,
    },
  });
  return NextResponse.json({
    email: newUser.email,
  });
}
