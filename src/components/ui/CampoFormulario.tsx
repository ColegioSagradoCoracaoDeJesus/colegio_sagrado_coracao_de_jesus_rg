import React from 'react'

interface CampoFormularioProps {
  label: string
  name: string
  type?: 'text' | 'email' | 'tel' | 'date' | 'select' | 'textarea'
  placeholder?: string
  required?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
  error?: string
  options?: Array<{ value: string; label: string }>
  rows?: number
  helpText?: string
}

export const CampoFormulario: React.FC<CampoFormularioProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  value,
  onChange,
  error,
  options = [],
  rows = 4,
  helpText,
}) => {
  const fieldId = `field-${name}`
  const baseInputClasses = `w-full rounded-md border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent ${
    error ? 'border-red-500 bg-red-50/30' : 'border-slate-300 bg-white hover:border-slate-400'
  } p-3 text-slate-900 placeholder:text-slate-400`

  return (
    <div className="w-full mb-4">
      <label htmlFor={fieldId} className="block text-sm font-semibold text-slate-800 mb-1.5">
        {label} {required && <span className="text-red-600" title="Campo obrigatório">*</span>}
      </label>

      {type === 'select' ? (
        <select id={fieldId} name={name} value={value} onChange={onChange} className={baseInputClasses} required={required}>
          <option value="">-- Selecione uma opção --</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          id={fieldId}
          name={name}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseInputClasses}
          required={required}
        />
      ) : (
        <input
          id={fieldId}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseInputClasses}
          required={required}
        />
      )}

      {helpText && !error && <p className="text-xs text-slate-500 mt-1">{helpText}</p>}
      {error && <p className="text-xs font-medium text-red-600 mt-1" role="alert">{error}</p>}
    </div>
  )
}

export const HoneypotField: React.FC<{ value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ value, onChange }) => (
  <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
    <label htmlFor="website_hp">Se você é um humano, não preencha este campo:</label>
    <input type="text" id="website_hp" name="website_hp" tabIndex={-1} autoComplete="off" value={value} onChange={onChange} />
  </div>
)
