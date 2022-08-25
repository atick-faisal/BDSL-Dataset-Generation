import { TextField, InputAdornment, MenuItem } from "@mui/material";
import { Swipe } from "@mui/icons-material";

export default function GestureSelector({
    gestureList,
    currentGesture,
    setCurrentGesture,
}) {
    return (
        <TextField
            select
            required
            id="gesture"
            label="Select the Gesture"
            variant="outlined"
            value={currentGesture.id}
            onChange={(e) => {
                let selectedGesture = gestureList.filter(
                    (gesture) => gesture.id === e.target.value
                )[0];
                setCurrentGesture(selectedGesture);
                // console.log(selectedGesture);
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Swipe />
                    </InputAdornment>
                ),
            }}
        >
            {gestureList.map((gesture) => (
                <MenuItem key={gesture.id} value={gesture.id}>
                    {gesture.value}
                </MenuItem>
            ))}
        </TextField>
    );
}
