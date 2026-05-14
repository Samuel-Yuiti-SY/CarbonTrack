
from flask import Flask, render_template, request, redirect, url_for, session
from functools import wraps

app = Flask(__name__)
app.secret_key = "carbontrack-demo"

def login_required(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if not session.get('user'):
            return redirect(url_for('login'))
        return fn(*args, **kwargs)
    return wrapper

@app.route('/', methods=['GET','POST'])
def login():
    if request.method == 'POST':
        if request.form.get('usuario')=='teste' and request.form.get('senha')=='1234':
            session['user'] = 'teste'
            session['user_name'] = 'Samuel'
            session['company'] = 'Empresa Teste'
            return redirect(url_for('dashboard'))
        return render_template('login.html', erro='Usuário ou senha inválidos')
    if session.get('user'):
        return redirect(url_for('dashboard'))
    return render_template('login.html')

@app.route('/dashboard')
@login_required
def dashboard():
    return render_template('dashboard.html')

@app.route('/emissoes')
@login_required
def emissoes():
    return render_template('emissoes.html')

@app.route('/relatorios')
@login_required
def relatorios():
    return render_template('relatorios.html')

@app.route('/caminhoes')
@login_required
def caminhoes():
    return render_template('caminhoes.html')

@app.route('/config')
@login_required
def config():
    return render_template('config.html')

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
