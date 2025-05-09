"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Logo } from "@/components/logo"
import Image from "next/image"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function ProfilePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState<any>(null)
  const [editMode, setEditMode] = useState(false)
  const [activeTab, setActiveTab] = useState("achievements")

  useEffect(() => {
    // Simulate loading profile data
    const timer = setTimeout(() => {
      setProfile({
        name: "João Silva",
        email: "joao.silva@exemplo.com",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop",
        level: 8,
        xp: 750,
        nextLevelXp: 1000,
        streak: 12,
        completedLessons: 24,
        totalLessons: 50,
        achievements: [
          {
            id: "1",
            title: "Primeiro Passo",
            description: "Completa a tua primeira lição",
            icon: "/images/sign-language-hello.png",
            earned: true,
            date: "12/03/2023",
          },
          {
            id: "2",
            title: "Estudante Dedicado",
            description: "Completa 10 lições",
            icon: "/images/sign-language-hello.png",
            earned: true,
            date: "25/03/2023",
          },
          {
            id: "3",
            title: "Maratonista",
            description: "Estuda durante 7 dias consecutivos",
            icon: "/images/sign-language-hello.png",
            earned: true,
            date: "02/04/2023",
          },
          {
            id: "4",
            title: "Vocabulário Avançado",
            description: "Aprende 100 palavras",
            icon: "/images/sign-language-hello.png",
            earned: true,
            date: "15/04/2023",
          },
          {
            id: "5",
            title: "Mestre da Conversa",
            description: "Completa todos os exercícios de diálogo",
            icon: "/images/sign-language-hello.png",
            earned: false,
            progress: 3,
            maxProgress: 5,
          },
        ],
        preferences: {
          notifications: true,
          darkMode: false,
          soundEffects: true,
        },
      })
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  const handleLogout = () => {
    const confirmLogout = window.confirm("Tens a certeza que desejas sair?")
    if (confirmLogout) {
      router.push("/")
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <Logo className="w-32 h-32 mx-auto pulse" />
          <div className="mt-4 font-medium" style={{ color: "var(--profile-color)" }}>
            A carregar perfil...
          </div>
        </div>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-text mb-4">Perfil não encontrado</h3>
          <p className="text-text-secondary mb-6">Não foi possível carregar as informações do teu perfil</p>
          <button
            className="wf-button mx-auto"
            style={{ backgroundColor: "var(--profile-color)" }}
            onClick={() => router.push("/dashboard")}
          >
            Voltar para o Início
          </button>
        </div>
      </div>
    )
  }

  return (
<div className="min-h-screen pb-24 bg-background">
  {/* Header */}
  <header className="header-v7 header-profile p-6">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <button
          className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 mr-3"
          onClick={() => router.push("/dashboard")}
        >
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
        </button>
        <h1 className="text-xl font-bold">Perfil</h1>
      </div>
      <Logo className="w-10 h-10" variant="white" />
    </div>
  </header>



      {/* Profile Header */}
      <div className="px-6">
        <div className="wf-box p-6 bg-gradient-to-r from-profile-color/10 to-profile-light/5">
          <div className="flex items-center">
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-2 border-white overflow-hidden">
                <Image
                  src={profile.avatar || "/placeholder.svg"}
                  alt="Avatar do utilizador"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              {editMode && (
                <div
                  className="absolute bottom-0 right-0 wf-circle p-1"
                  style={{ backgroundColor: "var(--profile-color)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                  </svg>
                </div>
              )}
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-bold text-text">{profile.name}</h2>
              <p className="text-sm text-text-secondary">{profile.email}</p>
              <div className="flex items-center mt-2">
                <div className="wf-badge text-xs" style={{ backgroundColor: "var(--profile-color)" }}>
                  Nível {profile.level}
                </div>
              </div>
            </div>
          </div>

          {/* XP Progress */}
          <div className="mt-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-text-secondary">
                XP: {profile.xp}/{profile.nextLevelXp}
              </span>
              <span className="font-medium" style={{ color: "var(--profile-color)" }}>
                {Math.round((profile.xp / profile.nextLevelXp) * 100)}%
              </span>
            </div>
            <div className="wf-progress">
              <div
                className="wf-progress-fill"
                style={{
                  width: `${Math.round((profile.xp / profile.nextLevelXp) * 100)}%`,
                  background: `linear-gradient(90deg, var(--profile-color) 0%, var(--profile-light) 100%)`,
                }}
              ></div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-between mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: "var(--profile-color)" }}>
                {profile.streak}
              </div>
              <div className="text-xs text-text-secondary">Dias seguidos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: "var(--profile-color)" }}>
                {profile.completedLessons}
              </div>
              <div className="text-xs text-text-secondary">Lições completas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: "var(--profile-color)" }}>
                {Math.round((profile.completedLessons / profile.totalLessons) * 100)}%
              </div>
              <div className="text-xs text-text-secondary">Progresso total</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="w-full px-6 mt-6">
        <div className="flex border-b border-border">
          {[
            { id: "achievements", name: "Conquistas" },
            { id: "settings", name: "Definições" },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`wf-tab ${activeTab === tab.id ? "active" : ""}`}
              style={{ color: activeTab === tab.id ? "var(--profile-color)" : "" }}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {activeTab === "achievements" ? (
            <div className="space-y-6">
              <div className="wf-box p-6">
                <h3 className="text-lg font-semibold mb-6" style={{ color: "var(--profile-color)" }}>
                  Conquistas Desbloqueadas
                </h3>
                <div className="space-y-6">
                  {profile.achievements.map((achievement: any) => (
                    <div key={achievement.id} className="flex items-start">
                      <div className="mr-4 w-12 h-12 overflow-hidden rounded-xl">
                        <Image
                          src={achievement.icon || "/placeholder.svg"}
                          alt={`Conquista ${achievement.id}`}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-semibold text-text">{achievement.title}</h4>
                          <div className={`wf-badge ${achievement.earned ? "success" : "warning"}`}>
                            {achievement.earned ? "Conquistado" : "Em progresso"}
                          </div>
                        </div>
                        <p className="text-sm text-text-secondary mb-1">{achievement.description}</p>
                        {achievement.earned ? (
                          <p className="text-xs" style={{ color: "var(--profile-color)" }}>
                            Conquistado em {achievement.date}
                          </p>
                        ) : achievement.progress !== undefined ? (
                          <div className="mt-2">
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-text-secondary">
                                {achievement.progress}/{achievement.maxProgress} completados
                              </span>
                              <span style={{ color: "var(--profile-color)" }}>
                                {Math.round((achievement.progress / achievement.maxProgress) * 100)}%
                              </span>
                            </div>
                            <div className="wf-progress">
                              <div
                                className="wf-progress-fill"
                                style={{
                                  width: `${Math.round((achievement.progress / achievement.maxProgress) * 100)}%`,
                                  background: `linear-gradient(90deg, var(--profile-color) 0%, var(--profile-light) 100%)`,
                                }}
                              ></div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="wf-box p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold" style={{ color: "var(--profile-color)" }}>
                    Atividade Recente
                  </h3>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: "📚", text: "Completaste a lição 'Saudações Básicas'", time: "Hoje" },
                    { icon: "🔥", text: "Mantiveste uma sequência de 12 dias", time: "Ontem" },
                    { icon: "🏆", text: "Desbloqueaste a conquista 'Vocabulário Avançado'", time: "Há 3 dias" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="wf-circle w-10 h-10 mr-4 bg-profile-color/10 text-profile-color">
                        <span>{item.icon}</span>
                      </div>
                      <div>
                        <p className="text-text font-medium">{item.text}</p>
                        <p className="text-xs text-text-secondary">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="wf-box p-6">
                <h3 className="text-lg font-semibold mb-6" style={{ color: "var(--profile-color)" }}>
                  Informações Pessoais
                </h3>

                {editMode ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-text mb-1">Nome</label>
                      <input type="text" className="wf-input w-full" defaultValue={profile.name} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1">Email</label>
                      <input type="email" className="wf-input w-full" defaultValue={profile.email} />
                    </div>
                    <div className="pt-2">
                      <button
                        className="wf-button w-full"
                        style={{ backgroundColor: "var(--profile-color)" }}
                        onClick={() => setEditMode(false)}
                      >
                        Guardar Alterações
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <div>
                        <p className="text-xs text-text-secondary">Nome</p>
                        <p className="font-medium text-text">{profile.name}</p>
                      </div>
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
                        className="text-text-secondary"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <div>
                        <p className="text-xs text-text-secondary">Email</p>
                        <p className="font-medium text-text">{profile.email}</p>
                      </div>
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
                        className="text-text-secondary"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <div>
                        <p className="text-xs text-text-secondary">Membro desde</p>
                        <p className="font-medium text-text">Março 2023</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="wf-box p-6">
                <h3 className="text-lg font-semibold mb-6" style={{ color: "var(--profile-color)" }}>
                  Preferências
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      id: "notifications",
                      icon: "bell",
                      title: "Notificações",
                      description: "Recebe lembretes e atualizações",
                      enabled: profile.preferences.notifications,
                    },
                    {
                      id: "darkmode",
                      icon: "moon",
                      title: "Modo Escuro",
                      description: "Alterar para tema escuro",
                      enabled: profile.preferences.darkMode,
                    },
                    {
                      id: "sound",
                      icon: "volume-2",
                      title: "Efeitos Sonoros",
                      description: "Sons durante exercícios",
                      enabled: profile.preferences.soundEffects,
                    },
                  ].map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="wf-circle w-10 h-10 mr-4 bg-profile-color/10 text-profile-color">
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
                            {item.icon === "bell" && (
                              <>
                                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                              </>
                            )}
                            {item.icon === "moon" && (
                              <>
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                              </>
                            )}
                            {item.icon === "volume-2" && (
                              <>
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                              </>
                            )}
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-text">{item.title}</p>
                          <p className="text-xs text-text-secondary">{item.description}</p>
                        </div>
                      </div>
                      <div
                        className={`w-12 h-6 rounded-full relative transition-colors ${item.enabled ? "bg-profile-color" : "bg-text-tertiary"}`}
                      >
                        <div
                          className={`absolute w-5 h-5 rounded-full bg-white top-0.5 transition-all ${item.enabled ? "right-0.5" : "left-0.5"}`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="wf-box p-6">
                <h3 className="text-lg font-semibold mb-6" style={{ color: "var(--profile-color)" }}>
                  Suporte
                </h3>
                <div className="space-y-3">
                  {[
                    { id: "help", title: "Centro de Ajuda" },
                    { id: "feedback", title: "Enviar Feedback" },
                    { id: "terms", title: "Termos de Serviço" },
                    { id: "privacy", title: "Política de Privacidade" },
                  ].map((item) => (
                    <div key={item.id} className="flex justify-between items-center py-3 border-b border-border">
                      <p className="font-medium text-text">{item.title}</p>
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
                        className="text-text-secondary"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>

              <button className="wf-button w-full bg-accent mb-8" onClick={handleLogout}>
                Sair
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="profile" />
    </div>
  )
}

