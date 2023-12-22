import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material'
import { useState, useEffect } from 'react'

interface iSelectComponentProps {
  variant: "standard" | "filled" | "outlined" | undefined,
  label?: string,
  size: 'medium' | 'small'
  fullWidth?: boolean | undefined,
  data?: Array<any>
  defaultValue?: string | any[]
  onChange: Function
  name: string
  disabled?: boolean
  multiple?: boolean
  required?: boolean
}

const MuiSelect = (props: iSelectComponentProps) => {
  const [selectValue, setSelectValue] = useState<string | number | Array<any>>(props.multiple ? [] : '')

  useEffect(() => {
    let defaultValue = props.defaultValue
    // if (props.multiple && Array.isArray(props.defaultValue)) {
    //   defaultValue = props.defaultValue.map((x: any) => x.uuid)
    // }
    Array.isArray(defaultValue) ? setSelectValue(defaultValue.map((x: any) => x.uuid)) : defaultValue && setSelectValue(defaultValue)
  }, [props.defaultValue])

  const handleChange = (event: any) => {
    const { target: { value } } = event;
    props.multiple ? setSelectValue(typeof value === 'string' ? value.split(',') : value) : setSelectValue(value)
    props.onChange(props.multiple ? (typeof value === 'string' ? (event.target.value.split(',') && event) : event) : event)
  }

  return (
    <FormControl variant={props.variant} size={props.size} fullWidth={props.fullWidth} required={props?.required}>
      <InputLabel>{props.label}</InputLabel>
      <Select
        value={selectValue}
        onChange={handleChange}
        label={props.label}
        name={props.name}
        disabled={props?.disabled}
        multiple={props?.multiple}
      >
        <MenuItem value=""><em>None</em></MenuItem>
        {props?.data?.map((item: any) =>
          <MenuItem
            key={item?.label ?? item.name ?? item}
            value={item.uuid ?? item?.label ?? item.name ?? item}
          >
            {item?.label ?? item.name ?? item.registrationNumber ?? item.contractCode ?? item.bookingCode ?? item}
          </MenuItem>
        )}
      </Select>
    </FormControl>
  )
}
export default MuiSelect