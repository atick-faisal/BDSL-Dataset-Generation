import Guide from "./components/Guide";
import RecordingSetup from "./components/RecordingSetup";

const startRecording = async (subjectId, gesture) => {
    const rawResponse = await fetch("/record", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ subjectId: subjectId, gesture: gesture }),
    });
    const content = await rawResponse.json();

    console.log(content);
};

const deleteLastRecording = async () => {
    const rawResponse = await fetch("/delete");
    const content = await rawResponse.json();

    console.log(content);
};

function App() {
    return (
        <div className="App">
            <Guide />
            <RecordingSetup
                onStartRecord={startRecording}
                onDiscardRecording={deleteLastRecording}
            />
        </div>
    );
}

export default App;
