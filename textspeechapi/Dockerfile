# base image  
FROM python:3.9-alpine as base
# setup environment variable  
ENV DockerHOME=/home/app

# set work directory  
RUN mkdir -p $DockerHOME  

# where your code lives  
WORKDIR $DockerHOME  


# install dependencies  
RUN pip install --upgrade pip  

# installing dependencies
COPY requirements.txt /home/app/requirements.txt
RUN pip install -r requirements.txt

#multistage build
FROM python:3.9-alpine
COPY --from=base /usr/local/lib/python3.9/site-packages/ /usr/local/lib/python3.9/site-packages/
COPY --from=base /usr/local/bin/ /usr/local/bin
# copy whole project to your docker home directory. 
COPY . $DockerHOME   
# set environment variables  
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1  
# port where the Django app runs  
EXPOSE 8000  
# start server  
CMD python manage.py runserver 0.0.0.0:8000