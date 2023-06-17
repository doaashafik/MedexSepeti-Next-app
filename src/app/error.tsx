 "use client"
 export default function Error({
  error
}: {
  error: Error
}) {
  return (
    <h2 className="text-center">{error.message}</h2>
  )
}