"use client"
import { useRouter } from "next/navigation"

interface BottomNavigationProps {
  activeTab: string
}

export function BottomNavigation({ activeTab }: BottomNavigationProps) {
  const router = useRouter()

  const handleTabChange = (tab: string) => {
    router.push(`/${tab === "home" ? "dashboard" : tab}`)
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 nav-v7 flex justify-around">
      {[
        { id: "home", label: "Início", icon: "home", color: "var(--home-color)" },
        { id: "videos", label: "Vídeos", icon: "video", color: "var(--videos-color)" },
        { id: "forum", label: "Fórum", icon: "message-square", color: "var(--forum-color)" },
        { id: "profile", label: "Perfil", icon: "user", color: "var(--profile-color)" },
      ].map((tab) => (
        <button
          key={tab.id}
          className={`nav-item ${tab.id} ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => handleTabChange(tab.id)}
        >
          <div className="nav-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke={activeTab === tab.id ? tab.color : "currentColor"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {tab.icon === "home" && (
                <>
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </>
              )}
              {tab.icon === "book" && (
                <>
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </>
              )}
              {tab.icon === "video" && (
                <>
                  <path d="m22 8-6 4 6 4V8Z" />
                  <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
                </>
              )}
              {tab.icon === "message-square" && (
                <>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </>
              )}
              {tab.icon === "user" && (
                <>
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </>
              )}
            </svg>
          </div>
          <span className="nav-text">{tab.label}</span>
        </button>
      ))}
    </nav>
  )
}

