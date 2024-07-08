import { CNA } from "@/components/icons"

export default function Home() {
  return (
    <div className="flex flex-col align-middle justify-between min-h-svh">
      <header className="max-w-content flex justify-center align-middle mt-10">
        <a className="inline-block" href="https://www.cna.com.br/catalao">
          <CNA className="text-croma-0 h-11 sm:h-14" />
        </a>
      </header>
      <main>
        <div>Imagem</div>
        <div>formulário</div>
      </main>
      <footer>footer</footer>
    </div>
  )
}
