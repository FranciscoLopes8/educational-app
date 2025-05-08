"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Logo } from "@/components/logo"

export default function Home() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      router.push("/login")
    }, 500)
  }

  const handleStart = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      router.push("/create-account")
    }, 500)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <div className="w-full max-w-md wf-box p-8">
        <div className="w-full flex justify-start mb-6">
          <div className="wf-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
          </div>
        </div>

        <div className="mb-10 text-center">
          <div className="flex justify-center mb-4">
            <Logo className="w-40 h-40" />
          </div>
          <p className="text-text-secondary">Aprende língua gestual de forma fácil</p>
        </div>

        <div className="w-full text-center mb-8">
          <h2 className="text-xl font-semibold text-text mb-2">Bem-vindo de volta</h2>
          <p className="text-text-secondary">Inicia sessão para continuares a tua jornada de aprendizagem</p>
        </div>

        <button onClick={handleLogin} disabled={loading} className="w-full wf-button mb-8 py-4">
          {loading ? "A carregar..." : "Entrar"}
        </button>

        <div className="w-full border-t border-border mb-8"></div>

        <div className="w-full text-center mb-6">
          <h2 className="text-xl font-semibold text-text mb-2">Novo por aqui?</h2>
          <p className="text-text-secondary">Começa a tua jornada de aprendizagem hoje</p>
        </div>

        <button
          onClick={handleStart}
          disabled={loading}
          className="w-full py-4 rounded-lg text-white font-medium transition-all"
          style={{ backgroundColor: "var(--primary)" }}
        >
          {loading ? "A carregar..." : "Começar agora"}
        </button>
      </div>
    </div>
  )
}

