import WelcomeTemplate from '@/emails/WelcomeTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST() {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const email = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'mukundtesting2@gmail.com',
        subject: 'Hello World',
        react: <WelcomeTemplate name={'Mukund'} />
    });

    return NextResponse.json({
        message: 'Email sent',
        email
    })
}


