"use client"

import { useReducer, useRef } from "react"

import { AnimatePresence, motion } from "framer-motion"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { baseVariants } from "@/config/framer-motion"
import { zodResolver } from "@hookform/resolvers/zod"
import InputMask from "@mona-health/react-input-mask"

import { MyAlert } from "../Alert"
import { defaultValues, formSchema, FormType } from "./formSchema"
import { initialState, reducer } from "./state"

export const RecruitForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const timeoutRef = useRef<number | null>(null)

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  const fileRef = form.register("file")

  async function onSubmit(data: FormType) {
    dispatch({ type: "SUBMIT_START" })

    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("email", data.email)
    formData.append("phone", data.phone)
    formData.append("file", data.file)
    formData.append("message", data.message)

    const response = await fetch("/api", {
      method: "POST",
      body: formData,
    })

    const result = await response.json()
    const statusCode = response.status

    dispatch({
      payload: { message: result.message, status: statusCode },
      type: "SUBMIT_CONCLUDED",
    })

    if (statusCode === 200) form.reset()

    timeoutRef.current = window.setTimeout(() => {
      dispatch({ type: "HIDE_ALERT" })
    }, 10000)
  }

  const handleCloseAlert = () => {
    dispatch({ type: "HIDE_ALERT" })
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  return (
    <Form {...form}>
      <motion.form
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={baseVariants}
        onSubmit={form.handleSubmit(onSubmit)}
        className="p-8 sm:p-10 rounded-md bg-croma-50 flex flex-col gap-4 max-w-[600px] justify-self-end drop-shadow-lg"
      >
        <motion.h2
          variants={baseVariants}
          className="text-center text-croma-400 text-base sm:text-lg leading-5"
        >
          Seja a próxima estrela do{" "}
          <span className="text-primary font-medium">CNA</span>: Inscreva-se
          agora e transforme sua carreira!
        </motion.h2>

        <motion.div variants={baseVariants}>
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name" className="font-normal">
                  Nome
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="name"
                    placeholder="Insira seu nome completo"
                    autoComplete="off"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div variants={baseVariants}>
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email" className="font-normal">
                  E-mail
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="email"
                    type="email"
                    placeholder="Insira seu e-mail principal"
                    autoComplete="off"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div variants={baseVariants}>
          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="phone" className="font-normal">
                  Celular
                </FormLabel>
                <FormControl>
                  <InputMask
                    mask="(99) \9 9999 9999"
                    id="phone"
                    inputMode="numeric"
                    {...field}
                  >
                    <Input autoComplete="off" placeholder="(__) 9 ____ ____" />
                  </InputMask>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div variants={baseVariants}>
          <FormField
            name="file"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="file" className="font-normal">
                  Currículo
                </FormLabel>
                <FormControl>
                  <Input
                    className="cursor-pointer"
                    type="file"
                    id="file"
                    {...fileRef}
                    accept="application/pdf, image/jpeg, image/png"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div variants={baseVariants}>
          <FormField
            name="message"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="message" className="font-normal">
                  Carta de apresentação (opcional)
                </FormLabel>
                <FormControl>
                  <Textarea
                    id="message"
                    placeholder="Faça uma breve apresentação sobre você..."
                    maxLength={500}
                    className="max-h-56"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div variants={baseVariants}>
          <Button
            className="font-semibold bg-primary hover:bg-primary-hover transition-colors w-full"
            type="submit"
            disabled={state.isSubmitting}
          >
            {state.isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
        </motion.div>

        <motion.p
          variants={baseVariants}
          className="text-xs font-light text-croma-400"
        >
          O CNA respeita a sua privacidade e protege seus dados pessoais
          conforme nossa{" "}
          <a
            className="underline"
            href="https://www.cna.com.br/politica-de-privacidade"
          >
            Política de Privacidade
          </a>
        </motion.p>
      </motion.form>

      <AnimatePresence>
        {state.alertVisible && (
          <motion.div
            variants={baseVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-0 left-0 mt-28 w-full px-5"
          >
            <MyAlert
              className="shadow-lg max-w-[600px] mx-auto"
              message={state.alertContent.message}
              status={state.alertContent.status}
              onClose={handleCloseAlert}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Form>
  )
}
