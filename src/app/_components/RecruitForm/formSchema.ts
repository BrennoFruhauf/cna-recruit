import { z } from "zod"

import { formTexts } from "@/constants"

const { file, name, email, phone, message } = formTexts
const ACCEPTED_FILE_TYPES = file.validate.ACCEPTED_FILE_TYPES

const fileSchema = z
  .instanceof(globalThis.FileList)
  .refine((fl) => fl && fl.length > 0, file.validate.required)
  .transform((fl) => fl[0])
  .refine((f) => f.size <= file.validate.size, file.validate.sizeText)
  .refine((f) => ACCEPTED_FILE_TYPES.includes(f.type), file.validate.typeFile)

export const formSchema = z.object({
  name: z.string().min(1, name.validate),
  email: z.string().email(email.validate),
  phone: z.string().regex(phone.regex, phone.validate),
  file: fileSchema,
  message: z.string().max(message.max, message.validate),
})

export type FormType = z.infer<typeof formSchema>

export const defaultValues: FormType = {
  name: "",
  email: "",
  phone: "",
  file: undefined as unknown as File,
  message: "",
}
