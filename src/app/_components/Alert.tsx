import { AlertCircle, CircleCheck } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const MyAlert = (content: { message: string; status: number }) => {
  return (
    <Alert variant="default">
      {content.status === 200 ? (
        <>
          <CircleCheck className="h-4 w-4" color="#059669" />
          <AlertTitle className="text-emerald-600">Sucesso</AlertTitle>
        </>
      ) : (
        <>
          <AlertCircle className="h-4 w-4" color="#b91c1c" />
          <AlertTitle className="text-red-700">Erro</AlertTitle>
        </>
      )}

      <AlertDescription>{content.message}</AlertDescription>
    </Alert>
  )
}
