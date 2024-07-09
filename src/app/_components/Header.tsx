import { CNA } from "@/components/icons"
import { pagesLinks } from "@/constants"

export const Header = () => {
  return (
    <header className="max-content flex mt-10 px-5">
      <a className="inline-block" href={pagesLinks.home}>
        <CNA className="text-croma-0 h-11 sm:h-14" />
      </a>

      <div className="flex justify-center -z-10 absolute top-0 left-0 w-full overflow-hidden select-none h-full">
        <img
          className="relative -left-[19rem] object-cover w-[1080px] h-[1003px] overflow-visible"
          src="imgs/photo.webp"
          alt="Professores CNA"
        />
        <div className="absolute -z-20 bg-gradient-to-b from-primary to-black/0 w-full h-[440px]"></div>
      </div>
    </header>
  )
}
