import { Footer, Header, RecruitForm } from "@/app/_components"
import { pageInfo } from "@/constants"

export default function Home() {
  return (
    <div className="flex flex-col align-middle justify-between min-h-svh">
      <Header />
      <main className="px-5 py-14 pb-20 sm:pb-14">
        <div className="max-content grid grid-cols-1 gap-12 sm:grid-cols-[1fr_2fr] lg:grid-cols-2">
          <h1 className="font-semibold text-croma-0 mt-56 sm:mt-0 leading-tight text-[24px] min-[450px]:text-3xl sm:leading-none sm:text-[40px] lg:text-5xl drop-shadow-lg self-end">
            {pageInfo.slogan}
          </h1>
          <RecruitForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
