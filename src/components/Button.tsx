type Props = {
  type: 'button' | 'submit' | 'reset' | undefined
  onClick?: React.MouseEventHandler<HTMLButtonElement>
} & React.PropsWithChildren

const Button: React.FunctionComponent<Props> = ({ type, children, onClick }) => {
  return (
    <button
      type={type}
      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
