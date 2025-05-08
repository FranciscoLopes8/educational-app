"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

interface VideoPlayerProps {
  thumbnailUrl: string
  videoUrl: string
  title: string
  onPlay?: () => void
}

export function VideoPlayer({ thumbnailUrl, videoUrl, title, onPlay }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
    if (onPlay) onPlay()
  }

  return (
    <div className="rounded-lg overflow-hidden shadow-sm">
      <div className="relative">
        <Image
          src={thumbnailUrl || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="w-full object-cover aspect-video"
        />
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-slate-600 bg-opacity-80 text-white rounded-full p-3" onClick={handlePlay}>
              <Play className="h-6 w-6 fill-white" />
            </button>
          </div>
        )}
        {isPlaying && (
          <div className="absolute inset-0 bg-black">
            <video className="w-full h-full" controls autoPlay poster={thumbnailUrl}>
              <source src={videoUrl} type="video/mp4" />O teu navegador não suporta vídeos.
            </video>
          </div>
        )}
      </div>
      <div className="bg-white p-3">
        <h2 className="font-medium text-gray-700">{title}</h2>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-gray-500">10:25 minutos</span>
          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">Com legendas</span>
        </div>
      </div>
    </div>
  )
}

