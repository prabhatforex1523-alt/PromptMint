type ToastProps = {
  message: string | null
}

function Toast({ message }: ToastProps) {
  if (!message) {
    return null
  }

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-50 rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-[var(--shadow-card)]">
      {message}
    </div>
  )
}

export default Toast
