# Shadow Blog - Setup & Strategy Guide

## Project Setup

1.  **Firebase Project Creation**
    *   Go to [Firebase Console](https://console.firebase.google.com/).
    *   Create a new project "Shadow Blog".
    *   Keep Analytics enabled.

2.  **Enable Services**
    *   **Authentication**: Enable "Email/Password" sign-in provider.
    *   **Firestore Database**: Create database in "Production Mode".
    *   **Storage**: Enable Storage.

3.  **Local Configuration**
    *   In Firebase Console, go to Project Settings > General > "Your apps".
    *   Register a web app.
    *   Copy the `firebaseConfig` object.
    *   Open `public/js/firebase-config.js` in this project.
    *   Replace the placeholder config with your actual keys.

4.  **Security Rules**
    *   Copy the contents of `firestore.rules` to the Firestore Rules tab in Console.
    *   Copy the contents of `storage.rules` to the Storage Rules tab in Console.

5.  **Running Locally**
    *   You can simply open `public/index.html` in your browser.
    *   For a better experience, use a local server (e.g., VS Code "Live Server" extension).
    *   **Or install Firebase CLI:** `npm install -g firebase-tools`
    *   Login: `firebase login`
    *   Init: `firebase init hosting` (set `public` as public directory).
    *   Serve: `firebase serve`

6.  **Admin Access**
    *   Go to Firebase Console > Authentication > Users.
    *   Add a user (your email/password).
    *   Visit `http://localhost:5000/admin.html` (or your local URL).
    *   Login with those credentials.

## LinkedIn Traffic Funnel Strategy

**Goal**: Drive high-quality traffic from LinkedIn to your Shadow Blog.

### 1. The "Hook" Post Structure
Do not just paste the link. Algorithm hates that.
*   **Headline**: Provocative statement or question related to the blog post.
*   **Body**: a 3-5 line summary or "teaser" of the value.
*   **The "See More"**: Cut off the valuable part so they have to click "see more" on LinkedIn (dwell time).
*   **Call to Action**: "Read the full deep-dive here: [LINK]" in the *comments* or *bottom of post* (experiment with both).

### 2. Profile Optimization
*   **Headline**: "Writing about [Your Niche] at Shadow Blog".
*   **Featured Section**: Add a link to your best Shadow Blog post with a custom thumbnail.

### 3. Content Repurposing
*   **Carousel**: Turn the headers of your blog post into a PDF carousel. Last slide: "Read full details on my blog (link in bio/comments)".
*   **Snippet**: Screenshot the "Hero" section of your blog post (it looks premium!) and post it as an image.

### 4. The "loop"
*   In every blog post, I've added a "Connect on LinkedIn" button at the bottom.
*   This creates a flywheel: LinkedIn -> Blog -> LinkedIn Connection -> More reach for next post.
