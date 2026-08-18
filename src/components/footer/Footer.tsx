import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
} from '@phosphor-icons/react'

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 text-center sm:px-6 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <div>
          <p className="text-sm">© 2026 Tech Nexus.</p>

          <p className="mt-1 text-xs text-slate-400">
            Esta empresa e todas as informações são fictícias e criadas
            exclusivamente para fins educacionais.
          </p>
        </div>

        <div className="flex justify-center gap-4 lg:justify-end">
          <FacebookLogo size={22} />
          <InstagramLogo size={22} />
          <XLogo size={22} />
          <LinkedinLogo size={22} />
          <YoutubeLogo size={22} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
