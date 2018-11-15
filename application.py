import datetime
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


@app.route('/hello/')
@app.route('/hello/<name>')
def hello(name=None):
    return render_template('hello.html', name=name)


@app.route('/whatdayisit')
def whatDay():
    daysDict = {
        0: 'Monday',
        1: 'Tuesday',
        2: 'Wednesday',
        3: 'Thursday',
        4: 'Friday',
        5: 'Saturday',
        6: 'Sunday'
    }
    now = datetime.datetime.now()
    todayIs = daysDict[now.weekday()]
    return render_template('whatDay.html', todayIs=todayIs)
