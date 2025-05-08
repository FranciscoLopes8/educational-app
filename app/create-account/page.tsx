"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Logo } from "@/components/logo"

export default function CreateAccount() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleSignUp = (provider: string) => {
    setSelectedOption(provider)
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      if (provider === "email") {
        router.push("/create-account/email")
      } else {
        // Simulate OAuth login
        router.push("/dashboard")
      }
    }, 1000)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-primary/10 to-background">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="w-full mb-6">
          <Link href="/" className="p-2 inline-block">
            <ArrowLeft className="h-5 w-5 text-gray-500" />
          </Link>
        </div>

        <div className="w-full text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo className="w-24 h-24" />
          </div>
          <h2 className="text-2xl font-medium text-primary mb-4">Criar uma conta</h2>
          <p className="text-gray-500">
            Que língua gostarias de começar a aprender?
            <br />
            Podes alterar a qualquer momento!
          </p>
        </div>

        <div className="space-y-4 mb-auto">
          <button
            onClick={() => handleSignUp("facebook")}
            disabled={loading}
            className={`w-full bg-slate-100 hover:bg-slate-200 py-3 px-4 rounded-lg flex items-center ${
              selectedOption === "facebook" ? "border-2 border-primary" : ""
            }`}
          >
            <div className="w-8 h-8 bg-slate-200 rounded-full mr-4 flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">f</span>
            </div>
            <span className="text-gray-600 font-medium">
              {loading && selectedOption === "facebook" ? "A conectar..." : "Facebook"}
            </span>
          </button>

          <button
            onClick={() => handleSignUp("google")}
            disabled={loading}
            className={`w-full bg-slate-100 hover:bg-slate-200 py-3 px-4 rounded-lg flex items-center ${
              selectedOption === "google" ? "border-2 border-primary" : ""
            }`}
          >
            <div className="w-8 h-8 bg-slate-200 rounded-full mr-4 flex items-center justify-center">
              <span className="text-red-500 font-bold text-lg">G</span>
            </div>
            <span className="text-gray-600 font-medium">
              {loading && selectedOption === "google" ? "A conectar..." : "Google"}
            </span>
          </button>

          <button
            onClick={() => handleSignUp("email")}
            disabled={loading}
            className={`w-full bg-slate-100 hover:bg-slate-200 py-3 px-4 rounded-lg flex items-center ${
              selectedOption === "email" ? "border-2 border-primary" : ""
            }`}
          >
            <div className="w-8 h-8 bg-slate-200 rounded-full mr-4 flex items-center justify-center">
              <span className="text-gray-600 font-bold text-lg">@</span>
            </div>
            <span className="text-gray-600 font-medium">
              {loading && selectedOption === "email" ? "A continuar..." : "Email"}
            </span>
          </button>
        </div>

        <div className="mt-8 text-center text-xs text-gray-500">
          Ao utilizares, confirmas que leste e concordas com os nossos{" "}
          <Link href="#" className="text-primary">
            termos de serviço
          </Link>{" "}
          e{" "}
          <Link href="#" className="text-primary">
            política de privacidade
          </Link>
        </div>
      </div>
    </div>
  )
}

