import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";

export default function MultipleSelect({ label = "Name", options = [], onChange }) {
    const theme = useTheme();
    const [value, setValue] = React.useState([]); // ¡û no TS generic

    const handleChange = (event) => {
        const next =
            typeof event.target.value === "string"
                ? event.target.value.split(",")
                : event.target.value;

        setValue(next);
        if (onChange) onChange(next);
    };

    return (
        <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="multi-select-label">{label}</InputLabel>
            <Select
                labelId="multi-select-label"
                multiple
                value={value}
                onChange={handleChange}
                input={
                    <OutlinedInput
                        label={label}
                        sx={{
                            borderRadius: "9999px",
                            "& .MuiOutlinedInput-notchedOutline": { borderRadius: "9999px" },
                        }}
                    />
                }
                MenuProps={{
                    PaperProps: { sx: { borderRadius: 2, maxHeight: 48 * 4.5 + 8, width: 250 } },
                }}
            >
                {options.map((opt) => (
                    <MenuItem
                        key={opt}
                        value={opt}
                        sx={{
                            fontWeight: value.includes(opt)
                                ? theme.typography.fontWeightMedium
                                : theme.typography.fontWeightRegular,
                        }}
                    >
                        {opt}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

MultipleSelect.propTypes = {
    label: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
};
