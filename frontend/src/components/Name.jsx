import { TextField, InputAdornment } from "@mui/material";
import { Person } from "@mui/icons-material";

export default function Name({ subjectId, setSubjectId }) {
    return (
        <TextField
            required
            error={subjectId === ""}
            id="name"
            label="Your Name"
            variant="outlined"
            value={subjectId}
            onChange={(e) => {
                setSubjectId(e.target.value);
                // console.log(e.target.value);
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Person />
                    </InputAdornment>
                ),
            }}
        />
    );
}
