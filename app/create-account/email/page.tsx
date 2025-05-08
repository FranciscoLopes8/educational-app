"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Logo } from "@/components/logo"

export default function EmailSignup() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "O nome é obrigatório"
    }

    if (!formData.email.trim()) {
      newErrors.email = "O email é obrigatório"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }

    if (!formData.password) {
      newErrors.password = "A palavra-passe é obrigatória"
    } else if (formData.password.length < 6) {
      newErrors.password = "A palavra-passe deve ter pelo menos 6 caracteres"
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "As palavras-passe não coincidem"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-primary/10 to-background">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="w-full mb-6">
          <Link href="/create-account" className="p-2 inline-block">
            <ArrowLeft className="h-5 w-5 text-gray-500" />
          </Link>
        </div>

        <div className="w-full text-center mb-6">
          <div className="flex justify-center mb-4">
            <Logo className="w-24 h-24" />
          </div>
          <h2 className="text-2xl font-medium text-primary mb-2">Cria a tua conta</h2>
          <p className="text-gray-500">Preenche os teus dados para começar</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
              Nome
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="O teu nome"
              className={`w-full p-2 border rounded-lg ${errors.name ? "border-red-500" : "border-gray-300"} focus:border-primary focus:ring-primary`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

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
              placeholder="teu@email.com"
              className={`w-full p-2 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"} focus:border-primary focus:ring-primary`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
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
              className={`w-full p-2 border rounded-lg ${errors.password ? "border-red-500" : "border-gray-300"} focus:border-primary focus:ring-primary`}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div>
            <Label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600 mb-1">
              Confirmar Palavra-passe
            </Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className={`w-full p-2 border rounded-lg ${errors.confirmPassword ? "border-red-500" : "border-gray-300"} focus:border-primary focus:ring-primary`}
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full text-white font-medium py-3 px-4 rounded-full mt-6"
            style={{ backgroundColor: "var(--primary)" }}
          >
            {loading ? "A criar conta..." : "Criar Conta"}
          </Button>
        </form>
      </div>
    </div>
  )
}

