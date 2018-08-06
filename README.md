# scheduler

1. git clone
2. cd project directory
3. npm i
4. npm run prod (started backend)
5. cd client
6. npm i
7. npm start
8. open http://localhost:3000


**!** CLEAR LOCALSTORAGE BEFORE USING THIS APPLICATION

**!!** API examples in project root directory, file **api.http**

**!!!** Login credentials: email **admin@admin.com**, password **qwerty123**

**!!!!** You can create your own account via curl request to backend (see file **api.http**, first request)

**!!!!!** if you want to connect to your own DB, then specify DB credentials (host, port, db_name, username, password) in ./src/config.js


UI/UX info:
1. Click 'Download' to **download all events in JSON** format
2. Click on event on calender to get some information about it
3. Select some time perion on calender with the help of mouse to **create new event**
4. Click 'Delete' on event info modal to **delete event**
