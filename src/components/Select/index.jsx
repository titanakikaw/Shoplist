import React from "react";
import clsx from "clsx";

const Select = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  meta,
  className,
  ...props
}) => {
  return (
    <div className="-space-y-px rounded-md shadow-sm">
      <div>
        <label htmlFor={props.id} className="sr-only">
          {props.placeholder}
        </label>

        <select
          {...props}
          {...field}
          id={props.id}
          className={clsx(
            "relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",
            {
              [className || ""]: !!className,
            }
          )}
        >
          {props.options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.text}
            </option>
          ))}
        </select>
        {touched[field.name] && errors[field.name] && (
          <p className="text-red-500 text-sm font-medium">
            {errors[field.name]}
          </p>
        )}
      </div>
    </div>
  );
};

export default Select;