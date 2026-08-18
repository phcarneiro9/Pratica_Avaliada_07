function Contact() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-16">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-blue-600 sm:text-4xl md:text-5xl">
            Fale Conosco
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            Entre em contato para discutir parcerias, soluções enterprise ou
            dúvidas técnicas.
          </p>
        </div>

        <form className="mx-auto mt-8 w-full max-w-3xl rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 md:p-8">
          <div className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="nome"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Nome Completo
              </label>

              <input
                id="nome"
                type="text"
                required
                placeholder="Jane Doe"
                className="w-full rounded-md border border-slate-300 px-3 py-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email Corporativo
              </label>

              <input
                id="email"
                type="email"
                required
                placeholder="jane@empresa.com"
                className="w-full rounded-md border border-slate-300 px-3 py-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="assunto"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Assunto
              </label>

              <input
                id="assunto"
                type="text"
                required
                placeholder="Soluções Enterprise"
                className="w-full rounded-md border border-slate-300 px-3 py-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="mensagem"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Mensagem
              </label>

              <textarea
                id="mensagem"
                required
                rows={5}
                placeholder="Como podemos ajudar a escalar seu negócio?"
                className="w-full resize-none rounded-md border border-slate-300 px-3 py-3 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:w-auto"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
