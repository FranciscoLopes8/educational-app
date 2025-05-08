"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Logo } from "@/components/logo"
import Image from "next/image"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function ForumPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeTab, setActiveTab] = useState("recent")
  const [posts, setPosts] = useState<any[]>([])
  const [showNewPostModal, setShowNewPostModal] = useState(false)

  useEffect(() => {
    // Simulate loading posts
    const timer = setTimeout(() => {
      setPosts([
        {
          id: "1",
          title: "Como praticar língua gestual sozinho?",
          content:
            "Olá a todos! Estou a começar a aprender língua gestual e gostaria de saber como posso praticar sozinho em casa. Alguém tem dicas?",
          author: "Maria Silva",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
          likes: 24,
          comments: 8,
          isPopular: true,
          category: "iniciantes",
          time: "2h atrás",
        },
        {
          id: "2",
          title: "Diferenças entre LGP e ASL",
          content:
            "Estou a notar algumas diferenças entre a Língua Gestual Portuguesa e a American Sign Language. Alguém pode explicar as principais diferenças?",
          author: "João Pereira",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
          likes: 18,
          comments: 12,
          isPopular: true,
          category: "avançado",
          time: "5h atrás",
        },
        {
          id: "3",
          title: "Recursos para aprender vocabulário médico",
          content:
            "Trabalho na área da saúde e preciso aprender vocabulário médico em língua gestual. Alguém conhece bons recursos?",
          author: "Ana Costa",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
          likes: 15,
          comments: 6,
          isPopular: true,
          category: "especializado",
          time: "1d atrás",
        },
        {
          id: "4",
          title: "Dúvida sobre expressões faciais",
          content:
            "Estou com dificuldade em perceber a importância das expressões faciais na língua gestual. Podem ajudar-me?",
          author: "Pedro Santos",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
          likes: 9,
          comments: 4,
          isPopular: false,
          category: "iniciantes",
          time: "2d atrás",
        },
        {
          id: "5",
          title: "Grupos de prática em Lisboa",
          content:
            "Alguém conhece grupos de prática de língua gestual em Lisboa? Gostaria de praticar pessoalmente com outras pessoas.",
          author: "Carla Mendes",
          avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
          likes: 7,
          comments: 10,
          isPopular: false,
          category: "comunidade",
          time: "3d atrás",
        },
      ])
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
  }

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  const handlePostClick = (postId: string) => {
    router.push(`/forum/${postId}`)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <Logo className="w-32 h-32 mx-auto pulse" />
          <div className="mt-4 font-medium" style={{ color: "var(--forum-color)" }}>
            A carregar discussões...
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pb-24 bg-background">
      {/* Header */}
      <header className="header-v7 header-forum p-6">
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
            <h1 className="text-xl font-bold">Fórum</h1>
          </div>
          <Logo className="w-10 h-10" variant="white" />
        </div>
      </header>

      {/* Search Bar */}
      <div className="px-6 mt-4 mb-6">
        <div className="bg-white rounded-xl shadow-md p-3 flex items-center">
          <Search className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
          <Input
            type="text"
            placeholder="Pesquisar no fórum..."
            className="border-none bg-transparent flex-1 h-8 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-400 text-sm"
          />
        </div>
      </div>


      {/* Tabs */}
      <div className="w-full px-6">

        <div className="space-y-4">
          {activeTab !== "my-posts" ? (
            posts
              .filter((p) => activeCategory === "all" || p.category === activeCategory)
              .filter((p) => activeTab !== "popular" || p.isPopular)
              .map((post) => (
                <div key={post.id} className="wf-card p-4 cursor-pointer" onClick={() => handlePostClick(post.id)}>
                  <div className="flex items-start mb-3">
                    <div className="mr-3 relative w-10 h-10 overflow-hidden rounded-full">
                      <Image
                        src={post.avatar || "/placeholder.svg"}
                        alt={post.author}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text">{post.author}</h3>
                      <div className="text-xs text-text-secondary">{post.time}</div>
                    </div>
                  </div>
                  <h2 className="font-semibold text-text mb-2">{post.title}</h2>
                  <p className="text-sm text-text-secondary mb-4 line-clamp-2">{post.content}</p>
                  <div className="flex items-center">
                    <div className="flex items-center mr-4 text-text-secondary">
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
                        className="mr-1"
                      >
                        <path d="M7 10v12" />
                        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                      </svg>
                      <span className="text-xs">{post.likes}</span>
                    </div>
                    <div className="flex items-center mr-4 text-text-secondary">
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
                        className="mr-1"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      <span className="text-xs">{post.comments}</span>
                    </div>
                    <div className="wf-badge text-xs" style={{ backgroundColor: "var(--forum-color)" }}>
                      {post.category}
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <div className="text-center py-12">
              <div className="wf-circle w-16 h-16 mx-auto mb-4" style={{ backgroundColor: "var(--forum-color)" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">Nenhuma discussão criada</h3>
              <p className="text-text-secondary mb-6">Ainda não criaste nenhuma discussão no fórum</p>
              <button
                className="py-2 px-6 rounded-full text-white font-medium shadow-md"
                style={{
                  backgroundColor: "var(--forum-color)",
                  boxShadow: "0 2px 8px rgba(126, 34, 206, 0.25)",
                }}
                onClick={() => setShowNewPostModal(true)}
              >
                Criar nova discussão
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        className="fixed right-6 bottom-24 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        style={{
          backgroundColor: "var(--forum-color)",
          boxShadow: "0 4px 12px rgba(126, 34, 206, 0.3)",
        }}
        onClick={() => setShowNewPostModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      </button>

      {/* New Post Modal */}
      {showNewPostModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="wf-box w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-text">Nova Discussão</h2>
              <button
                className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100"
                onClick={() => setShowNewPostModal(false)}
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text mb-1">Título</label>
                <Input
                  type="text"
                  className="w-full border border-gray-200 rounded-lg"
                  placeholder="Escreve o título da tua discussão"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text mb-1">Categoria</label>
                <select className="w-full h-10 px-3 py-2 border border-gray-200 rounded-lg bg-white">
                  <option value="">Seleciona uma categoria</option>
                  <option value="iniciantes">Iniciantes</option>
                  <option value="avançado">Avançado</option>
                  <option value="especializado">Especializado</option>
                  <option value="comunidade">Comunidade</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text mb-1">Conteúdo</label>
                <textarea
                  className="w-full h-32 px-3 py-2 border border-gray-200 rounded-lg resize-none"
                  placeholder="Descreve a tua dúvida ou discussão..."
                ></textarea>
              </div>

              <div className="flex justify-end space-x-3 pt-2">
                <button
                  className="py-2 px-4 rounded-lg border border-gray-200 text-gray-600 font-medium"
                  onClick={() => setShowNewPostModal(false)}
                >
                  Cancelar
                </button>
                <button
                  className="py-2 px-4 rounded-lg text-white font-medium"
                  style={{ backgroundColor: "var(--forum-color)" }}
                  onClick={() => setShowNewPostModal(false)}
                >
                  Publicar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="forum" />
    </div>
  )
}

