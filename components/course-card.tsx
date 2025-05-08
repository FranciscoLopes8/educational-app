import Image from "next/image"
import Link from "next/link"
import { ProgressBar } from "@/components/progress-bar"

interface CourseCardProps {
  title: string
  description: string
  progress: number
  image: string
  href: string
  isNew?: boolean
}

export function CourseCard({ title, description, progress, image, href, isNew = false }: CourseCardProps) {
  return (
    <Link href={href} className="block">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="flex">
          <div className="w-1/3 relative">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={120}
              height={80}
              className="object-cover h-full"
            />
            {isNew && (
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">Novo</span>
            )}
          </div>
          <div className="w-2/3 p-3">
            <h3 className="font-medium text-gray-700 mb-1">{title}</h3>
            <p className="text-xs text-gray-500 mb-2">{description}</p>
            {progress > 0 ? (
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-600">Progresso</span>
                  <span className="text-gray-600">{progress}%</span>
                </div>
                <ProgressBar value={progress} />
              </div>
            ) : (
              <span className="text-xs text-slate-600">Clique para começar</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

