import { AlertCircle, CircleCheck, X } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type MyAlertProps = {
  message: string
  status: number
  onClose: () => void
  className?: string
}

export const MyAlert = (content: MyAlertProps) => {
  const CloseButton = () => (
    <X
      className="h-5 w-5 text-croma-300 hover:text-croma-400 transition-colors cursor-pointer rounded-md hover:bg-croma-100"
      color={undefined}
      onClick={content.onClose}
    />
  )

  return (
    <Alert variant="default" className={content.className}>
      {content.status === 200 ? (
        <>
          <CircleCheck className="h-4 w-4 mt-[2px]" color="#059669" />
          <AlertTitle className="text-emerald-600 flex justify-between items-center flex-nowrap">
            Sucesso
            <CloseButton />
          </AlertTitle>
        </>
      ) : (
        <>
          <AlertCircle className="h-4 w-4 mt-[2px]" color="#b91c1c" />
          <AlertTitle className="text-red-700 flex justify-between items-center flex-nowrap">
            Erro
            <CloseButton />
          </AlertTitle>
        </>
      )}

      <AlertDescription>{content.message}</AlertDescription>
    </Alert>
  )
}
