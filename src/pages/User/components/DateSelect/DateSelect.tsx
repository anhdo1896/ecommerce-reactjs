import range from 'lodash/range'
import { useEffect, useState } from 'react'

interface Props {
  value?: Date
  onChange?: (value: Date) => void
  errorMessage?: string
  classNameError?: string
}
export default function DateSelect({
  value,
  onChange,
  errorMessage,
  classNameError = 'my-3 text-red-600 min-h-[0.9rem] text-[12px]'
}: Props) {
  const [date, setDate] = useState({
    date: value?.getDate() || 1,
    month: value?.getMonth() || 0,
    year: value?.getFullYear() || 1990
  })

  useEffect(() => {
    if (value) {
      setDate({
        date: value.getDate(),
        month: value.getMonth(),
        year: value.getFullYear()
      })
    }
  }, [value])

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value: valueFromSelect, name } = event.target
    const newDate = {
      date: value?.getDate() || date.date,
      month: value?.getMonth() || date.month,
      year: value?.getFullYear() || date.year,
      [name]: Number(valueFromSelect)
    }
    setDate(newDate)
    onChange && onChange(new Date(newDate.year, newDate.month, newDate.date))
  }

  return (
    <div>
      <div className='flex justify-between'>
        <select
          name='date'
          className='h-10 w-[32%] rounded-sm border border-black/10 px-3'
          onChange={handleChange}
          value={value?.getDate() || date.date}
        >
          <option disabled>Day</option>
          {range(1, 32).map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <select
          name='month'
          className='h-10 w-[32%] rounded-sm border border-black/10 px-3'
          onChange={handleChange}
          value={value?.getMonth() || date.month}
        >
          <option disabled>Month</option>
          {range(0, 12).map((item) => (
            <option value={item} key={item}>
              {item + 1}
            </option>
          ))}
        </select>
        <select
          name='year'
          className='h-10 w-[32%] rounded-sm border border-black/10 px-3'
          onChange={handleChange}
          value={value?.getFullYear() || date.year}
        >
          <option disabled>Year</option>
          {range(1990, new Date().getFullYear() + 1).map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className={classNameError}>{errorMessage} </div>
    </div>
  )
}
