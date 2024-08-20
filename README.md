# Certificate-Management-System
The system allows users to input their roll number and receive a downloadable certificate in PDF format. The certificate template dynamically populates fields such as name, father's name, etc., based on the provided roll number.
# Objective
The objective of this project is to develop a standalone web page to manage certificate courses offered byJaidevi Rajaram Charity(https://www.jaidevirajaramcharity.org/). The system should streamline the process of issuing certificates and ensure a seamless user experience.
# Functional Requirements
User Input: Provide a user interface for users to input their roll number. Validate roll numbers to ensure they exist within the NGO's database.

Certificate Generation: Upon submission of a valid roll number, generate a certificate in PDF format. Populate predefined fields such as name, father's name, etc., dynamically based on the provided roll number.
# Non-Functional Requirements
Usability: Design an intuitive and easy-to-navigate user interface. Provide error messages for invalid inputs or system failures.

Performance: Ensure prompt response to user requests with minimal latency. Make certificate generation and download processes efficient to minimize user wait times.

Security: Handle user inputs and generated certificates securely to prevent unauthorized access or tampering. Restrict access to authorized users only.

Compatibility: Ensure compatibility with commonly used web browsers such as Chrome, Firefox, and Safari. Ensure accessibility on mobile devices.
# Technologies Used
Frontend: JavaScript, HTML, CSS
Backend: Node.js, Express.js
Database: MongoDB
PDF Generation: pdf-kit
