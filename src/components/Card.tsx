type Props = {
  title: string
  className?: string
} & React.PropsWithChildren

const Card: React.FunctionComponent<Props> = ({ children, title, className = '' }) => {
  return (
    <div
      className={`p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ${className} `}
    >
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      {children}
    </div>
  )
}

export default Card
