import { Footer, Header, RecruitForm } from "@/app/_components"

import { H1 } from "./_components/H1"

export default function Home() {
  return (
    <div className="flex flex-col align-middle justify-between min-h-svh">
      <Header />
      <main className="px-5 py-14 pb-20 sm:pb-14">
        <div className="max-content grid grid-cols-1 gap-12 sm:grid-cols-[1fr_2fr] lg:grid-cols-2">
          <H1 />
          <RecruitForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
