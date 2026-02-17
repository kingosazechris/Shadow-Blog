# Hosting Shadow Blog on GitHub Pages (Free & Static)

Great news! Your blog is now **100% Static**.
This means you don't need Firebase, database passwords, or complex hosting.
You can host it directly on GitHub for free.

## Step 1: Push your code to GitHub

1.  Open your **Source Control** tab in VS Code (the branch icon on the left).
2.  Type a message like "Converted to static site".
3.  Click **Commit** (or checkmark).
4.  Click **Sync Changes** (or Push).

## Step 2: Enable GitHub Pages

1.  Go to your repository on **GitHub.com**.
2.  Click **Settings** (top right tab).
3.  Click **Pages** (sidebar on the left).
4.  Under **Build and deployment**:
    *   Source: **Deploy from a branch**
    *   Branch: **main** (or master)
    *   Folder: **/public** (Very important! Select `/public`, not root)
5.  Click **Save**.

## Step 3: View your Site!

*   Wait about 1-2 minutes.
*   Refresh the page.
*   You will see a link at the top: `https://YOUR_USERNAME.github.io/REPO_NAME/`
*   Click it to see your live blog!

---

## How to Post New Articles

Since we removed the database login, here is how you post:

1.  **Open `admin.html`** in your browser locally.
    *   (Right-click `public/admin.html` in VS Code -> "Open in Default Browser").
2.  **Fill out the form** (Title, Content, Image).
3.  Click **"Generate JSON Code"**.
4.  Copy the code it gives you.
5.  **Open `public/data/posts.json`** in VS Code.
6.  Paste the code at the top of the list (inside the `[ ... ]`).
    *   *Make sure to add a comma if needed!*
7.  **Push to GitHub**.
    *   Your site will auto-update in ~1 minute.

## How to Add Images

1.  Drag your image file into `public/assets/`.
2.  In the Admin Generator, for "Image URL", type: `assets/YOUR_IMAGE_NAME.jpg`.
