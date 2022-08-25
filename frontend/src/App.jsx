import { useState } from "react";
import Guide from "./components/Guide";
import RecordingSetup from "./components/RecordingSetup";

const GESTURES = [
    { id: 0, value: "হ্যালো" },
    { id: 1, value: "শুভ সকাল" },
    { id: 2, value: "শুভ অপরাহ্ন" },
    { id: 3, value: "শুভরাত্রি" },
    { id: 4, value: "আপনি কেমন আছেন" },
    { id: 5, value: "আমি ভালো আছি" },
    { id: 6, value: "আপনার নাম কি" },
    { id: 7, value: "Where Do You Live" },
    { id: 8, value: "আপনাকে কিভাবে সাহায্য করতে পারি" },
    { id: 9, value: "শুভ জন্মদিন" },
    { id: 10, value: "ধন্যবাদ" },
    { id: 11, value: "আমি দুঃখিত" },
    { id: 12, value: "Please" },
    { id: 13, value: "Good to See You" },
    { id: 14, value: "আবার দেখা হবে" },
    { id: 15, value: "আপনি ভালো থাকবেন" },
    { id: 16, value: "আপনাকে আমার ভালো লেগেছে" },
    { id: 17, value: "আপনি কি কাজ করেন" },
    { id: 18, value: "What Time is It" },
    { id: 19, value: "কলেজ" },
    { id: 20, value: "অফিস" },
    { id: 21, value: "কাজ" },
    { id: 22, value: "কম্পিউটার" },
    { id: 23, value: "মোবাইল" },
    { id: 24, value: "ইন্টারনেট" },
    { id: 25, value: "কলম" },
    { id: 26, value: "বই" },
    { id: 27, value: "লাইট" },
    { id: 28, value: "ফ্যান" },
    { id: 29, value: "হাটা" },
    { id: 30, value: "ঘুমানো" },
    { id: 31, value: "আসা" },
    { id: 32, value: "Leave" },
    { id: 33, value: "দেখা" },
    { id: 34, value: "বাবা" },
    { id: 35, value: "মা" },
    { id: 36, value: "ভাই" },
    { id: 37, value: "বোন" },
    { id: 38, value: "স্বামী" },
    { id: 39, value: "স্ত্রী" },
];

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
    const [currentGesture, setCurrentGesture] = useState(GESTURES[0]);

    return (
        <div className="App">
            <Guide currentGesture={currentGesture.value} />
            <RecordingSetup
                gestureList={GESTURES}
                currentGesture={currentGesture}
                setCurrentGesture={setCurrentGesture}
                onStartRecord={startRecording}
                onDiscardRecording={deleteLastRecording}
            />
        </div>
    );
}

export default App;
