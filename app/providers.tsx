"use client"

import type React from "react"

import { SessionProvider } from "next-auth/react"
import type { Session } from "next-auth"

interface ProvidersProps {
  children: React.ReactNode
  session: Session | null
}

export function Providers({ children, session }: ProvidersProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>
}
