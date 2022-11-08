
# Livecoding useEffect

  

## How to start project

  

### Setup database

  

You need to update **.env** file in server folder to connect your own mySql server

  

```

DB_USER=your_user

DB_PASSWORD=your_password

DB_NAME=your_database

```

  

Then, import **users.sql**

  

```

USER your_database;

source /path/to/file/users.sql

```

  

**NOTE** remplate **your_[...]** with your informations and **/path/to/file** with real path

  

### Start server

  

Go to **server** folder, install dependancies and start in dev mode

  

```

cd server

npm install

npm run dev

```

  

### Start client

  

Go to **client** folder, install dependancies and start in dev mode

  

```

cd client

npm install

npm start

```