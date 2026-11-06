import { useState, type ReactNode } from "react"

type DropdownProps = {
  title: string
  children: ReactNode
}

export default function Dropdown({ title, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-(--text) py-3">
      <h1
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        className="text-[clamp(8px,5vw,36px)] flex w-full cursor-pointer items-center justify-between text-left font-semibold "
      >
        {title}
        <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </h1>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pt-2">{children}</p>
        </div>
      </div>
    </div>
  )
}