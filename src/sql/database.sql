CREATE DATABASE node_mysql_ts;

CREATE TABLE posts(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title varchar(200) NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    create_at TIMESTAMP DEFAULT CURRENT_TIME
);

DESCRIBE posts;