# VICSR Backend

### VICSR Server
The VICSR Server is implemented with Django. The components of the VICSR Server have been built asDjango apps (Account Management, Document Management, and Vocabulary Management). As of now they are empty/starting points that need to still be fully implemented. 

When developing each app/component: 
* Models, serializers, and views are needed to create APIs. 
* URL configurations will also need to be set up.

When setting up the development environment, a virtual environment should be used.

[Django Documentation](https://docs.djangoproject.com/en/4.0/)


### Database
The VICSR Database is implemented with PostgreSQL. The live database will be hosted on Heroku, but for development requires installation on the developer's local machine. Follow instructions for your OS [here](https://www.postgresqltutorial.com/postgresql-getting-started/).  Heroku supports version 13 by default.

After PostgreSQL is installed, roughly follow this [article](https://stackpython.medium.com/how-to-start-django-project-with-a-database-postgresql-aaa1d74659d8) to set up a new database named <i>vicsr_local</i>. The settings.py file is already configured, but the user should add their password in the password field.

From then onward, the models.py folder is used to build the base structure of classes/tables in the database. In PyCharm, go to <i>tools -> Run manage.py Task </i> and run the command <i>makemigrations 'appname' </i> to build table(s) within the Django project. After, run the command <i>migrate 'appname'</i> to move to local database.
