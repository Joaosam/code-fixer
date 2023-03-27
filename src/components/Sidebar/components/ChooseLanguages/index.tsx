import { MenuItem } from "@mui/material";
import { useContext } from "react";
import { CustomFormControl, CustomSelect, CustomInputLabel } from "./styles";
import languages from "../../../../data.json";
import { ResponseGPTContext } from "../../../../contexts/ResponseGPTContext";
import { GenerateCodeContext } from "../../../../contexts/GenerateCodeContext";

export function ChooseLanguages() {
  const { language, setLanguage } = useContext(ResponseGPTContext);
  const { setLanguageGenerateCode } = useContext(GenerateCodeContext);
  const formatLanguage = languages.map((format) => format.toUpperCase());

  const handleChange = (event: any) => {
    setLanguage(event.target.value);
    setLanguageGenerateCode(event.target.value);
  };

  return (
    <CustomFormControl variant="filled">
      <CustomInputLabel id="demo-simple-select-filled-label">
        Language
      </CustomInputLabel>
      <CustomSelect
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={language}
        onChange={handleChange}
      >
        {formatLanguage.map((language) => (
          <MenuItem sx={{ fontSize: "16px" }} key={language} value={language}>
            {language}
          </MenuItem>
        ))}
      </CustomSelect>
    </CustomFormControl>
  );
}
