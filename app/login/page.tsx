"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Logo } from "@/components/logo"

export default function Login() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (error) setError("")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.email || !formData.password) {
      setError("Por favor, preenche todos os campos")
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      router.push("/dashboard")
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
          <h2 className="text-2xl font-medium text-primary mb-4">Iniciar Sessão</h2>
          <p className="text-gray-500">Bem-vindo de volta! Introduz as tuas credenciais para continuar</p>
        </div>

        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full p-2 border border-gray-300 rounded-lg focus:border-primary focus:ring-primary"
            />
          </div>

          <div>
            <Label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
              Palavra-passe
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full p-2 border border-gray-300 rounded-lg focus:border-primary focus:ring-primary"
            />
          </div>

          <div className="text-right">
            <Link href="/forgot-password" className="text-sm text-primary">
              Esqueceste a palavra-passe?
            </Link>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-4 rounded-full"
            style={{ backgroundColor: "var(--primary)", color: "white" }}
          >
            {loading ? "A iniciar sessão..." : "Iniciar Sessão"}
          </Button>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            Não tens uma conta?{" "}
            <Link href="/create-account" className="text-primary font-medium">
              Regista-te
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

