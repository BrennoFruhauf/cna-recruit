"use client"

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
import { zodResolver } from "@hookform/resolvers/zod"
import InputMask from "@mona-health/react-input-mask"

import { defaultValues, formSchema, FormType } from "./formSchema"

export const RecruitForm = () => {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  const fileRef = form.register("file")

  const onSubmit = (data: FormType) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="p-10 rounded-md bg-croma-50 flex flex-col gap-4 max-w-[600px]"
      >
        <h2 className="text-center text-croma-400 text-lg">
          Seja a próxima estrela do{" "}
          <span className="text-primary font-medium">CNA</span>: Inscreva-se
          agora e transforme sua carreira!
        </h2>

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
                  placeholder="Insira seu e-mail principal"
                  autoComplete="off"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="phone"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="phone" className="font-normal">
                Celular
              </FormLabel>
              <FormControl>
                <InputMask mask="(99) \9 9999 9999" id="phone" {...field}>
                  <Input autoComplete="off" placeholder="(__) 9 ____ ____" />
                </InputMask>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="font-semibold bg-primary hover:bg-primary-hover transition-colors"
          type="submit"
        >
          Enviar
        </Button>
      </form>
    </Form>
  )
}
