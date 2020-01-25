import React, { useState, FormEvent, useRef } from "react";
import TextField, { HelperText, Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";
import { styled, StyledProps } from "@glitz/react";

type PropType = {
  placeholder: string;
  onChange: (newValue: string) => void;
  elementRef?: (el: HTMLInputElement) => void;
  initialValue?: string;
};

export default styled(function InputOutlined(props: PropType & StyledProps) {
  const [value, setValue] = useState(props.initialValue || "");

  const el = useRef<any>(null);

  // no fucking clue what's going on
  function ref(refParam: any) {
    if (!refParam) return;

    if (props.elementRef) {
      props.elementRef(refParam.inputElement);
    }

    el.current = refParam.inputElement;
  }

  return (
    <TextField
      label={props.placeholder}
      style={{ width: 300 }}
      leadingIcon={<MaterialIcon role="button" icon="search" />}
    >
      <Input
        value={value}
        ref={ref as any}
        // itemRef={ref as any}
        onChange={(e: FormEvent<HTMLInputElement>) => {
          props.onChange(e.currentTarget.value);
          setValue(e.currentTarget.value);
        }}
      />
    </TextField>
  );
})
