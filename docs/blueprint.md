# **App Name**: Fresh Fruit Alliances

## Core Features:

- Responsive Layout: Ensure the website adapts seamlessly to various screen sizes using mobile-first CSS, CSS Grid, and Flexbox. Use a max-width container of ~1200px with 24px gutters.
- Smooth Scrolling and Active Highlighting: Implement smooth scrolling for navigation links and highlight the active link based on the user's current scroll position using JavaScript.
- Image Optimization: Lazy-load all non-critical images and use srcset where appropriate to optimize performance. Provide an /assets/ folder with placeholder images.
- Accessibility: Adhere to WCAG AA guidelines to ensure the website is accessible to all users. Provide clear semantic markup and alternative text for images.
- Contact Form Submission to Firebase: Implement a contact form with client-side validation. Upon submission, the form data will be written to a Firebase Firestore collection (contact_messages) using the Firebase Web SDK. The system provides basic guidance for setting up security rules.
- SEO Optimization: Incorporate SEO meta tags, including title, description, and Open Graph tags. Also, add a favicon and a basic sitemap (/sitemap.xml) + robots.txt to improve search engine visibility.
- Animation Preference: Add support for 'prefers-reduced-motion' to disable animations based on user preferences.
- Our Network Section: Implement a two-column section displaying information about the company's network. The left column will contain text, while the right column will feature a static PNG of an India map with pins representing distribution hubs and areas of presence.
- Our Clients Section: Create a pale green band section showcasing the company's clients. This section will feature a responsive logo grid with client logos that transition from grayscale to color on hover.
- Our Blogs Section: Design a section with three blog cards in a row (stacking on mobile). Each card will include an image, title, excerpt, and a 'Read more' link. This feature will use a blogs.json file or Firestore collection.
- Quality & Food Safety Banner: Implement a full-width green banner displaying certification logos related to quality and food safety management.
- Contact Us Section with Map: Design a split Contact Us section with an orchard photo background. The left column will contain contact information and a form, while the right column will feature an embedded Google Map centered on the company's Delhi office.

## Style Guidelines:

- Primary color: Brand green (#0C8F3A) to represent freshness and nature.
- Background color: Lighter green (#E9F6EE) to create a soft and inviting backdrop.
- Accent color: A slightly darker shade of green (#4CAF50) to provide contrast and highlight important elements, and to emphasize freshness.
- Headings font: 'Poppins' (sans-serif) for a modern, clean look. Note: currently only Google Fonts are supported.
- Body font: 'Inter' (sans-serif) for readability and a contemporary feel. Note: currently only Google Fonts are supported.
- Use minimal line icons to represent different values and sections, ensuring they are clean and easily recognizable.
- Employ rounded cards with soft shadows to create a modern and inviting interface. A max-width container of ~1200px with 24px gutters.
- Implement gentle fade and slide-up animations on section reveal with a duration of 200–300ms to enhance user experience.