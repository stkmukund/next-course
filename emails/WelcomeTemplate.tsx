import React from 'react'
import { Html, Body, Container, Text, Link, Preview, Tailwind } from '@react-email/components'

export default function WelcomeTemplate({ name }: { name: string }) {
    return (
        <Html>
            <Preview>Welcome Abroad!</Preview>
            <Tailwind>
                <Body className=''>
                    <Container>
                        <Text >Welcome {name}</Text>
                        <Link href='https://hire-mukundkumar.netlify.app/' >https://hire-mukundkumar.netlify.app/</Link>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}
