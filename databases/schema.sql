USE ruby_continental;

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  role ENUM('Owner', 'Manager', 'Accountant', 'Staff') DEFAULT 'Staff',
  employee_no CHAR(8) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
);