# Firebase Setup & Deployment Guide

Since this is your first time, I've broken down the exact steps to get your Shadow Blog live. 

## Part 1: Firebase Console Setup (The "Backend")

You need to enable three services in your Firebase project dashboard before the code will work.

1.  **Go to your Project Dashboard**: [console.firebase.google.com](https://console.firebase.google.com/) and click on "Shadow Blog".

2.  **Enable Authentication**:
    *   Click **Build** > **Authentication** in the left sidebar.
    *   Click **Get Started**.
    *   Select **Email/Password** from the list of Sign-in providers.
    *   Toggle **Enable** (leave "Email link" disabled).
    *   Click **Save**.
    *   *(Optional)* Go to the **Users** tab and click **Add user** to create your admin account now (e.g., `admin@shadowblog.com` / `password123`).

3.  **Enable Firestore Database**:
    *   Click **Build** > **Firestore Database** in the left sidebar.
    *   Click **Create Database**.
    *   **Choose Location**: Select a region close to you (e.g., `nam5 (us-central)`).
    *   **Secure rules**: Start in **Production mode**.
    *   Click **Create**.
    *   *(Crucial)* Go to the **Rules** tab in Firestore and paste the code from the `firestore.rules` file I created in your project folder.

4.  **Enable Storage**:
    *   Click **Build** > **Storage** in the left sidebar.
    *   Click **Get Started**.
    *   Start in **Production mode**.
    *   Click **Done**.
    *   *(Crucial)* Go to the **Rules** tab in Storage and paste the code from the `storage.rules` file.

---

## Part 2: Install Tools & Deploy (The "Hosting")

Now we need to upload your `public` folder to Google's servers.

### Step 1: Install Firebase CLI
Since you have Node.js installed, open your terminal (Command Prompt or PowerShell) and run:
`npm install -g firebase-tools`

### Step 2: Login
Run this command and follow the browser prompt to login with your Google account:
`firebase login`

### Step 3: Initialize Project
Run this command inside your project folder (`Shadow Blog`):
`firebase init hosting`

**Answer the questions exactly like this:**
*   **Are you ready to proceed?** -> `Y`
*   **Please select an option:** -> Select `Use an existing project`
*   **Select a default Firebase project:** -> Choose `shadow-blog-8b7bb`
*   **What do you want to use as your public directory?** -> `public`
*   **Configure as a single-page app (rewrite all urls to /index.html)?** -> `No` (We have separate html files)
*   **Set up automatic builds and deploys with GitHub?** -> `No`
*   **File public/index.html already exists. Overwrite?** -> `No` (IMPORTANT: Say NO so you don't lose our work!)
*   **File public/404.html already exists. Overwrite?** -> `No`

### Step 4: Deploy
Finally, make your site live:
`firebase deploy`

It will give you a **Hosting URL** (e.g., `https://shadow-blog-8b7bb.web.app`). Click it to see your live site!
