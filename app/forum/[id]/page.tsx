"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Logo } from "@/components/logo"
import Image from "next/image"

const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop"
]

export default function PostPage() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [comments, setComments] = useState<string[]>([])

    useEffect(() => {
        const commentsRaw = searchParams.get("comments") || "[]"
        try {
            setComments(JSON.parse(commentsRaw))
        } catch {
            setComments([])
        }
    }, [searchParams])

    return (
        <div className="min-h-screen bg-background p-6">
            <div className="flex items-center justify-between mb-6">
                <button
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 mr-3"
                    onClick={() => router.push("/forum")}
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
                <h1 className="text-xl font-bold">Comentários</h1>
                <Logo className="w-10 h-10" variant="white" />
            </div>

            <div className="space-y-4">
                {comments.length > 0 ? (
                    comments.map((comment, idx) => (
                        <div key={idx} className="wf-card p-4 flex items-start space-x-3">
                            <Image
                                src={avatars[idx % avatars.length]}
                                alt="avatar"
                                width={40}
                                height={40}
                                className="rounded-full object-cover"
                            />
                            <div>
                                <div className="font-medium text-text mb-1">Utilizador {idx + 1}</div>
                                <p className="text-sm text-text-secondary">{comment}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-text-secondary text-center">Nenhum comentário encontrado.</div>
                )}
            </div>
        </div>
    )
}
