from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    study_hours = float(data["studyHours"])
    attendance = float(data["attendance"])
    previous_score = float(data["previousScore"])
    prediction = (study_hours * 5) + (attendance * 0.3) + (previous_score * 0.5)

    return jsonify({
        "prediction": round(prediction, 2)
    })

if __name__ == "__main__":
    app.run(port=5001)
