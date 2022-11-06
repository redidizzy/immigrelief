type Props = {
  label: string
  id: string
  inputClass?: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const Input: React.FunctionComponent<Props> = ({ label, id, inputClass = '', value, setValue }) => {
  return (
    <>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        name={id}
        id={id}
        value={value}
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${inputClass}`}
        onChange={(e) => {
          setValue(e.currentTarget.value)
        }}
      />
    </>
  )
}

export default Input
