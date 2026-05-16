import { formatGroupedDigits, parseGroupedDigits } from '@/utils/formatGroupedDigits'
import { InputHTMLAttributes } from 'react'

type NumericInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'defaultValue' | 'onChange' | 'type'
> & {
  value: number
  onChange: (value: number) => void
}

const NumericInput = ({ value, onChange, ...props }: NumericInputProps) => {
  const display = formatGroupedDigits(String(value))
  return (
    <input
      {...props}
      type="text"
      value={display}
      onChange={(e) => onChange(parseGroupedDigits(e.target.value))}
      className="border border-gray-300 rounded px-2 py-1 text-lg outline-none"
      placeholder="0"
    />
  )
}

export default NumericInput
