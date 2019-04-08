CREATE TABLE employees (
  id BINARY(16) PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  employee_no CHAR(8),
  created_at TIMESTAMP DEFAULT NOW()
);