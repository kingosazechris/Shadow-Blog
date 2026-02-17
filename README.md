# Shadow Blog

A premium, static tech blog platform built for speed, security, and simplicity.

## 🚀 Features
- **100% Static**: No database, no backend, no login forms.
- **Secure**: Impossible to hack via SQL injection or brute force.
- **Free Hosting**: Runs perfectly on GitHub Pages.
- **Premium Design**: Dark mode, responsive grid, professional typography.

## 📝 How to Publish (AI-Assisted Workflow)

Since we removed the public Admin Panel for security, publishing is done via code.

1.  **Format your post**: Create a JSON object with title, content, image, and date.
2.  **Add to Data**: Paste it into `public/data/posts.json`.
3.  **Push**: Commit and push to GitHub.

### Example Post Format
```json
{
    "id": "unique-id-123",
    "title": "My New Article",
    "excerpt": "A short summary for the home page card.",
    "content": "<p>Your full HTML content here...</p>",
    "imageURL": "https://images.unsplash.com/photo-...",
    "createdAt": "2026-02-17T12:00:00.000Z",
    "slug": "my-new-article"
}
```

## 🛠 Project Structure
- `/public/data/posts.json`: The "Database" file.
- `/public/assets`: Store your local images here.
- `/public/js/main.js`: Core logic (fetches JSON and renders HTML).
- `/public/css/styles.css`: Design system.

## 🌍 Hosting
This site is configured to run on **GitHub Pages**.
- Go to Repo Settings > Pages.
- Set Source to `Deploy from a branch`.
- Select `main` branch and `/public` folder.
