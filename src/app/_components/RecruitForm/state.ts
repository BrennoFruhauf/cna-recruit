export type State = {
  isSubmitting: boolean
  alertVisible: boolean
  alertContent: {
    message: string
    status: number
  }
}

export const initialState: State = {
  isSubmitting: false,
  alertVisible: false,
  alertContent: {
    message: "",
    status: 0,
  },
}

export type SubmitAction =
  | { type: "SUBMIT_START" }
  | { type: "SUBMIT_CONCLUDED"; payload: { message: string; status: number } }
  | { type: "HIDE_ALERT" }

export const reducer = (state: State, action: SubmitAction): State => {
  switch (action.type) {
    case "SUBMIT_START":
      return { ...state, isSubmitting: true }

    case "SUBMIT_CONCLUDED":
      return {
        ...state,
        isSubmitting: false,
        alertVisible: true,
        alertContent: {
          message: action.payload.message,
          status: action.payload.status,
        },
      }

    case "HIDE_ALERT":
      return { ...state, alertVisible: false }

    default:
      return state
  }
}
