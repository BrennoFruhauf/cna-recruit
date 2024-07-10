"use client"

import { motion } from "framer-motion"

import { baseVariants } from "@/config/framer-motion"
import { pageInfo } from "@/constants"

export const H1 = () => (
  <motion.h1
    variants={baseVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="font-semibold text-croma-0 mt-56 sm:mt-0 leading-tight text-[24px] min-[450px]:text-3xl sm:leading-none sm:text-[40px] lg:text-5xl drop-shadow-lg self-end"
  >
    {pageInfo.slogan}
  </motion.h1>
)
