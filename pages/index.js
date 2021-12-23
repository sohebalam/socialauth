import { signIn, signOut, useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  return (
    <div>
      {!session && <button onClick={signIn}>Sign In</button>}

      <span>{session && session.user.name}</span>

      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}
