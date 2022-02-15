import classNames from "classnames"

const className = "font-bold"
const variants = {
  primary: "bg-green-400 text-white disabled:bg-slate-400  mx-auto",
  secondary: "border-2 border-blue-600 text-blue-600",
  chat: "max-h-12 bg-pink-400 border2 border-slate-200 rounded-full",
}
const sizes = {
  sm: "py-1 px-1.5 text-xs ",
  md: "py-1.5 px-3 text-md",
  lg: "py-2.5 px-5 text-lg",
}

const Button = (props) => {
  const { variant = "primary", size = "lg", ...otherProps } = props

  return (
    <button
      {...otherProps}
      className={classNames(className, variants[variant], sizes[size])}
    />
  )
}

export default Button
