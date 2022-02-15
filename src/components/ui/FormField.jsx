import Input from "./input"
import classNames from "classnames"
import { Field } from "formik"
const FormField = (props) => {
  const { children, className, as: Component = Input, ...otherProps } = props

  return (
    <Field {...otherProps}>
      {({ field, meta: { error, touched } }) => (
        <div className={classNames(className)}>
          <label className="block w-full">
            {children}
            <Component
              {...field}
              className="w-full block rounded-full  "
              {...otherProps}
            />
          </label>
          {touched && error ? (
            <p className="text-red-500 text-sm p-2">{error}</p>
          ) : null}
        </div>
      )}
    </Field>
  )
}

export default FormField
