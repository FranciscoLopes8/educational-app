"use client"

import { useState } from "react"
import Link from "next/link"
import { Award } from "lucide-react"

export function DailyChallenge() {
  const [progress, setProgress] = useState(2)
  const total = 5

  return (
    <section className="bg-slate-600 rounded-lg p-4 mb-6 text-white shadow-sm">
      <div className="flex items-center mb-3">
        <Award className="h-6 w-6 mr-2" />
        <h3 className="font-medium">Desafio Diário</h3>
      </div>
      <p className="text-sm text-slate-200 mb-3">
        Completa 5 exercícios de vocabulário hoje e ganha 50 pontos de experiência!
      </p>
      <div className="flex justify-between items-center">
        <div className="text-xs text-slate-200">
          Progresso: {progress}/{total} completados
        </div>
        <Link href="/challenges/daily" className="bg-white text-slate-600 text-sm px-3 py-1 rounded-full">
          Continuar
        </Link>
      </div>
    </section>
  )
}

