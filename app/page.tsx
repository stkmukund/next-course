import Image from "next/image";
import Link from "next/link";
import { authOptions } from "./api/auth/authOptions";
import { getServerSession } from "next-auth/next"

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Hello {session && <span>{session.user?.name}</span>}</h1>
      <Link href={'/users'}>
      Users
      </Link>
    </main>
  );
}
