import { useState } from 'react'
import { List, X } from '@phosphor-icons/react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 md:px-8">
        <Link
          to="/"
          className="text-xl font-bold text-slate-800 sm:text-2xl"
          onClick={() => setMenuOpen(false)}
        >
          Tech <span className="text-blue-600">Nexus</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm lg:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'font-semibold text-blue-600'
                : 'text-slate-500 hover:text-blue-600'
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'font-semibold text-blue-600'
                : 'text-slate-500 hover:text-blue-600'
            }
          >
            Sobre Nós
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'font-semibold text-blue-600'
                : 'text-slate-500 hover:text-blue-600'
            }
          >
            Contato
          </NavLink>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md p-2 text-slate-700 lg:hidden"
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-4 sm:px-6 lg:hidden">
          <div className="flex flex-col gap-4">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-slate-600 hover:text-blue-600"
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="text-slate-600 hover:text-blue-600"
            >
              Sobre Nós
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-slate-600 hover:text-blue-600"
            >
              Contato
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar
