import React from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface MigalhaDePaoProps {
  items: BreadcrumbItem[]
}

export const MigalhaDePao: React.FC<MigalhaDePaoProps> = ({ items }) => {
  return (
    <nav aria-label="Navegação em migalhas de pão" className="py-3 px-4 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto flex items-center gap-2 text-xs sm:text-sm text-slate-600 flex-wrap">
        <Link href="/" className="inline-flex items-center gap-1 text-slate-600 hover:text-brand transition-colors font-medium">
          <Home className="w-3.5 h-3.5" />
          <span>Início</span>
        </Link>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            {item.href ? (
              <Link href={item.href} className="text-slate-600 hover:text-brand transition-colors font-medium">
                {item.label}
              </Link>
            ) : (
              <span className="text-brand font-semibold truncate max-w-[200px] sm:max-w-none" aria-current="page">
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  )
}
