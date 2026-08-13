import React from 'react'

interface EtiquetaProps {
  children: React.ReactNode
  variant?: 'brand' | 'accent' | 'anniversary' | 'neutral' | 'success'
  size?: 'sm' | 'md'
  className?: string
}

export const Etiqueta: React.FC<EtiquetaProps> = ({
  children,
  variant = 'brand',
  size = 'md',
  className = '',
}) => {
  const base = 'inline-flex items-center font-semibold rounded-full tracking-wide'
  const variants = {
    brand: 'bg-[#1E3A5F]/10 text-[#1E3A5F] border border-[#1E3A5F]/20',
    accent: 'bg-amber-100 text-amber-800 border border-amber-300',
    anniversary: 'bg-amber-500/15 text-[#B8860B] border border-[#B8860B]/30',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200',
    success: 'bg-emerald-100 text-emerald-800 border border-emerald-300',
  }

  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs sm:text-sm',
  }

  return <span className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>{children}</span>
}
