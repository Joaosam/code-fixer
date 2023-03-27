import { FormControl, InputLabel, Select } from "@mui/material";
import styled from "styled-components";

export const CustomFormControl = styled(FormControl)`
  background-color: ${(props) => props.theme["bg-secundary-2"]};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  .MuiInputBase-root::after {
    border-color: ${(props) => props.theme["default-green"]};
  }

  .MuiInputBase-root::before {
    border-color: ${({ theme }) => theme["text-default"]};
  }

  .MuiSvgIcon-root {
    color: ${(props) => props.theme["default-green"]};
    width: 3rem;
    height: 3rem;
    top: 25%;
  }
`;

export const CustomInputLabel = styled(InputLabel)`
  color: ${({ theme }) => theme["default-green"]} !important;
  font-size: 1.4rem !important;
`;

export const CustomSelect = styled(Select)`
  .MuiSelect-select {
    font-size: 1.6rem;
    color: ${({ theme }) => theme["text-default"]};
  }
`;
