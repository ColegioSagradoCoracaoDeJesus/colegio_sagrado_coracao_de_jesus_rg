import React from 'react'
import { Heart, Award, Globe, Cpu, Users, ShieldCheck, BookOpen, Dumbbell, Sparkles } from 'lucide-react'
import { Diferencial } from '@/lib/sanity/queries'

interface CartaoDiferencialProps {
  diferencial: Diferencial
}

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-7 h-7 text-amber-600" />,
  Award: <Award className="w-7 h-7 text-amber-600" />,
  Globe: <Globe className="w-7 h-7 text-amber-600" />,
  Cpu: <Cpu className="w-7 h-7 text-amber-600" />,
  Users: <Users className="w-7 h-7 text-amber-600" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7 text-amber-600" />,
  BookOpen: <BookOpen className="w-7 h-7 text-amber-600" />,
  Dumbbell: <Dumbbell className="w-7 h-7 text-amber-600" />,
}

export const CartaoDiferencial: React.FC<CartaoDiferencialProps> = ({ diferencial }) => {
  const icon = iconMap[diferencial.icone] || <Sparkles className="w-7 h-7 text-amber-600" />

  return (
    <div className="bg-white p-6 rounded-md border border-slate-200 shadow-sm hover:shadow-md hover:border-brand/30 transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="w-14 h-14 rounded-lg bg-amber-500/10 border border-amber-400/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all">
          {icon}
        </div>
        <h3 className="font-display font-bold text-lg text-slate-900 mb-2 group-hover:text-brand transition-colors">
          {diferencial.titulo}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          {diferencial.textoCurto}
        </p>
      </div>
    </div>
  )
}
