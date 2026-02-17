// Admin Generator Logic

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('generator-form');
    const outputSection = document.getElementById('output-section');
    const jsonOutput = document.getElementById('json-output');
    const copyBtn = document.getElementById('copy-btn');
    const copyMsg = document.getElementById('copy-msg');

    // Handle Generation
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get Values
        const title = document.getElementById('post-title').value;
        const excerpt = document.getElementById('post-excerpt').value;
        const image = document.getElementById('post-image').value;
        const content = document.getElementById('post-content').value;

        // Auto-generate fields
        const id = generateId();
        const createdAt = new Date().toISOString(); // Current timestamp
        const slug = createSlug(title);

        // Create Object
        const postObject = {
            id: id,
            title: title,
            excerpt: excerpt,
            content: content,
            imageURL: image,
            createdAt: createdAt,
            slug: slug
        };

        // Format JSON (without outer brackets, so it's easy to paste into the array)
        // We format it as a single object with comma, reminding user to handle the comma
        const jsonString = JSON.stringify(postObject, null, 4);

        // Display
        jsonOutput.innerText = jsonString + ",";
        outputSection.classList.remove('hidden');

        // Scroll to output
        outputSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Handle Copy
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(jsonOutput.innerText).then(() => {
            copyMsg.style.opacity = '1';
            setTimeout(() => {
                copyMsg.style.opacity = '0';
            }, 2000);
        });
    });
});

// Helper: Generate randomized Short ID
function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

// Helper: Create URL-friendly slug
function createSlug(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}
