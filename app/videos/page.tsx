"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Logo } from "@/components/logo"
import Image from "next/image"
import { BottomNavigation } from "@/components/bottom-navigation"
import { Search, Eye } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function VideosPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeTab, setActiveTab] = useState("popular")
  const [videos, setVideos] = useState<any[]>([])
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideos([
        {
          id: "1",
          title: "Introdução à Língua Gestual",
          duration: "5:24",
          views: 1245,
          isNew: true,
          thumbnail: "/images/thumbnail.png",
        },
        {
          id: "2",
          title: "Alfabeto em Língua Gestual",
          duration: "8:12",
          views: 987,
          isNew: true,
          thumbnail: "/images/thumbnail.png",
        },
        {
          id: "3",
          title: "Saudações Básicas",
          duration: "4:45",
          views: 756,
          thumbnail: "/images/thumbnail.png",
        },
        {
          id: "4",
          title: "Números de 1 a 20",
          duration: "6:30",
          views: 632,
          thumbnail: "/images/thumbnail.png",
        },
        {
          id: "5",
          title: "Expressões Faciais Importantes",
          duration: "7:15",
          views: 543,
          thumbnail: "/images/thumbnail.png",
        },
        {
          id: "6",
          title: "Perguntas e Respostas",
          duration: "9:18",
          views: 421,
         thumbnail: "/images/thumbnail.png",
        },
      ])
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
  }

  const handleVideoClick = (videoId: string) => {
    setPlayingVideoId(videoId)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <Logo className="w-32 h-32 mx-auto pulse" />
          <div className="mt-4 font-medium" style={{ color: "var(--videos-color)" }}>
            A carregar vídeos...
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pb-24 bg-background">
      {/* Header */}
      <header
        className="header-v7 p-6"
        style={{ background: "linear-gradient(135deg, var(--videos-color) 0%, var(--videos-light) 100%)" }}
      >
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
            <h1 className="text-xl font-bold">Vídeos</h1>
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
            placeholder="Pesquisar vídeos..."
            className="border-none bg-transparent flex-1 h-8 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-400 text-sm"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 mb-6">
        <div className="flex overflow-x-auto pb-2 space-x-3 hide-scrollbar">
          {[
            { id: "all", name: "Todos" },
            { id: "basics", name: "Básicos" },
            { id: "intermediate", name: "Intermédio" },
            { id: "advanced", name: "Avançado" },
          ].map((category) => (
            <button
              key={category.id}
              className={`py-2 px-4 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                activeCategory === category.id
                  ? "bg-videos-color text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
              style={{
                backgroundColor: activeCategory === category.id ? "var(--videos-color)" : "white",
                boxShadow: activeCategory === category.id ? "0 2px 8px rgba(185, 28, 28, 0.25)" : "none",
              }}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

{/* Video Grid */}
<div className="w-full px-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {videos
      .filter((v) => activeTab !== "recent" || v.isNew)
      .map((video) => (
        <div key={video.id} className="wf-card cursor-pointer" onClick={() => handleVideoClick(video.id)}>
          <div className="relative">
            {playingVideoId === video.id ? (
              <video
                src={`/videos/video1.mp4`} // fixado para que todos usem o mesmo vídeo
                controls
                autoPlay
                className="w-full aspect-video rounded-lg object-cover"
              />
            ) : (
              <>
                <Image
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  width={240}
                  height={135}
                  className="w-full object-cover aspect-video rounded-lg"
                />
                <div className="absolute bottom-3 right-3 wf-badge bg-black/70 text-white">
                  {video.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="wf-circle w-14 h-14" style={{ backgroundColor: "var(--videos-color)" }}>
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
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-text mb-2">{video.title}</h3>
            <div className="flex items-center text-text-secondary text-sm">
              <Eye className="mr-1 w-4 h-4" />
              <span>{video.views} visualizações</span>
            </div>
          </div>
        </div>
      ))}
  </div>
</div>


      {/* Bottom Navigation */}
      <BottomNavigation activeTab="videos" />
    </div>
  )
}
