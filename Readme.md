
# Docker Setup using simple Frontend Backend Setup

Following things are used in the setup
- Node.js - Backend
- React.js - Frontend
- MySQL - Database
- Redis - Caching the visit count

## How to Run this Project

Make sure Docker is installed and running on your computer/server.

2. Run the following command to create the docker containers
~~~
docker compose up --build
~~~

3. Create the Tables in MySQL
~~~
docker exec -i fullstack-app-mysql-1 \
  mysql -u root -ppassword  -e "
  CREATE DATABASE IF NOT EXISTS testdb;
  USE testdb;
  CREATE TABLE IF NOT EXISTS messages(
    id INT PRIMARY KEY AUTO_INCREMENT,
    message VARCHAR(256)
  );
"
~~~

3. Now got to the Browser and hit http://localhost:5001/health For hitting the Backend

4. To hit the frontend go to the http://localhost:3000


Congratulations, You have successfully installed and run the docker containers 🚀
