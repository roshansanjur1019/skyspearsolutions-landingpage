# Roshan's Portfolio

A high-performance, futuristic portfolio website built with React, Vite, and Framer Motion.

## Features

-   **Futuristic Design**: Dark theme with neon accents, glassmorphism, and glowing animations.
-   **Responsive**: Fully responsive layout for all devices.
-   **Animations**: Smooth page transitions and scroll animations using Framer Motion.
-   **Contact Form**: Integrated with EmailJS for direct email submissions.

## Tech Stack

-   **React**: UI Library
-   **Vite**: Build Tool
-   **Framer Motion**: Animation Library
-   **Vanilla CSS**: Custom styling with variables and utility classes
-   **React Icons**: Icon set
-   **EmailJS**: Client-side email service

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## Email Configuration (Important!)

To make the contact form work and receive emails to `roshansanjur@gmail.com`, you need to set up EmailJS:

1.  Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account.
2.  Add a **New Service** (e.g., Gmail).
3.  Create a **New Email Template**.
    -   In the template, use variables like `{{user_name}}`, `{{user_email}}`, and `{{message}}` to display the form data.
    -   Set the "To Email" to `roshansanjur@gmail.com`.
4.  Go to `src/components/Contact.jsx` and replace the placeholders with your actual keys:
    ```javascript
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
    ```
    -   You can find these in your EmailJS dashboard (Account > API Keys for Public Key).

## Customization

-   **Content**: Edit the component files in `src/components/` to update text and data.
-   **Styles**: Modify `src/index.css` for global theme changes or individual component CSS files.
-   **Images**: Add new project images to `public/assets/` and update `src/components/Portfolio.jsx`.
