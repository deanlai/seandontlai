from flask import render_template, flash, redirect, url_for
from app import app
from app.forms import LoginForm


@app.route('/home')
def home():
    return render_template('home.html')


@app.route('/')
@app.route('/tidbits')
def tidbits():
    return render_template('tidbits.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        flash('Login requested for user {}, remember_me={}'.format(
            form.username.data, form.remember_me.data))
        return redirect(url_for('tidbits'))
    return render_template('login.html', title='Sign In', form=form)


@app.route('/places')
def places():
    return render_template('places.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/energy')
def energy():
    return render_template('energy.html')


@app.route('/pink')
def pink():
    return render_template('pink.html')


@app.route('/oregon')
def oregon():
    return render_template('oregon.html')


@app.route('/entropy')
def entropy():
    return render_template('entropy.html')
