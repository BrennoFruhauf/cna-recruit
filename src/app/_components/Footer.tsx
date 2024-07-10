"use client"

import { motion } from "framer-motion"

import { CNA } from "@/components/icons"
import { smoothVariants } from "@/config/framer-motion"
import { pagesLinks, socialMedia } from "@/constants"

export const Footer = () => {
  return (
    <footer className="bg-croma-400 px-5 py-10 sm:py-5">
      <motion.div
        variants={smoothVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-content flex items-center flex-wrap justify-between gap-8 min-h-14"
      >
        <motion.a variants={smoothVariants} title="CNA" href={pagesLinks.home}>
          <CNA className="text-primary h-8" />
        </motion.a>

        <motion.ul
          variants={smoothVariants}
          className="text-croma-100 font-medium flex flex-col basis-full gap-2 text-xl sm:text-base sm:basis-0 sm:flex-row"
        >
          {pagesLinks.links.map((item) => (
            <motion.li
              variants={smoothVariants}
              key={item.name}
              className="mr-4 text-nowrap"
            >
              <a href={item.link}>{item.name}</a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.ul
          variants={smoothVariants}
          className="flex gap-5 sm:gap-4 justify-between mx-auto md-xl:mx-0"
        >
          {socialMedia.map((item) => (
            <motion.li
              variants={smoothVariants}
              key={item.name}
              className="text-croma-100"
            >
              <a href={item.link} title={`Siga no ${item.name}`}>
                <item.icon className="text-2xl sm:text-xl" />
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </footer>
  )
}
