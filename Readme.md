# Simple Weather Application
A simple weather web application was created using node.js and deployed using Heroku. The backend node.js code is responsible for servering the associated web pages, as well as acting as API endpoints in order to aquire perform the needed geocoding, and forecasting.

## Heroku
[Heroku](https://www.heroku.com/) is a tool we can use to deploy node application, and is the tool that has been used to deplot this simple Weather Application. 

### Deploting the Server
We need to install the [cli tools](https://devcenter.heroku.com/articles/heroku-cli) to deploy the application to a live server.

Once Heroku has been installed we can login use the following command to login to the Heroku service from your terminal:
```
heroku login
```

We can then setup an SSH connection with Heroku with the following command:
```
heroku keys:add
```
*If you are told there is no existing SSH Key, type **Y** to let Heroku create one*

The next step is to create the Heroku application using the command listed below. This will provide us with two URLs. The first being the project link on Heroku, and the second being a github link where we should upload our source code for hosting on the Heroku services.
```
heroku create application_here
```

The next step is telling Heroku which file to run. We do this using the **scripts** object in ``package.json``. We are able to specify which file to run on startup by editing the **package.json** file as follows:
```
"scripts": {
    "start":"node src/app.js"
  },
...
```

