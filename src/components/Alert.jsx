export const Alert = (alert) => {
  return (
    <div class={`${alert.error ? 'from-red-400 to-red-600' : 'from-green-400 to-green-700'} bg-gradient-to-br text-center p-3 uppercase text-white font-bold text-sm`}>
      {alert.msg}hola
    </div>

  )
}