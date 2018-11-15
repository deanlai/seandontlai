from flask import Flask
from flask import render_template

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/tidbits')
def tidbits():
    return render_template('tidbits.html')


@app.route('/places')
def places():
    return render_template('places.html')


@app.route('/about')
def about():
    return render_template('about.html')
