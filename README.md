# E-commerce-follow-along
## Overview
This project is a full-stack e-commerce application built using the **MERN Stack**. It offers a hands-on experience with building scalable, secure, and interactive web applications. 
Through mentor-guided sessions, you will learn to develop both front-end and back-end features, implement secure authentication, and design robust database schemas.  
---

## Key Features of the Project  

### 1. MERN Stack Development  
- Learn to utilize the MERN stack (MongoDB, Express, React, Node.js) to build a fully functional e-commerce application.  
- Gain insights into the **JavaScript-only approach**, allowing you to use a single programming language across the entire stack.  

### 2. REST API Creation  
- Develop scalable and efficient **REST APIs** to handle key operations, including:  
  - **User Authentication**: Secure login and registration.  
  - **Product Management**: Add, update, and retrieve product details.  
  - **Order Handling**: Manage customer orders and transactions.  
- Use standard HTTP methods and serve data in a structured JSON format.  

### 3. Authentication  
- Learn to implement **secure authentication mechanisms**, ensuring data privacy and protecting user information.  
- Explore authentication techniques to verify user identity and control access to sensitive resources.  

### 4. Database Schema Design  
- Design and structure data models using **MongoDB** for storing user, product, and order data.  
- Optimize schema design to ensure efficiency and scalability.  

### 5. Backend Development  
- Set up robust server-side logic using **Node.js** and **Express**.  
- Build APIs that integrate seamlessly with the front-end, ensuring smooth user experiences.  

### 6. Frontend with React  
- Use your existing knowledge of **React** to develop a responsive and intuitive user interface.  
- Implement features like product browsing, cart management, and order placement.  

---

## Core Concepts Covered  

### 1. Overview of the MERN Stack  
- Learn why the MERN stack is favored for its **streamlined development process**.  
- Understand the **JavaScript-only approach**, enabling consistent coding practices across front-end and back-end development.  

### 2. REST API Structure and Endpoints  
- Explore the architecture of **REST APIs** and how to design endpoints for:  
  - **User Authentication**: Register and log in users.  
  - **Product Management**: Add, update, and retrieve product data.  
  - **Order Handling**: Manage customer orders.  
- Learn how APIs interact with the database to serve data in JSON format.  

### 3. Basics of Database Schema Design  
- Understand the principles of schema design in **MongoDB**, including data structure and relationships.  
- Learn to optimize your schema for performance and scalability.  

### 4. Role of Authentication in Web Applications  
- Discover how authentication ensures secure access to sensitive resources.  
- Implement user authentication features, including registration, login, and access control.  

## **Milestone 2: Project Setup and Login Page**

### What was achieved:
- **Backend Setup:**
  - Used Node.js and Express to create a backend server.
  - Configured the server to listen on a designated port.
  - Integrated MongoDB for efficient data storage.
  - Verified the connection between the server and MongoDB.

- **Login Page Development:**
  - Designed the login page UI.
  - Connected the frontend with the backend to handle user login requests.
  - Set up form validation and error handling for login inputs.

- **Backend Enhancements:**
  - Created a `User` model for managing user data.
  - Developed a `UserController` for handling login functionality.
  - Integrated **Multer** for file uploads to manage user-related file storage.

---

## **Milestone 3: Product Page and Database Integration**

### What will be achieved:
- Build the product listing page.
- Connect the product page with the MongoDB database to fetch and display product data dynamically.
- Create a `Product` model for storing and managing product information.
- Develop routes to handle:
  - Fetching all products.
  - Adding new products.
  - Deleting or editing products.

---

## **Milestone 4: Checkout and Deployment**

### What will be achieved:
- Implement a fully functional checkout system:
  - Shopping cart functionality.
  - Order summary and confirmation.
  - Payment gateway integration (e.g., Stripe or PayPal).
- Test the end-to-end application.
- Deploy the application to a hosting platform (e.g., Vercel, Netlify, or Heroku).
- Ensure the project is production-ready with all dependencies and configurations finalized.

### Milestone 5: Creating the Signup Page
#### In this milestone, we focused on developing the signup page to enable users to create an account within the application. Key achievements include: Signup Page Implementation: Developed the Signup.jsx component with a user-friendly interface for account registration. Included form fields for user details such as name, email, and password. Form Validation: Added client-side validation logic to ensure proper input formatting and error messages for invalid entries. Integration with Routing: Configured navigation to and from the signup page using React Router for seamless user flow. Styling: Enhanced the design of the signup page to align with the application's overall styling for a consistent user experience. Code Organization: Refactored the code into reusable components where possible to promote cleaner and more maintainable code. This milestone enhances the user experience by allowing new users to register, paving the way for further integration with back-end user authentication systems.

## Milestone 6: What Was Achieved

In this milestone, we completed the following:

- Implemented advanced product filtering and search functionality.
- Optimized backend API endpoints for better performance.
- Integrated payment processing using Stripe.
- Enhanced user authentication with JWT expiration handling.
- Improved UI/UX by refining product pages and checkout flows.
- Fixed bugs from previous milestones and improved error handling.


# Milestone 7: User Login

This milestone focused on implementing a secure user login endpoint. Key achievements include:

* **Secure Password Handling:** Implemented bcrypt hashing for passwords, ensuring they are never stored in plain text.  This protects user credentials even in the event of a database breach.
* **Credential Validation:**  Developed a login endpoint that validates user credentials by comparing the bcrypt hash of the entered password with the stored hash.
* **User Authentication:** Successfully implemented user authentication based on validated credentials.  This allows the system to identify and authorize users.
* **Improved Security:**  Enhanced overall application security by implementing secure password handling practices.

# Milestone 8: Designing the Homepage and Card Component
In this milestone, we focused on creating a visually appealing and functional homepage layout with reusable components for showcasing products. Key achievements include:

1. Card Component:
Designed a reusable card component for displaying product details.
Configured props to dynamically render product information such as:
Product Name
Product Image
Product Price
2. Homepage Layout:
Set up a clean and responsive homepage layout for displaying multiple product cards.
Utilized grid layout and flexbox to ensure a visually consistent and user-friendly design.
3. Component Reusability:
Ensured the card component is modular and adaptable for use across different pages of the application.
4. Code Submission:
Pushed the updated code to the GitHub repository.

# Milestone 9: Creating the Product Form
In this milestone, we focused on building a form that allows users to add products, including support for multiple product images. Key achievements include:

1. Product Form Implementation:
Designed and developed a form to capture essential product details, such as:
Product Name
Description
Price
Category
Multiple Product Images (file upload support)
2. Image Upload Handling:
Implemented functionality to allow multiple product images to be uploaded.
Ensured proper validation for image formats and file sizes.
3. Data Management:
Configured state management to handle form inputs efficiently.
Validated user inputs before submission to ensure accurate product data.

# Milestone 10: Creating the Product Schema and API Endpoint
In this milestone, we focused on defining the structure of product data and creating an API endpoint to store product details in MongoDB.

1. Product Schema Definition:
Defined a structured product schema using Mongoose to store product data in MongoDB.
Ensured each field has proper validation to maintain data integrity:
Name: Required, string
Description: Required, string
Price: Required, number, with validation for non-negative values
Image URL(s): Required, array of strings for multiple image storage
Category: Required, string
CreatedAt: Automatically generated timestamp
2. Endpoint Creation:
Developed a POST endpoint (/api/products) to accept product details from the frontend.
Implemented validation to ensure only correctly formatted data is stored in the database.
Saved product information to MongoDB using Mongoose models.
3. Data Validation & Integrity:
Enforced strict validation to prevent invalid or incomplete product entries.
Returned appropriate error messages for missing or incorrect data inputs.

