import NumericInput from '@/components/NumericInput'
import { useStore } from '@/store'
import { Link, useParams } from 'react-router-dom'

export default function PersonEdit() {
  const { id } = useParams<{ id: string }>()
  const person = useStore((state) => state.people.find((p) => p.id === Number(id)))
  const updatePersonAge = useStore((state) => state.updatePersonAge)
  if (!person) {
    return (
      <div>
        <p className="text-gray-600">Person not found</p>
        <Link to="/" className="text-violet-600 hover:underline text-sm">
          Back to list
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <Link to="/" className="text-violet-600 hover:underline text-sm">
        &larr; Back
      </Link>

      <div className="group flex items-center gap-3 text-ink">
        <img
          src="/cat.jpg"
          alt={person.name}
          className="size-20 rounded-full bg-gray-100 object-cover border-accent group-focus-within:ring-2 group-focus-within:ring-accent transition-all"
        />

        <div>
          <label
            htmlFor="hours-input"
            className="block font-bold tracking-wide mb-3 font-[Koulen] 
            group-focus-within:text-accent-deep transition-colors"
          >
            {person.name.toUpperCase()} IS
          </label>
          <div className="flex items-center gap-3 text-lg">
            <NumericInput
              id="hours-input"
              value={person.ageInHours}
              onChange={(n) => updatePersonAge(person.id, n)}
            />
            <span>hours old</span>
          </div>
        </div>
      </div>
    </div>
  )
}
