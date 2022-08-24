import {
    Typography,
    TextField,
    InputAdornment,
    Select,
    MenuItem,
    FormControlLabel,
    Checkbox,
    InputLabel,
    Button,
    LinearProgress,
} from "@mui/material";

import { Person, Swipe } from "@mui/icons-material";
import DiscardRecording from "./DiscardRecording";
import { useEffect } from "react";
import { useState } from "react";

const gestures = [
    { id: 0, value: "Good" },
    { id: 1, value: "Bad" },
    { id: 2, value: "Hello" },
    { id: 3, value: "Thank You" },
];

export default function RecordingSetup() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((p) => p + 1);
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
        }, 5000);
    }, []);

    return (
        <div className="RecordingSetup">
            <Typography variant="h4">Recording Setup</Typography>
            <TextField
                required
                id="name"
                label="Your Name"
                variant="outlined"
                onChange={(e) => {
                    console.log(e.target.value);
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Person />
                        </InputAdornment>
                    ),
                }}
            />
            <TextField
                select
                required
                id="name"
                label="Select the Gesture"
                variant="outlined"
                onChange={(e) => {
                    console.log(e.target.value);
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Swipe />
                        </InputAdornment>
                    ),
                }}
            >
                {gestures.map((gesture) => (
                    <MenuItem key={gesture.id} value={gesture.id}>
                        {gesture.value}
                    </MenuItem>
                ))}
            </TextField>
            <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="I provide consent for the data collection"
            />
            <Button size="large" variant="contained" color="error">
                Start Recording
            </Button>
            <LinearProgress variant="determinate" value={progress} />
            <DiscardRecording />
        </div>
    );
}
