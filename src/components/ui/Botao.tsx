import React from 'react'
import Link from 'next/link'

interface BotaoProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'anniversary' | 'outline' | 'white'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
  children: React.ReactNode
  fullWidth?: boolean
  className?: string
}

export const Botao: React.FC<BotaoProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  external,
  children,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'

  const variants = {
    primary: 'bg-[#1E3A5F] hover:bg-[#152A47] text-white shadow-sm hover:shadow active:scale-[0.99]',
    secondary: 'bg-[#5C7A99] hover:bg-[#1E3A5F] text-white shadow-sm',
    accent: 'bg-[#D97706] hover:bg-[#B45309] text-white shadow-md hover:shadow-lg font-semibold active:scale-[0.99]', // Destaque escasso
    anniversary: 'bg-[#B8860B] hover:bg-[#966d08] text-white shadow-md hover:shadow-lg font-semibold',
    outline: 'border-2 border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white',
    white: 'bg-white hover:bg-slate-100 text-[#1E3A5F] shadow-sm font-semibold',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-xs rounded-sm gap-1.5',
    md: 'px-5 py-2.5 text-sm rounded-md gap-2',
    lg: 'px-7 py-3.5 text-base rounded-md gap-2.5 font-semibold',
  }

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  )
}
