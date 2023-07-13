import React, { ChangeEvent, ComponentProps, FC } from "react"


export type SelectOptionList = Array<Option>

export interface Option {
  value: string | number
  label: string
}

interface SelectProps extends ComponentProps<"select"> {
  options: Array<Option>
  value: Option["value"]
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const Select: FC<SelectProps> = (props) => {
  const {
    options,
    value,
    onChange,
    className,
    ...restProps
  } = props

  return (
    <select
      {...restProps}
      className={"form-select" + (className ? className : "")}
      value={value}
      onChange={onChange}
    >
      {options.map(option => {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        )
      })}
    </select>
  )
}
