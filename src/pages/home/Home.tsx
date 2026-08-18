function Home() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:flex-row lg:gap-14 lg:px-8 lg:py-24">
        <div className="w-full flex-1 text-center lg:text-left">
          <h1 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight text-blue-600 sm:text-4xl md:text-5xl lg:mx-0 lg:max-w-xl">
            Inovando o Futuro Digital
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base md:text-lg lg:mx-0 lg:max-w-md">
            Construímos soluções tecnológicas inteligentes que aceleram a
            transformação da sua empresa. Precisão enterprise com a agilidade
            de uma startup moderna.
          </p>

          <button
            type="button"
            className="mt-7 rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 sm:px-6"
          >
            Saiba Mais
          </button>
        </div>

        <div className="w-full flex-1">
          <img
            src="https://ik.imagekit.io/phcarneiro9/Tecnologia.png"
            alt="Cidade conectada representando tecnologia e inovação"
            className="h-52 w-full rounded-xl border border-slate-200 object-cover shadow-lg sm:h-64 md:h-80 lg:h-100 lg:rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default Home
