import {
    Typography,
    FormControlLabel,
    Checkbox,
    Button,
    LinearProgress,
} from "@mui/material";

import DiscardRecording from "./DiscardRecording";
import { useState } from "react";
import Name from "./Name";
import GestureSelector from "./GestureSelector";

export default function RecordingSetup({
    gestureList,
    currentGesture,
    setCurrentGesture,
    onStartRecord,
    onDiscardRecording,
}) {
    const [subjectId, setSubjectId] = useState("");
    const [showDiscard, setShowDiscard] = useState(false);
    const [progress, setProgress] = useState(0);
    const [concentProvided, setConcentProvided] = useState(false);

    const [recordBtnColor, setRecordBtnColor] = useState("error");
    const [recordBtnText, setRecordBtnText] = useState("Start Recording");

    const showRecordingPreogress = () => {
        setProgress(0);
        setRecordBtnColor("success");
        setRecordBtnText("Please Prepare ... ");
        const interval = setInterval(() => {
            setProgress((p) => p + 1);
        }, 70);

        setTimeout(() => {
            setRecordBtnColor("warning");
            setRecordBtnText("Recording ... ");
            onStartRecord(subjectId, currentGesture.value);
        }, 2000);

        setTimeout(() => {
            clearInterval(interval);
            setShowDiscard(true);
            setRecordBtnColor("error");
            setRecordBtnText("Start Recording");
        }, 4000);
    };

    // console.log(currentGesture);

    return (
        <div className="RecordingSetup">
            <Typography variant="h5">Recording Setup</Typography>
            <Name subjectId={subjectId} setSubjectId={setSubjectId} />
            <GestureSelector
                gestureList={gestureList}
                currentGesture={currentGesture}
                setCurrentGesture={setCurrentGesture}
            />

            <FormControlLabel
                control={<Checkbox />}
                checked={concentProvided}
                onChange={(e) => {
                    console.log(concentProvided);
                    setConcentProvided(e.target.checked);
                }}
                label="I provide consent for the data collection"
            />
            <Button
                size="large"
                variant="contained"
                color={recordBtnColor}
                disabled={subjectId === "" || !concentProvided}
                onClick={() => {
                    showRecordingPreogress();
                    setShowDiscard(false);
                }}
            >
                {recordBtnText}
            </Button>
            <LinearProgress
                color={recordBtnColor}
                variant="determinate"
                value={progress}
            />
            {showDiscard && (
                <DiscardRecording onDiscardRecording={onDiscardRecording} />
            )}
        </div>
    );
}
