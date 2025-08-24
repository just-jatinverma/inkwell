# Inkwell

Inkwell is a robust and scalable backend API for a blogging platform. It provides a complete set of features for user authentication, content management, and administration.

## Features

*   **User Authentication:** Secure user registration, login, and logout using JWT.
*   **Role-Based Access Control:** Differentiated access for users and administrators.
*   **Post Management:** Create, read, update, and delete blog posts.
*   **Comment Management:** Add and manage comments on posts.
*   **Category Management:** Organize posts with categories.
*   **Admin Panel:** Administrative endpoints for managing the platform.
*   **Rate Limiting:** Protection against brute-force attacks.

## API Endpoints

Here is a summary of the available API endpoints:

### Authentication

*   `POST /api/v1/auth/register`: Register a new user.
*   `POST /api/v1/auth/login`: Log in a user.
*   `GET /api/v1/auth/me`: Get the current user's profile.
*   `POST /api/v1/auth/logout`: Log out a user.

### Posts

*   `GET /api/v1/post`: Get all posts.
*   `GET /api/v1/post/:id`: Get a single post by ID.
*   `POST /api/v1/post`: Create a new post.
*   `PUT /api/v1/post/:id`: Update a post.
*   `DELETE /api/v1/post/:id`: Delete a post.

### Comments

*   `GET /api/v1/comment/:postId`: Get all comments for a post.
*   `POST /api/v1/comment/:postId`: Add a comment to a post.
*   `PUT /api/v1/comment/:id`: Update a comment.
*   `DELETE /api/v1/comment/:id`: Delete a comment.

### Categories

*   `GET /api/v1/category`: Get all categories.
*   `POST /api/v1/category`: Create a new category.
*   `PUT /api/v1/category/:id`: Update a category.
*   `DELETE /api/v1/category/:id`: Delete a category.

### Admin

*   Admin-specific routes under `/api/v1/admin`.

## Technologies Used

*   **Node.js:** JavaScript runtime environment.
*   **Express:** Web framework for Node.js.
*   **MongoDB:** NoSQL database.
*   **Mongoose:** ODM for MongoDB.
*   **JSON Web Tokens (JWT):** For secure authentication.
*   **bcrypt:** For password hashing.
*   **TypeScript:** Superset of JavaScript for type safety.

## Installation and Usage

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/inkwell.git
    cd inkwell
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory and add the following variables:
    ```
    PORT=3000
    MONGODB_URI=your_mongodb_connection_string
    ACCESS_TOKEN_SECRET=your_access_token_secret
    REFRESH_TOKEN_SECRET=your_refresh_token_secret
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

    The server will start on `http://localhost:3000`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the ISC License.
