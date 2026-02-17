// Main JavaScript - Static Version

// DOM Elements
const postsGrid = document.getElementById('posts-grid');
const heroSection = document.getElementById('hero-section');
const postContainer = document.getElementById('post-container');

// State
let posts = [];

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await fetchPosts();

        // Router based on URL
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get('id');

        if (window.location.pathname.includes('post.html')) {
            if (postId) {
                renderPost(postId);
            } else {
                window.location.href = 'index.html';
            }
        } else if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
            renderHomepage();
        }

        setupMobileMenu();

    } catch (error) {
        console.error("Initialization error:", error);
    }
});

// Fetch Posts from JSON file
async function fetchPosts() {
    try {
        const response = await fetch('data/posts.json');
        if (!response.ok) throw new Error('Failed to load posts');
        posts = await response.json();

        // Sort by date (newest first)
        posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    } catch (error) {
        console.error("Error fetching posts:", error);
        if (postsGrid) postsGrid.innerHTML = '<p>Failed to load posts.</p>';
    }
}

// Render Homepage (Hero + Grid)
function renderHomepage() {
    if (!postsGrid) return;

    postsGrid.innerHTML = '';

    if (posts.length === 0) {
        postsGrid.innerHTML = '<p>No posts found.</p>';
        return;
    }

    // 1. Render Hero (First Post)
    const featuredPost = posts[0];
    if (heroSection) {
        heroSection.innerHTML = `
            <div class="container hero-content">
                <div class="hero-meta">Featured Story • ${formatDate(featuredPost.createdAt)}</div>
                <h1>${featuredPost.title}</h1>
                <p>${featuredPost.excerpt}</p>
                <a href="post.html?id=${featuredPost.id}" class="read-more">Read Full Story</a>
            </div>
        `;
        // Optional: Add background image to hero if available
        if (featuredPost.imageURL) {
            heroSection.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${featuredPost.imageURL}')`;
            heroSection.style.backgroundSize = 'cover';
            heroSection.style.backgroundPosition = 'center';
        }
    }

    // 2. Render Grid (Remaining Posts)
    const remainingPosts = posts.slice(1);

    // If only 1 post, maybe don't show grid or show "More coming soon"
    if (remainingPosts.length === 0) {
        // Optional logic
    }

    remainingPosts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'post-card';
        card.innerHTML = `
            <div class="post-image-container">
                <img src="${post.imageURL || 'assets/placeholder.jpg'}" alt="${post.title}" class="post-image" loading="lazy">
            </div>
            <div class="post-content">
                <div class="post-date">${formatDate(post.createdAt)}</div>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <a href="post.html?id=${post.id}" class="read-more">Read Article</a>
            </div>
        `;
        postsGrid.appendChild(card);
    });
}

// Render Single Post Page
function renderPost(postId) {
    if (!postContainer) return;

    const post = posts.find(p => p.id === postId);

    if (post) {
        // Update Page Title
        document.title = `${post.title} | Shadow Blog`;

        // Update SEO Meta Tags
        updateMetaTags(post);

        postContainer.innerHTML = `
            <div class="post-header">
                <div class="post-meta">${formatDate(post.createdAt)} • 5 min read</div>
                <h1>${post.title}</h1>
            </div>

            <img src="${post.imageURL}" alt="${post.title}" class="post-hero-image">
            
            <div class="post-content">
                ${post.content}
            </div>

            <div class="linkedin-connect">
                <h3>Enjoyed this article?</h3>
                <p>Connect with me on LinkedIn for more insights on tech and design.</p>
                <a href="https://www.linkedin.com/in/king-chris-a3b8aa333" target="_blank" class="btn-linkedin">Connect on LinkedIn</a>
            </div>
        `;
    } else {
        postContainer.innerHTML = '<h2>Post not found</h2><a href="index.html">Return Home</a>';
    }
}

// Helper: Format Date
function formatDate(isoString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoString).toLocaleDateString('en-US', options);
}

// Helper: Update Meta Tags
function updateMetaTags(post) {
    // Basic way to update meta tags for social sharing
    // Note: detailed open graph tags often require server-side rendering, 
    // but this helps for client-side tools that execute JS.

    // const metaTitle = document.querySelector('meta[property="og:title"]');
    // if(metaTitle) metaTitle.content = post.title;
    // ... logic ...
}

// Mobile Menu
function setupMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const links = document.querySelector('.nav-links');

    if (btn && links) {
        btn.addEventListener('click', () => {
            links.classList.toggle('open');
            // Animate hamburger to X
            // btn.classList.toggle('active');
        });
    }
}
