import { useEffect, useState } from 'react'

const Timezone = ({ timezone }: { timezone: string }) => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const capitalizeWords = (str: string) =>
      str
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
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

      setDateTime(capitalizeWords(formatter.format(now)))
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
