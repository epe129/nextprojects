from flask import Flask, jsonify, request, render_template
import sqlite3
import json

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def page():
    conn = sqlite3.connect('/home/lenni/home/koodit/nextprojects/firststackBACKEND/venv/db/kirjat.db')

    cursor_obj = conn.cursor()

    statement = '''SELECT * FROM KIRJA'''

    cursor_obj.execute(statement)
    
    output = cursor_obj.fetchall()
    
    for row in output:
        print(row)

    conn.commit()

    conn.close()

    return render_template("index.html")

@app.route("/api/hello", methods=["GET"])
def api1():
    conn = sqlite3.connect('/home/lenni/home/koodit/nextprojects/firststackBACKEND/venv/db/kirjat.db')

    cursor_obj = conn.cursor()

    statement = '''SELECT * FROM KIRJA'''

    cursor_obj.execute(statement)
    
    kirjat = []

    output = cursor_obj.fetchall()        

    for c in output:
        kirjat.append(c)
    
    return jsonify(kirjat)


@app.route("/api/post", methods=["POST"])
def api2():
    getData = request.json

    conn = sqlite3.connect('/home/lenni/home/koodit/nextprojects/firststackBACKEND/venv/db/kirjat.db')

    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS KIRJA (
            Kirjannimi STRING NOT NULL,
            kirjantekija STRING NOT NULL,
            KirjanKuvaus STRING NOT NULL,
            julkaispaiva DATE NOT NULL,
            hinta INTEGER NOT NULL
        );
    """)

    cursor.execute(f"INSERT INTO KIRJA (Kirjannimi, kirjantekija, KirjanKuvaus, julkaispaiva, hinta) VALUES ('{getData["nimi"]}', '{getData["tekija"]}','{getData["kuvaus"]}','{getData["maara"]}', '{getData["hinta"]}')")

    conn.commit()

    conn.close()

    return jsonify({"message": "Hello from Flask!"})


if __name__ == "__main__":
    app.run()
    