import os
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/api/hello", methods=["GET"])
def hello():
    return jsonify({"message": "Hello from Flask!"})

@app.route("/api/post", methods=["POST"])
def p():
    g = request.json

    print(g)

    return jsonify({"message": "Hello from Flask!"})


if __name__ == "__main__":
    app.run()
    