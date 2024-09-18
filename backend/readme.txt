## Iniciar virtual environment
# Create a virtual environment to isolate our package dependencies locally
python3 -m venv env
source env/bin/activate  # On Windows use `env\Scripts\activate` 


## Migrar datos
python manage.py makemigrations
python manage.py migrate

## crear super usuario
python manage.py createsuperuser --username admin --email admin@example.com

## run server api
python manage.py runserver