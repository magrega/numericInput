import { formatGroupedDigits, parseGroupedDigits } from '@/utils/formatGroupedDigits'
import { InputHTMLAttributes } from 'react'

type NumericInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'defaultValue' | 'onChange' | 'type' | 'maxLength'
> & {
  value: number
  onChange: (value: number) => void
  maxLength?: number
}

const NumericInput = ({ value, onChange, maxLength = 15, ...props }: NumericInputProps) => {
  const display = formatGroupedDigits(String(value))
  return (
    <input
      {...props}
      type="text"
      value={display}
      onChange={(e) => onChange(parseGroupedDigits(e.target.value, maxLength))}
      className="caret-accent-deep min-w-[72px] field-sizing-content text-current/30 px-[8px] py-[11px] font-[Inter] font-medium border-field border-[1.5px] rounded-[6px] outline-none
      focus:border-accent focus:text-current transition-colors
      "
      placeholder="0"
    />
  )
}

export default NumericInput
