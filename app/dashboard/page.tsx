"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Logo } from "@/components/logo"
import Image from "next/image"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function Dashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("home")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    if (tab !== "home") {
      router.push(`/${tab}`)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <Logo className="w-32 h-32 mx-auto pulse" />
          <div className="mt-4 text-primary font-medium">A carregar...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="header-v7 header-home p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo className="w-10 h-10 mr-3" variant="white" />
            <h1 className="text-xl font-bold">EducaSinal</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="wf-icon bg-white/20">
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
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </div>
            <div className="wf-circle w-10 h-10">
              <span>JS</span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-bold mb-1">Olá, João!</h2>
          <p className="text-white/80">Vamos continuar a aprender hoje?</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 pb-24 -mt-6">
        {/* Progress Section */}
        <section className="wf-box p-6 mb-6">
          <div className="space-y-5">
            {[
              { name: "Vocabulário Básico", progress: 75 },
              { name: "Frases do Dia-a-dia", progress: 45 },
              { name: "Gramática Fundamental", progress: 20 },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-text">{item.name}</span>
                  <span className="text-text-secondary">{item.progress}%</span>
                </div>
                <div className="wf-progress">
                  <div
                    className="wf-progress-fill"
                    style={{
                      width: `${item.progress}%`,
                      background: `linear-gradient(90deg, var(--home-color) 0%, var(--home-light) 100%)`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Continue Learning */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-text">Continua a aprender</h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                title: "Saudações e Apresentações",
                description: "Aprende a apresentar-te em língua gestual",
                progress: 65,
                image: "/images/row-1-column-1.jpg",
              },
              {
                title: "Números e Quantidades",
                description: "Domina os números de 1 a 100",
                progress: 30,
                image: "/images/row-2-column-1.jpg",
              },
            ].map((course, index) => (
              <div key={index} className="wf-card overflow-hidden">
                <div className="flex">
                  <div className="w-1/3 relative" style={{ height: "120px" }}>
                    <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                  </div>
                  <div className="w-2/3 p-4">
                    <h4 className="font-semibold text-text mb-1">{course.title}</h4>
                    <p className="text-xs text-text-secondary mb-3">{course.description}</p>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-text-secondary">Progresso</span>
                        <span className="font-medium" style={{ color: "var(--home-color)" }}>
                          {course.progress}%
                        </span>
                      </div>
                      <div className="wf-progress">
                        <div
                          className="wf-progress-fill"
                          style={{
                            width: `${course.progress}%`,
                            background: `linear-gradient(90deg, var(--home-color) 0%, var(--home-light) 100%)`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Courses */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-text">Recomendados para ti</h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                title: "Expressões do Quotidiano",
                description: "Aprende expressões comuns do dia-a-dia",
                isNew: true,
                image: "/images/row-1-column-1(1).jpg",
              },
              {
                title: "Conversa Avançada",
                description: "Pratica diálogos completos em língua gestual",
                image: "/images/row-2-column-1(1).jpg",
              },
            ].map((course, index) => (
              <div key={index} className="wf-card overflow-hidden">
                <div className="flex">
                  <div className="w-1/3 relative" style={{ height: "120px" }}>
                    <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                  </div>
                  <div className="w-2/3 p-4">
                    <h4 className="font-semibold text-text mb-1">{course.title}</h4>
                    <p className="text-xs text-text-secondary mb-3">{course.description}</p>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="home" />
    </div>
  )
}