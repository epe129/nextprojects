from flask import Flask, request, jsonify
import json

app = Flask(__name__)

DataInThePage = []

# here Python gets the information
@app.route('/api/home', methods=['GET', 'POST'])
def home():

    if request.method == 'POST':
        data = request.get_json()

        DataInThePage.append(data)

        TheBlogText = {
            "blogi" : f"{data["blogi"]}"
        }
        with open("data.json", "r+") as file:
            file_data = json.load(file)
            
            file_data["blogit"].append(TheBlogText)
            
            file.seek(0)
            
            json.dump(file_data, file, indent=4)        

    return "no data here"

@app.route('/api/two', methods=['GET'])
def two():
    data = []
    with open("data.json", "r+") as file:
        file_data = json.load(file)
        # print(file_data)

        for value in file_data["blogit"]:
            print(value["blogi"])
            data.append(value["blogi"])

    return jsonify(data)


if __name__ == '__main__':
    app.run(port=5300)
