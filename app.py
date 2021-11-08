from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/home')
def home():
    return render_template('home.html',title="Agora Gym")

@app.route('/bodybuilding')
def bodybuilding():
    return render_template('bodybuilding.html',title="Bodybuilding")

@app.route('/dance')
def dance():
    return render_template('dance.html',title="dance")

@app.route('/sign_in', methods=['GET','POST'])
def sign_in():
    return render_template('sign_in.html',title="sign in")

@app.route('/sign_up', methods=['GET','POST'])
def sign_up():
    return render_template('sign_up.html',title="sign up")

if __name__ == '__main__':
    app.run(debug=True)