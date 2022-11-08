import os, webbrowser
from flask import Flask, request, jsonify, send_from_directory

from video_recorder import (
    record_data,
    delete_last_recording,
    cleanup
)

app = Flask(__name__, static_folder="frontend/build")


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


@app.route('/record', methods=["POST"])
def record():
    try:
        data = request.get_json()
        subject_id = data["subjectId"]
        gesture = data["gesture"]
        print("-" * 30 + f"\n{subject_id} -> {gesture}\n" + "-" * 30)
        record_data(subject_id, gesture)

    except Exception as e:
        print(f"ERROR: {type(e)}")
        return jsonify(
            success=False
        )

    return jsonify(
        success=True
    )


@app.route('/delete', methods=["GET"])
def delete():
    try:
        delete_last_recording()

    except Exception as e:
        print(f"ERROR: {type(e)}")
        return jsonify(
            success=False
        )

    return jsonify(
        success=True
    )


if __name__ == "__main__":
    webbrowser.open("http://localhost:5000")
    app.run(host='0.0.0.0', port=5000)
    cleanup()
