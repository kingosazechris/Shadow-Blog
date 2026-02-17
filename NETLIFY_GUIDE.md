# Moving Shadow Blog to Netlify (Free Hosting)

Plan: We will host the website files on **Netlify** (100% free, no credit card usually required) by connecting it to **GitHub**. We will keep using Firebase for the **Database** and **Authentication** because that part is already working and is free.

## Step 1: Upload your code to GitHub

Since I cannot log in to your GitHub account, you need to do this part:

1.  **Create a Repository**:
    *   Go to [GitHub.com](https://github.com/new) and sign in.
    *   Create a new repository named `shadow-blog`.
    *   Make it **Public** or **Private** (Private is fine).
    *   **Do not** initialize with README or .gitignore (keep it empty).

2.  **Push your code** (Run these commands in your VS Code terminal):
    ```bash
    git init
    git add .
    git commit -m "Initial commit of Shadow Blog"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/shadow-blog.git
    git push -u origin main
    ```
    *(Replace `YOUR_USERNAME` with your actual GitHub username)*

## Step 2: Deploy on Netlify

1.  Go to [Netlify.com](https://www.netlify.com/) and Sign Up (you can sign up with GitHub).
2.  Once logged in, click **"Add new site"** > **"Import from an existing project"**.
3.  Select **GitHub**.
4.  Authorize Netlify to see your repositories.
5.  Select `shadow-blog` from the list.
6.  **Build Settings**:
    *   **Build Command**: (Leave empty)
    *   **Publish directory**: `public`
7.  Click **Deploy Shadow Blog**.

## Step 3: Domain & Finish

*   Netlify will give you a URL like `musical-dolphin-123.netlify.app`.
*   You can change this in **Site Settings** > **Change site name** to something like `shadow-blog-chris.netlify.app`.
*   **Important**: Your existing functionality (Admin Panel, Posting) will work immediately because it connects directly to Firebase from the browser!

## Note on Images
You mentioned wanting to avoid paying.
*   **Firebase Storage** (where images are stored) has a generous free tier (5GB stored, 1GB downloads/day). You generally **do not** need to pay unless you have thousands of visitors or massive images.
*   If you see a payment prompt in Firebase, verify you are on the **Spark** (Free) plan.
