from flask import Flask, render_template, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend JavaScript from any origin to access this backend overall its imp.

# for my MongoDB connection
app.config["MONGO_URI"] = "mongodb+srv://armanojha127_db_user:12345@ahaar0.0rar6wt.mongodb.net/ahaarDB?retryWrites=true&w=majority"
mongo = PyMongo(app)
db = mongo.db  # reference to the database

# Serve aniket's HTML page
@app.route("/")
def home():
    return render_template("index.html")  # the location of the html file should be in templates only!!

# Register endpoint
@app.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    email = data.get("email")
    
    #  this will help us to Check if user already exists kaam aayega
    existing_user = db.users.find_one({"email": email})
    if existing_user:
        return jsonify({"message": "User already exists"}), 400

    # for Inserting new user and like this will be the structure of the document in the collectoion.
    db.users.insert_one({
        "name": data.get("name"),
        "phone": data.get("phone"),
        "email": email,
        "password": data.get("password")  # yaha mujhe isko hash karna hai but baad me karunga
    })
    return jsonify({"message": "Registration successful!"}), 200

# for Login endpoint
@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user = db.users.find_one({"email": email})
    if not user:
        return jsonify({"message": "User not found"}), 404
    if user["password"] != password:
        return jsonify({"message": "Incorrect password"}), 401

    return jsonify({"message": f"Welcome {user['name']}!"}), 200

# for our Guest login endpoint
@app.route("/guest-login", methods=["GET"])
def guest_login():
    return jsonify({"message": "Logged in as Guest"}), 200

# the below command is imp for running the flask so dont mess with it(specially sriyanshu)
if __name__ == "__main__":
    app.run(debug=True)
