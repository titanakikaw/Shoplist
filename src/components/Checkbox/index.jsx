import React from "react";

const Checkbox = ({
  field: { value, name }, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  meta,
  className,
  hobbies,
  ...props
}) => {
  return (
    <fieldset>
      {hobbies.map((x) => (
        <div className="flex items-center" key={x.value}>
          <input
            id={x.id}
            name={name}
            type={props.type}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            checked={value.some((val) => val === x.id)}
            onChange={() => {
              const index = value.findIndex((val) => val === x.id);
              if (index === -1) {
                setFieldValue(name, [...value, x.id]);
              } else {
                setFieldValue(name, [
                  ...value.splice(0, index),
                  ...value.splice(index + 1),
                ]);
              }
            }}
          />
          <label
            htmlFor={props.id}
            className="ml-2 block text-sm text-gray-900"
          >
            {x.value}
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default Checkbox;
