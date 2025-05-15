'use client'
import Link from 'next/link'

interface FooterProps {
  className?: string
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer
      role="contentinfo"
      aria-label="Rodapé"
      className={`bg-gray-900 text-white p-6 mt-12 ${className}`}
    >
      <nav aria-label="Links do rodapé">
        <ul className="flex flex-wrap gap-4 justify-center">
          <li><Link href="/">Início</Link></li>
          <li><Link href="/sobre">Sobre</Link></li>
          <li><Link href="/servicos">Serviços</Link></li>
          <li><Link href="/contactos">Contactos</Link></li>
          <li><Link href="/acessibilidade">Acessibilidade</Link></li>
        </ul>
      </nav>
      <p className="text-center text-sm mt-4">
        &copy; 2025 EducaSinal. Todos os direitos reservados.
      </p>
    </footer>
  )
}

