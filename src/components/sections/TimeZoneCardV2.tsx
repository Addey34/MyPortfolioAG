import { useEffect, useState } from 'react'

const Timezone = ({ timezone }: { timezone: string }) => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const capitalize = (str: string) =>
      str.replace(/\b\w/g, (char) => char.toUpperCase())
    const updateTime = () => {
      const now = new Date()
      const formatter = new Intl.DateTimeFormat('fr-FR', {
        timeZone: timezone,
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })

      setDateTime(capitalize(formatter.format(now)))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [timezone])

  return (
    <div className="mt-5">
      <p>{dateTime}</p>
      <p className="mt-1 text-sm text-gray-500">{timezone}</p>
    </div>
  )
}

export default Timezone
