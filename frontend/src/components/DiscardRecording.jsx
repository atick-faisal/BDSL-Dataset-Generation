import { Button, Card, Paper, Typography } from "@mui/material";

export default function DiscardRecording({ onDiscardRecording }) {
    return (
        <Paper
            style={{ backgroundColor: "#ffebee", borderColor: "#b71c1c" }}
            className="DiscardRecording"
        >
            <Typography color="error" variant="body1">
                <b>
                    Was the gesture recorded correctly?
                    <br></br>
                    If not please discard the recording
                </b>
            </Typography>
            <br></br>
            <Button
                onClick={onDiscardRecording}
                variant="contained"
                color="error"
            >
                Discard Recording
            </Button>
        </Paper>
    );
}
