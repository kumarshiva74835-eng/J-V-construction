/* ==========================================================================
   JV Construction — Main JavaScript
   Admin-friendly data arrays at the top for easy content updates.
   ========================================================================== */

/* --- ADMIN DATA: Add new projects by copying an object block --- */
const PROJECTS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    nameKey: "project-1-name",
    locationKey: "project-1-location",
    statusKey: "project-1-status",
    statusClass: "status-completed"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    nameKey: "project-2-name",
    locationKey: "project-2-location",
    statusKey: "project-2-status",
    statusClass: "status-completed"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    nameKey: "project-3-name",
    locationKey: "project-3-location",
    statusKey: "project-3-status",
    statusClass: "status-upcoming"
  }
];

/* --- ADMIN DATA: Add new testimonials by copying an object block --- */
const TESTIMONIALS = [
  { id: 1, quoteKey: "testimonial-1-quote", authorKey: "testimonial-1-author", rating: 5 },
  { id: 2, quoteKey: "testimonial-2-quote", authorKey: "testimonial-2-author", rating: 5 },
  { id: 3, quoteKey: "testimonial-3-quote", authorKey: "testimonial-3-author", rating: 5 }
];

const WHATSAPP_NUMBER = "91XXXXXXXXXX";

/* JV Construction office location on Google Maps */
const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.486524527182!2d77.42045327483379!3d12.550138387727827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae59bd04a31625%3A0x72676ac503bb3222!2sJV%20CONSTRUCTIONS!5e0!3m2!1sen!2sin!4v1781191094066!5m2!1sen!2sin";
const GOOGLE_MAPS_LINK =
  "https://www.google.com/maps/place/JV+CONSTRUCTIONS/@12.5501384,77.4204533,17z";

const translations = {
  en: {
    "page-title-home": "JV Construction — Building Homes. Creating Memories.",
    "page-title-about": "About — JV Construction",
    "page-title-projects": "Projects — JV Construction",
    "page-title-services": "Services — JV Construction",
    "page-title-testimonials": "Testimonials — JV Construction",
    "page-title-contact": "Contact — JV Construction",
    "meta-desc-home": "JV Construction specializes in premium residential house construction. Founded by Varun J in 2024. 3 dream homes delivered.",
    "meta-desc-about": "Learn about JV Construction, founded by Varun J in 2024. Quality homes built with transparency and trust.",
    "meta-desc-projects": "Explore completed and upcoming residential projects by JV Construction.",
    "meta-desc-services": "House construction, renovation, architectural planning, and turnkey projects by JV Construction.",
    "meta-desc-testimonials": "Read what our clients say about JV Construction's quality and professionalism.",
    "meta-desc-contact": "Contact JV Construction for a free consultation. Owner: Varun J.",
    "nav-home": "Home",
    "nav-about": "About",
    "nav-projects": "Projects",
    "nav-services": "Services",
    "nav-testimonials": "Testimonials",
    "nav-contact": "Contact",
    "nav-quote": "Get a Free Quote",
    "lang-toggle": "ಕನ್ನಡ",
    "splash-tagline": "Building Homes. Creating Memories.",
    "hero-tagline": "Building Homes. Creating Memories.",
    "hero-title": "Building Homes with Quality and Trust",
    "hero-subtitle": "Founded by Varun J in 2024, JV Construction specializes in residential house construction. We have successfully delivered 3 dream homes and continue to build with excellence.",
    "hero-cta-projects": "View Our Projects",
    "hero-cta-contact": "Contact Us",
    "stat-1-num": "3+",
    "stat-1-label": "Houses Completed",
    "stat-2-num": "2+",
    "stat-2-label": "Years of Commitment",
    "stat-3-num": "100%",
    "stat-3-label": "Client Satisfaction",
    "stat-4-num": "24/7",
    "stat-4-label": "Customer Support",
    "featured-eyebrow": "Our Work",
    "featured-title": "Featured Projects",
    "featured-desc": "A glimpse of the dream homes we have built and are building for our clients.",
    "featured-view-all": "View All Projects",
    "cta-title": "Ready to Build Your Dream Home?",
    "cta-btn": "Request a Free Consultation",
    "about-eyebrow": "About Us",
    "about-title": "Building Trust, One Home at a Time",
    "about-desc": "JV Construction was established in 2024 by Varun J with a vision to provide reliable and high-quality house construction services. Since its inception, the company has successfully completed 3 residential projects, earning the trust of homeowners through commitment, craftsmanship, and timely execution.",
    "highlight-1-title": "Established in 2024",
    "highlight-1-desc": "A young company with a strong foundation of quality and integrity.",
    "highlight-2-title": "3 Projects Delivered",
    "highlight-2-desc": "Three dream homes successfully completed for satisfied families.",
    "highlight-3-title": "Quality Assured",
    "highlight-3-desc": "Premium materials and skilled craftsmanship in every build.",
    "highlight-4-title": "Transparent Pricing",
    "highlight-4-desc": "No hidden costs — clear estimates and honest communication.",
    "owner-name": "Varun J",
    "owner-role": "Founder & Owner, JV Construction",
    "owner-bio-1": "Varun J founded JV Construction with a mission to deliver quality homes with transparency, trust, and attention to detail. He personally oversees every project from foundation to finish.",
    "owner-bio-2": "With a passion for residential construction, Varun works closely with each client to turn their vision into a home they are proud to live in.",
    "projects-eyebrow": "Portfolio",
    "projects-title": "Our Projects",
    "projects-desc": "Explore our completed and upcoming residential construction projects.",
    "project-view-details": "View Details",
    "project-1-name": "Serene Villa",
    "project-1-location": "Bangalore, Karnataka",
    "project-1-status": "Completed",
    "project-2-name": "Greenwood Residence",
    "project-2-location": "Mysore, Karnataka",
    "project-2-status": "Completed",
    "project-3-name": "Sunrise Homes",
    "project-3-location": "Mangalore, Karnataka",
    "project-3-status": "Upcoming",
    "services-eyebrow": "What We Offer",
    "services-title": "Our Services",
    "services-desc": "Comprehensive residential construction services tailored to your needs.",
    "service-1-title": "House Construction",
    "service-1-desc": "End-to-end residential construction from foundation to handover.",
    "service-2-title": "Renovation & Remodeling",
    "service-2-desc": "Transform your existing home with modern upgrades and finishes.",
    "service-3-title": "Architectural Planning",
    "service-3-desc": "Expert design and planning to maximize space and aesthetics.",
    "service-4-title": "Interior Consultation",
    "service-4-desc": "Professional guidance on interiors that match your lifestyle.",
    "service-5-title": "Turnkey Projects",
    "service-5-desc": "Complete project management — design, build, and deliver.",
    "service-6-title": "Site Supervision",
    "service-6-desc": "Dedicated on-site supervision ensuring quality at every stage.",
    "why-eyebrow": "Why Choose Us",
    "why-title": "The JV Construction Advantage",
    "why-desc": "We go beyond building houses — we create homes filled with trust and quality.",
    "why-1-title": "Quality Materials",
    "why-1-desc": "Only premium, tested materials used in every project.",
    "why-2-title": "Experienced Team",
    "why-2-desc": "Skilled professionals with years of construction expertise.",
    "why-3-title": "On-Time Delivery",
    "why-3-desc": "We respect your timeline and deliver as promised.",
    "why-4-title": "Transparent Communication",
    "why-4-desc": "Regular updates and open dialogue throughout the build.",
    "why-5-title": "Customer Satisfaction",
    "why-5-desc": "Your happiness is our ultimate measure of success.",
    "why-6-title": "Attention to Detail",
    "why-6-desc": "Every corner, every finish — crafted with care.",
    "testimonials-eyebrow": "Client Reviews",
    "testimonials-title": "What Our Clients Say",
    "testimonials-desc": "Hear from homeowners who trusted us with their dream homes.",
    "testimonial-1-quote": "JV Construction exceeded our expectations. The quality and professionalism were outstanding.",
    "testimonial-1-author": "Happy Homeowner, Bangalore",
    "testimonial-2-quote": "Varun J and his team delivered our dream home on time.",
    "testimonial-2-author": "Satisfied Client, Mysore",
    "testimonial-3-quote": "Transparent pricing and excellent craftsmanship. Highly recommended!",
    "testimonial-3-author": "Proud Owner, Mangalore",
    "contact-eyebrow": "Get In Touch",
    "contact-title": "Contact Us",
    "contact-desc": "Ready to start your construction journey? Reach out for a free consultation.",
    "contact-owner-label": "Owner",
    "contact-owner": "Varun J",
    "contact-phone-label": "Phone",
    "contact-phone": "+91 XXXXX XXXXX",
    "contact-email-label": "Email",
    "contact-email": "info@jvconstruction.com",
    "contact-address-label": "Office Address",
    "contact-address": "JV Constructions, Bangalore, Karnataka, India",
    "contact-map-title": "Find Us on the Map",
    "contact-map-open": "Open in Google Maps",
    "form-name": "Name",
    "form-phone": "Phone Number",
    "form-email": "Email",
    "form-requirements": "Project Requirements",
    "form-submit": "Submit",
    "form-success": "Thank you! Your message has been received. We will contact you shortly.",
    "form-error-name": "Please enter your name.",
    "form-error-phone": "Please enter a valid phone number.",
    "form-error-email": "Please enter a valid email address.",
    "form-error-requirements": "Please describe your project requirements.",
    "footer-tagline": "Building Homes. Creating Memories.",
    "footer-quick-links": "Quick Links",
    "footer-contact-heading": "Contact Info",
    "footer-copyright": "© 2026 JV Construction. All Rights Reserved.",
    "footer-owner": "Owned and Managed by Varun J",
    "dark-mode-on": "Switch to light mode",
    "dark-mode-off": "Switch to dark mode"
  },
  kn: {
    "page-title-home": "ಜೆವಿ ಕನ್ಸ್ಟ್ರಕ್ಷನ್ — ಮನೆಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತೇವೆ. ನೆನಪುಗಳನ್ನು ಸೃಷ್ಟಿಸುತ್ತೇವೆ.",
    "page-title-about": "ಬಗ್ಗೆ — ಜೆವಿ ಕನ್ಸ್ಟ್ರಕ್ಷನ್",
    "page-title-projects": "ಯೋಜನೆಗಳು — ಜೆವಿ ಕನ್ಸ್ಟ್ರಕ್ಷನ್",
    "page-title-services": "ಸೇವೆಗಳು — ಜೆವಿ ಕನ್ಸ್ಟ್ರಕ್ಷನ್",
    "page-title-testimonials": "ಪ್ರಶಂಸಾಪತ್ರಗಳು — ಜೆವಿ ಕನ್ಸ್ಟ್ರಕ್ಷನ್",
    "page-title-contact": "ಸಂಪರ್ಕ — ಜೆವಿ ಕನ್ಸ್ಟ್ರಕ್ಷನ್",
    "meta-desc-home": "ಜೆವಿ ಕನ್ಸ್ಟ್ರಕ್ಷನ್ ಪ್ರೀಮಿಯಂ ವಸತಿ ಮನೆ ನಿರ್ಮಾಣದಲ್ಲಿ ಪರಿಣತಿ ಹೊಂದಿದೆ. ೨೦೨೪ರಲ್ಲಿ ವರುಣ್ ಜೆ ಅವರಿಂದ ಸ್ಥಾಪಿಸಲಾಗಿದೆ.",
    "meta-desc-about": "ಜೆವಿ ಕನ್ಸ್ಟ್ರಕ್ಷನ್ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ, ೨೦೨೪ರಲ್ಲಿ ವರುಣ್ ಜೆ ಅವರಿಂದ ಸ್ಥಾಪಿಸಲಾಗಿದೆ.",
    "meta-desc-projects": "ಜೆವಿ ಕನ್ಸ್ಟ್ರಕ್ಷನ್‌ನ ಪೂರ್ಣಗೊಂಡ ಮತ್ತು ಮುಂಬರುವ ವಸತಿ ಯೋಜನೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
    "meta-desc-services": "ಮನೆ ನಿರ್ಮಾಣ, ನವೀಕರಣ, ವಾಸ್ತುಶಿಲ್ಪ ಯೋಜನೆ ಮತ್ತು ಟರ್ನ್‌ಕೀ ಯೋಜನೆಗಳು.",
    "meta-desc-testimonials": "ಜೆವಿ ಕನ್ಸ್ಟ್ರಕ್ಷನ್‌ನ ಗುಣಮಟ್ಟ ಮತ್ತು ವೃತ್ತಿಪರತೆಯ ಬಗ್ಗೆ ನಮ್ಮ ಗ್ರಾಹಕರು ಏನು ಹೇಳುತ್ತಾರೆ ಎಂಬುದನ್ನು ಓದಿ.",
    "meta-desc-contact": "ಉಚಿತ ಸಮಾಲೋಚನೆಗಾಗಿ ಜೆವಿ ಕನ್ಸ್ಟ್ರಕ್ಷನ್ ಅನ್ನು ಸಂಪರ್ಕಿಸಿ. ಮಾಲೀಕ: ವರುಣ್ ಜೆ.",
    "nav-home": "ಮುಖಪುಟ",
    "nav-about": "ಬಗ್ಗೆ",
    "nav-projects": "ಯೋಜನೆಗಳು",
    "nav-services": "ಸೇವೆಗಳು",
    "nav-testimonials": "ಪ್ರಶಂಸಾಪತ್ರಗಳು",
    "nav-contact": "ಸಂಪರ್ಕ",
    "nav-quote": "ಉಚಿತ ಉಲ್ಲೇಖ ಪಡೆಯಿರಿ",
    "lang-toggle": "English",
    "splash-tagline": "ಮನೆಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತೇವೆ. ನೆನಪುಗಳನ್ನು ಸೃಷ್ಟಿಸುತ್ತೇವೆ.",
    "hero-tagline": "ಮನೆಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತೇವೆ. ನೆನಪುಗಳನ್ನು ಸೃಷ್ಟಿಸುತ್ತೇವೆ.",
    "hero-title": "ಗುಣಮಟ್ಟ ಮತ್ತು ವಿಶ್ವಾಸದೊಂದಿಗೆ ಮನೆಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತೇವೆ",
    "hero-subtitle": "೨೦೨೪ರಲ್ಲಿ ವರುಣ್ ಜೆ ಅವರಿಂದ ಸ್ಥಾಪಿಸಲಾದ ಜೆವಿ ಕನ್ಸ್ಟ್ರಕ್ಷನ್ ವಸತಿ ಮನೆ ನಿರ್ಮಾಣದಲ್ಲಿ ಪರಿಣತಿ ಹೊಂದಿದೆ. ನಾವು ಯಶಸ್ವಿಯಾಗಿ ೩ ಕನಸ್ಸಿನ ಮನೆಗಳನ್ನು ನಿರ್ಮಿಸಿದ್ದೇವೆ ಮತ್ತು ಉತ್ಕೃಷ್ಟತೆಯೊಂದಿಗೆ ನಿರ್ಮಿಸುತ್ತಿದ್ದೇವೆ.",
    "hero-cta-projects": "ನಮ್ಮ ಯೋಜನೆಗಳನ್ನು ನೋಡಿ",
    "hero-cta-contact": "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
    "stat-1-num": "೩+",
    "stat-1-label": "ಪೂರ್ಣಗೊಂಡ ಮನೆಗಳು",
    "stat-2-num": "೨+",
    "stat-2-label": "ವರ್ಷಗಳ ಬದ್ಧತೆ",
    "stat-3-num": "೧೦೦%",
    "stat-3-label": "ಗ್ರಾಹಕ ತೃಪ್ತಿ",
    "stat-4-num": "೨೪/೭",
    "stat-4-label": "ಗ್ರಾಹಕ ಬೆಂಬಲ",
    "featured-eyebrow": "ನಮ್ಮ ಕೆಲಸ",
    "featured-title": "ವಿಶೇಷ ಯೋಜನೆಗಳು",
    "featured-desc": "ನಾವು ನಿರ್ಮಿಸಿದ ಮತ್ತು ನಿರ್ಮಿಸುತ್ತಿರುವ ಕನಸ್ಸಿನ ಮನೆಗಳ ಒಂದು ನೋಟ.",
    "featured-view-all": "ಎಲ್ಲಾ ಯೋಜನೆಗಳನ್ನು ನೋಡಿ",
    "cta-title": "ನಿಮ್ಮ ಕನಸ್ಸಿನ ಮನೆಯನ್ನು ನಿರ್ಮಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?",
    "cta-btn": "ಉಚಿತ ಸಮಾಲೋಚನೆ ವಿನಂತಿಸಿ",
    "about-eyebrow": "ನಮ್ಮ ಬಗ್ಗೆ",
    "about-title": "ವಿಶ್ವಾಸವನ್ನು ನಿರ್ಮಿಸುತ್ತೇವೆ, ಒಂದೊಂದು ಮನೆಯಾಗಿ",
    "about-desc": "ಜೆವಿ ಕನ್ಸ್ಟ್ರಕ್ಷನ್ ಅನ್ನು ೨೦೨೪ರಲ್ಲಿ ವರುಣ್ ಜೆ ಅವರು ವಿಶ್ವಾಸಾರ್ಹ ಮತ್ತು ಉನ್ನತ ಗುಣಮಟ್ಟದ ಮನೆ ನಿರ್ಮಾಣ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುವ ದೃಷ್ಟಿಯೊಂದಿಗೆ ಸ್ಥಾಪಿಸಿದ್ದಾರೆ. ಆರಂಭದಿಂದಲೇ, ಕಂಪನಿಯು ಯಶಸ್ವಿಯಾಗಿ ೩ ವಸತಿ ಯೋಜನೆಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದೆ.",
    "highlight-1-title": "೨೦೨೪ರಲ್ಲಿ ಸ್ಥಾಪಿತ",
    "highlight-1-desc": "ಗುಣಮಟ್ಟ ಮತ್ತು ಸಮಗ್ರತೆಯ ಬಲವಾದ ಅಡಿಪಾಯದ ಯುವ ಕಂಪನಿ.",
    "highlight-2-title": "೩ ಯೋಜನೆಗಳು ನಿರ್ವಹಿಸಲಾಗಿದೆ",
    "highlight-2-desc": "ತೃಪ್ತ ಕುಟುಂಬಗಳಿಗಾಗಿ ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಂಡ ಮೂರು ಕನಸ್ಸಿನ ಮನೆಗಳು.",
    "highlight-3-title": "ಗುಣಮಟ್ಟ ಖಚಿತ",
    "highlight-3-desc": "ಪ್ರತಿ ನಿರ್ಮಾಣದಲ್ಲಿ ಪ್ರೀಮಿಯಂ ವಸ್ತುಗಳು ಮತ್ತು ಕುಶಲ ಕುಶಲತೆ.",
    "highlight-4-title": "ಪಾರದರ್ಶಕ ಬೆಲೆ",
    "highlight-4-desc": "ಗುಪ್ತ ವೆಚ್ಚಗಳಿಲ್ಲ — ಸ್ಪಷ್ಟ ಅಂದಾಜುಗಳು ಮತ್ತು ಪ್ರಾಮಾಣಿಕ ಸಂವಹನ.",
    "owner-name": "ವರುಣ್ ಜೆ",
    "owner-role": "ಸ್ಥಾಪಕರು ಮತ್ತು ಮಾಲೀಕರು, ಜೆವಿ ಕನ್ಸ್ಟ್ರಕ್ಷನ್",
    "owner-bio-1": "ವರುಣ್ ಜೆ ಅವರು ಪಾರದರ್ಶಕತೆ, ವಿಶ್ವಾಸ ಮತ್ತು ವಿವರಗಳಿಗೆ ಗಮನದೊಂದಿಗೆ ಗುಣಮಟ್ಟದ ಮನೆಗಳನ್ನು ನೀಡುವ ಮಿಷನ್‌ನೊಂದಿಗೆ ಜೆವಿ ಕನ್ಸ್ಟ್ರಕ್ಷನ್ ಅನ್ನು ಸ್ಥಾಪಿಸಿದ್ದಾರೆ.",
    "owner-bio-2": "ವಸತಿ ನಿರ್ಮಾಣದಲ್ಲಿ ಅಭಿರುಚಿಯೊಂದಿಗೆ, ವರುಣ್ ಪ್ರತಿ ಗ್ರಾಹಕರೊಂದಿಗೆ ಸಮೀಪವಾಗಿ ಕೆಲಸ ಮಾಡಿ ಅವರ ದೃಷ್ಟಿಯನ್ನು ಅವರು ಹೆಮ್ಮೆಯಿಂದ ವಾಸಿಸುವ ಮನೆಯಾಗಿ ಪರಿವರ್ತಿಸುತ್ತಾರೆ.",
    "projects-eyebrow": "ಪೋರ್ಟ್‌ಫೋಲಿಯೊ",
    "projects-title": "ನಮ್ಮ ಯೋಜನೆಗಳು",
    "projects-desc": "ನಮ್ಮ ಪೂರ್ಣಗೊಂಡ ಮತ್ತು ಮುಂಬರುವ ವಸತಿ ನಿರ್ಮಾಣ ಯೋಜನೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
    "project-view-details": "ವಿವರಗಳನ್ನು ನೋಡಿ",
    "project-1-name": "ಸೆರೀನ್ ವಿಲ್ಲಾ",
    "project-1-location": "ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ",
    "project-1-status": "ಪೂರ್ಣಗೊಂಡಿದೆ",
    "project-2-name": "ಗ್ರೀನ್‌ವುಡ್ ರೆಸಿಡೆನ್ಸ್",
    "project-2-location": "ಮೈಸೂರು, ಕರ್ನಾಟಕ",
    "project-2-status": "ಪೂರ್ಣಗೊಂಡಿದೆ",
    "project-3-name": "ಸನ್‌ರೈಸ್ ಹೋಮ್ಸ್",
    "project-3-location": "ಮಂಗಳೂರು, ಕರ್ನಾಟಕ",
    "project-3-status": "ಮುಂಬರುವ",
    "services-eyebrow": "ನಾವು ಏನು ನೀಡುತ್ತೇವೆ",
    "services-title": "ನಮ್ಮ ಸೇವೆಗಳು",
    "services-desc": "ನಿಮ್ಮ ಅಗತ್ಯಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ಸಮಗ್ರ ವಸತಿ ನಿರ್ಮಾಣ ಸೇವೆಗಳು.",
    "service-1-title": "ಮನೆ ನಿರ್ಮಾಣ",
    "service-1-desc": "ಅಡಿಪಾಯದಿಂದ ಹಸ್ತಾಂತರದವರೆಗೆ ಸಂಪೂರ್ಣ ವಸತಿ ನಿರ್ಮಾಣ.",
    "service-2-title": "ನವೀಕರಣ ಮತ್ತು ಮರುಮಾದರಿ",
    "service-2-desc": "ಆಧುನಿಕ ಅಪ್‌ಗ್ರೇಡ್‌ಗಳು ಮತ್ತು ಫಿನಿಷ್‌ಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಅಸ್ತಿತ್ವದ ಮನೆಯನ್ನು ರೂಪಾಂತರಿಸಿ.",
    "service-3-title": "ವಾಸ್ತುಶಿಲ್ಪ ಯೋಜನೆ",
    "service-3-desc": "ಜಾಗ ಮತ್ತು ಸೌಂದರ್ಯವನ್ನು ಗರಿಷ್ಠಗೊಳಿಸಲು ಪರಿಣತ ವಿನ್ಯಾಸ ಮತ್ತು ಯೋಜನೆ.",
    "service-4-title": "ಆಂತರಿಕ ಸಮಾಲೋಚನೆ",
    "service-4-desc": "ನಿಮ್ಮ ಜೀವನಶೈಲಿಗೆ ಹೊಂದಾಣಿಕೆಯ ಆಂತರಿಕಗಳ ಬಗ್ಗೆ ವೃತ್ತಿಪರ ಮಾರ್ಗದರ್ಶನ.",
    "service-5-title": "ಟರ್ನ್‌ಕೀ ಯೋಜನೆಗಳು",
    "service-5-desc": "ಸಂಪೂರ್ಣ ಯೋಜನಾ ನಿರ್ವಹಣೆ — ವಿನ್ಯಾಸ, ನಿರ್ಮಾಣ ಮತ್ತು ವಿತರಣೆ.",
    "service-6-title": "ಸೈಟ್ ಮೇಲ್ವಿಚಾರಣೆ",
    "service-6-desc": "ಪ್ರತಿ ಹಂತದಲ್ಲಿ ಗುಣಮಟ್ಟವನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳುವ ಸಮರ್ಪಿತ ಸೈಟ್ ಮೇಲ್ವಿಚಾರಣೆ.",
    "why-eyebrow": "ಏಕೆ ನಮ್ಮನ್ನು ಆಯ್ಕೆ ಮಾಡಬೇಕು",
    "why-title": "ಜೆವಿ ಕನ್ಸ್ಟ್ರಕ್ಷನ್ ಪ್ರಯೋಜನ",
    "why-desc": "ನಾವು ಮನೆಗಳನ್ನು ನಿರ್ಮಿಸುವುದಕ್ಕಿಂತ ಹೆಚ್ಚು — ವಿಶ್ವಾಸ ಮತ್ತು ಗುಣಮಟ್ಟದಿಂದ ತುಂಬಿದ ಮನೆಗಳನ್ನು ಸೃಷ್ಟಿಸುತ್ತೇವೆ.",
    "why-1-title": "ಗುಣಮಟ್ಟದ ವಸ್ತುಗಳು",
    "why-1-desc": "ಪ್ರತಿ ಯೋಜನೆಯಲ್ಲಿ ಪ್ರೀಮಿಯಂ, ಪರೀಕ್ಷಿತ ವಸ್ತುಗಳು ಮಾತ್ರ ಬಳಸಲಾಗುತ್ತದೆ.",
    "why-2-title": "ಅನುಭವಿ ತಂಡ",
    "why-2-desc": "ವರ್ಷಗಳ ನಿರ್ಮಾಣ ಪರಿಣತಿಯನ್ನು ಹೊಂದಿದ ಕುಶಲ ವೃತ್ತಿಪರರು.",
    "why-3-title": "ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ವಿತರಣೆ",
    "why-3-desc": "ನಾವು ನಿಮ್ಮ ಸಮಯವನ್ನು ಗೌರವಿಸುತ್ತೇವೆ ಮತ್ತು ಭರವಸೆ ನೀಡಿದಂತೆ ವಿತರಿಸುತ್ತೇವೆ.",
    "why-4-title": "ಪಾರದರ್ಶಕ ಸಂವಹನ",
    "why-4-desc": "ನಿರ್ಮಾಣದುದ್ದಕ್ಕೂ ನಿಯಮಿತ ನವೀಕರಣಗಳು ಮತ್ತು ಮುಕ್ತ ಸಂವಾದ.",
    "why-5-title": "ಗ್ರಾಹಕ ತೃಪ್ತಿ",
    "why-5-desc": "ನಿಮ್ಮ ಸಂತೋಷವೇ ನಮ್ಮ ಯಶಸ್ಸಿನ ಅಂತಿಮ ಮಾನದಂಡ.",
    "why-6-title": "ವಿವರಗಳಿಗೆ ಗಮನ",
    "why-6-desc": "ಪ್ರತಿ ಮೂಲೆ, ಪ್ರತಿ ಫಿನಿಷ್ — ಕಾಳಜಿಯಿಂದ ಕುಶಲತೆಯಿಂದ ನಿರ್ಮಿಸಲಾಗಿದೆ.",
    "testimonials-eyebrow": "ಗ್ರಾಹಕ ವಿಮರ್ಶೆಗಳು",
    "testimonials-title": "ನಮ್ಮ ಗ್ರಾಹಕರು ಏನು ಹೇಳುತ್ತಾರೆ",
    "testimonials-desc": "ಅವರ ಕನಸ್ಸಿನ ಮನೆಗಳನ್ನು ನಮ್ಮ ಮೇಲೆ ನಂಬಿಕೆ ಇಟ್ಟ ಮನೆಮಾಲೀಕರಿಂದ ಕೇಳಿ.",
    "testimonial-1-quote": "ಜೆವಿ ಕನ್ಸ್ಟ್ರಕ್ಷನ್ ನಮ್ಮ ನಿರೀಕ್ಷೆಗಳನ್ನು ಮೀರಿಸಿತು. ಗುಣಮಟ್ಟ ಮತ್ತು ವೃತ್ತಿಪರತೆ ಅಸಾಧಾರಣವಾಗಿತ್ತು.",
    "testimonial-1-author": "ಸಂತೋಷದ ಮನೆಮಾಲೀಕ, ಬೆಂಗಳೂರು",
    "testimonial-2-quote": "ವರುಣ್ ಜೆ ಅವರು ಮತ್ತು ಅವರ ತಂಡ ನಮ್ಮ ಕನಸ್ಸಿನ ಮನೆಯನ್ನು ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ವಿತರಿಸಿದರು.",
    "testimonial-2-author": "ತೃಪ್ತ ಗ್ರಾಹಕ, ಮೈಸೂರು",
    "testimonial-3-quote": "ಪಾರದರ್ಶಕ ಬೆಲೆ ಮತ್ತು ಅತ್ಯುತ್ತಮ ಕುಶಲತೆ. ಹೆಚ್ಚು ಶಿಫಾರಸು ಮಾಡಲಾಗುತ್ತದೆ!",
    "testimonial-3-author": "ಹೆಮ್ಮೆಯ ಮಾಲೀಕ, ಮಂಗಳೂರು",
    "contact-eyebrow": "ಸಂಪರ್ಕಿಸಿ",
    "contact-title": "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
    "contact-desc": "ನಿಮ್ಮ ನಿರ್ಮಾಣ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ? ಉಚಿತ ಸಮಾಲೋಚನೆಗಾಗಿ ಸಂಪರ್ಕಿಸಿ.",
    "contact-owner-label": "ಮಾಲೀಕ",
    "contact-owner": "ವರುಣ್ ಜೆ",
    "contact-phone-label": "ಫೋನ್",
    "contact-phone": "+91 XXXXX XXXXX",
    "contact-email-label": "ಇಮೇಲ್",
    "contact-email": "info@jvconstruction.com",
    "contact-address-label": "ಕಚೇರಿ ವಿಳಾಸ",
    "contact-address": "ಜೆವಿ ಕನ್ಸ್ಟ್ರಕ್ಷನ್ಸ್, ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ, ಭಾರತ",
    "contact-map-title": "ನಕ್ಷೆಯಲ್ಲಿ ನಮ್ಮನ್ನು ಹುಡುಕಿ",
    "contact-map-open": "ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ತೆರೆಯಿರಿ",
    "form-name": "ಹೆಸರು",
    "form-phone": "ಫೋನ್ ಸಂಖ್ಯೆ",
    "form-email": "ಇಮೇಲ್",
    "form-requirements": "ಯೋಜನಾ ಅವಶ್ಯಕತೆಗಳು",
    "form-submit": "ಸಲ್ಲಿಸಿ",
    "form-success": "ಧನ್ಯವಾದಗಳು! ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಸ್ವೀಕರಿಸಲಾಗಿದೆ. ನಾವು ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.",
    "form-error-name": "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ.",
    "form-error-phone": "ದಯವಿಟ್ಟು ಮಾನ್ಯ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ.",
    "form-error-email": "ದಯವಿಟ್ಟು ಮಾನ್ಯ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ.",
    "form-error-requirements": "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಯೋಜನಾ ಅವಶ್ಯಕತೆಗಳನ್ನು ವಿವರಿಸಿ.",
    "footer-tagline": "ಮನೆಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತೇವೆ. ನೆನಪುಗಳನ್ನು ಸೃಷ್ಟಿಸುತ್ತೇವೆ.",
    "footer-quick-links": "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
    "footer-contact-heading": "ಸಂಪರ್ಕ ಮಾಹಿತಿ",
    "footer-copyright": "© ೨೦೨೬ ಜೆವಿ ಕನ್ಸ್ಟ್ರಕ್ಷನ್. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    "footer-owner": "ವರುಣ್ ಜೆ ಅವರಿಂದ ನಡೆಸಲ್ಪಡುತ್ತದೆ",
    "dark-mode-on": "ಲೈಟ್ ಮೋಡ್‌ಗೆ ಬದಲಾಯಿಸಿ",
    "dark-mode-off": "ಡಾರ್ಕ್ ಮೋಡ್‌ಗೆ ಬದಲಾಯಿಸಿ"
  }
};

const LANG_KEY = "jv-lang";
const THEME_KEY = "jv-theme";
const SPLASH_KEY = "jv-splash-shown";

function getLanguage() {
  return localStorage.getItem(LANG_KEY) || "en";
}

function setLanguage(lang) {
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;
  applyLanguage(lang);
  renderDynamicContent();
}

function t(key) {
  const lang = getLanguage();
  return translations[lang]?.[key] ?? translations.en[key] ?? key;
}

function applyLanguage(lang) {
  const strings = translations[lang];
  if (!strings) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (strings[key] !== undefined) {
      el.textContent = strings[key];
    }
  });

  const pageTitleKey = document.body.getAttribute("data-page-title");
  if (pageTitleKey && strings[pageTitleKey]) {
    document.title = strings[pageTitleKey];
  }

  const metaDesc = document.querySelector('meta[name="description"]');
  const metaDescKey = document.body.getAttribute("data-meta-desc");
  if (metaDesc && metaDescKey && strings[metaDescKey]) {
    metaDesc.setAttribute("content", strings[metaDescKey]);
  }

  const toggle = document.getElementById("lang-toggle");
  if (toggle && strings["lang-toggle"]) {
    toggle.textContent = strings["lang-toggle"];
    toggle.setAttribute("aria-label", lang === "en" ? "Switch to Kannada" : "Switch to English");
  }

  const darkToggle = document.getElementById("dark-toggle");
  if (darkToggle) {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    darkToggle.setAttribute("aria-label", isDark ? strings["dark-mode-on"] : strings["dark-mode-off"]);
  }
}

/* --- Theme --- */
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
  updateDarkToggleIcon();
}

function updateDarkToggleIcon() {
  const btn = document.getElementById("dark-toggle");
  if (!btn) return;
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  btn.textContent = isDark ? "☀" : "☾";
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem(THEME_KEY, "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem(THEME_KEY, "dark");
  }
  updateDarkToggleIcon();
  applyLanguage(getLanguage());
}

/* --- Splash Screen --- */
function initSplash() {
  const splash = document.getElementById("splash");
  if (!splash) return;

  if (sessionStorage.getItem(SPLASH_KEY)) {
    splash.classList.add("hidden");
    return;
  }

  setTimeout(() => {
    splash.classList.add("hidden");
    sessionStorage.setItem(SPLASH_KEY, "1");
  }, 2000);
}

/* --- Scroll Progress --- */
function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = progress + "%";
  }, { passive: true });
}

/* --- Back to Top --- */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* --- Mobile Navigation --- */
function initMobileNav() {
  const toggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("nav-mobile");
  const overlay = document.getElementById("nav-overlay");
  if (!toggle || !mobileNav) return;

  function closeNav() {
    toggle.setAttribute("aria-expanded", "false");
    mobileNav.classList.remove("open");
    overlay?.classList.remove("open");
    document.body.style.overflow = "";
  }

  function openNav() {
    toggle.setAttribute("aria-expanded", "true");
    mobileNav.classList.add("open");
    overlay?.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    isOpen ? closeNav() : openNav();
  });

  overlay?.addEventListener("click", closeNav);

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });
}

/* --- Active Nav Link --- */
function setActiveNav() {
  let current = window.location.pathname.split("/").pop() || "index.html";
  if (!current.includes(".")) current = "index.html";

  document.querySelectorAll(".nav-desktop a, .nav-mobile a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

/* --- Fade-in on Scroll --- */
function initFadeIn() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const elements = document.querySelectorAll(".fade-in");
  if (!elements.length) return;

  if (prefersReduced) {
    elements.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
}

/* --- Hero Slider --- */
function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  if (slides.length < 2) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let current = 0;

  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
    current = index;
  }

  if (!prefersReduced) {
    setInterval(() => {
      showSlide((current + 1) % slides.length);
    }, 5000);
  }
}

/* --- Stats Counter --- */
function initStatsCounter() {
  const stats = document.querySelectorAll("[data-count]");
  if (!stats.length) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function animateCounter(el) {
    const target = el.getAttribute("data-count");
    if (target.includes("/") || target.includes("%") || target.includes("+")) {
      el.textContent = target;
      return;
    }

    const num = parseInt(target, 10);
    if (isNaN(num)) {
      el.textContent = target;
      return;
    }

    let current = 0;
    const step = Math.ceil(num / 40);
    const suffix = el.getAttribute("data-suffix") || "";
    const timer = setInterval(() => {
      current += step;
      if (current >= num) {
        current = num;
        clearInterval(timer);
      }
      el.textContent = current + suffix;
    }, 40);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (prefersReduced) {
            entry.target.textContent = entry.target.getAttribute("data-count");
          } else {
            animateCounter(entry.target);
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  stats.forEach((el) => observer.observe(el));
}

/* --- Render Projects --- */
function renderProjects(container, limit) {
  if (!container) return;

  const projects = limit ? PROJECTS.slice(0, limit) : PROJECTS;
  container.innerHTML = projects
    .map(
      (p) => `
    <article class="project-card fade-in">
      <div class="project-image-wrap">
        <img src="${p.image}" alt="${t(p.nameKey)}" loading="lazy" decoding="async" width="800" height="600">
        <span class="project-status ${p.statusClass}" data-i18n="${p.statusKey}">${t(p.statusKey)}</span>
      </div>
      <div class="project-body">
        <h3 data-i18n="${p.nameKey}">${t(p.nameKey)}</h3>
        <p class="project-location" data-i18n="${p.locationKey}">${t(p.locationKey)}</p>
        <a href="contact.html" class="btn btn-primary" data-i18n="project-view-details">${t("project-view-details")}</a>
      </div>
    </article>`
    )
    .join("");

  initFadeIn();
}

/* --- Render Testimonials Slider --- */
function renderTestimonials() {
  const track = document.getElementById("testimonials-track");
  const dotsContainer = document.getElementById("slider-dots");
  if (!track) return;

  track.innerHTML = TESTIMONIALS.map(
    (item) => `
    <div class="testimonial-slide">
      <p class="testimonial-quote" data-i18n="${item.quoteKey}">${t(item.quoteKey)}</p>
      <p class="testimonial-author" data-i18n="${item.authorKey}">${t(item.authorKey)}</p>
      <p class="testimonial-stars" aria-label="${item.rating} stars">${"★".repeat(item.rating)}</p>
    </div>`
  ).join("");

  if (dotsContainer) {
    dotsContainer.innerHTML = TESTIMONIALS.map(
      (_, i) => `<button class="slider-dot${i === 0 ? " active" : ""}" aria-label="Slide ${i + 1}" data-index="${i}"></button>`
    ).join("");
  }

  initTestimonialSlider();
}

function initTestimonialSlider() {
  const track = document.getElementById("testimonials-track");
  const dots = document.querySelectorAll(".slider-dot");
  const prevBtn = document.getElementById("slider-prev");
  const nextBtn = document.getElementById("slider-next");
  if (!track) return;

  let current = 0;
  const total = TESTIMONIALS.length;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let autoTimer;

  function goTo(index) {
    current = ((index % total) + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === current));
  }

  function startAuto() {
    if (prefersReduced) return;
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 6000);
  }

  prevBtn?.addEventListener("click", () => { goTo(current - 1); startAuto(); });
  nextBtn?.addEventListener("click", () => { goTo(current + 1); startAuto(); });
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      goTo(parseInt(dot.getAttribute("data-index"), 10));
      startAuto();
    });
  });

  let touchStartX = 0;
  track.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener("touchend", (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      goTo(diff > 0 ? current + 1 : current - 1);
      startAuto();
    }
  }, { passive: true });

  startAuto();
}

function renderDynamicContent() {
  const projectsAll = document.getElementById("projects-grid");
  const projectsFeatured = document.getElementById("featured-projects");
  if (projectsAll) renderProjects(projectsAll);
  if (projectsFeatured) renderProjects(projectsFeatured, 3);
  renderTestimonials();
  applyLanguage(getLanguage());
}

/* --- Contact Form --- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const successEl = document.getElementById("form-success");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    const fields = [
      { id: "name", errorKey: "form-error-name", validate: (v) => v.trim().length >= 2 },
      { id: "phone", errorKey: "form-error-phone", validate: (v) => /^[\d\s+\-()]{7,15}$/.test(v.trim()) },
      { id: "email", errorKey: "form-error-email", validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) },
      { id: "requirements", errorKey: "form-error-requirements", validate: (v) => v.trim().length >= 10 }
    ];

    fields.forEach(({ id, errorKey, validate }) => {
      const input = document.getElementById(id);
      const group = input?.closest(".form-group");
      const errorEl = group?.querySelector(".form-error");
      if (!input || !group) return;

      if (!validate(input.value)) {
        valid = false;
        group.classList.add("invalid");
        if (errorEl) errorEl.textContent = t(errorKey);
      } else {
        group.classList.remove("invalid");
      }
    });

    if (valid) {
      form.reset();
      successEl?.classList.add("show");
      setTimeout(() => successEl?.classList.remove("show"), 5000);
    }
  });

  form.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", () => {
      input.closest(".form-group")?.classList.remove("invalid");
    });
  });
}

/* --- Google Maps (link fallback if HTML iframe is missing) --- */
function initGoogleMap() {
  const container = document.getElementById("map-container");
  const mapsLink = document.getElementById("maps-link");

  if (mapsLink && GOOGLE_MAPS_LINK) {
    mapsLink.href = GOOGLE_MAPS_LINK;
    mapsLink.target = "_blank";
    mapsLink.rel = "noopener noreferrer";
  }

  if (!container || container.querySelector("iframe") || !GOOGLE_MAPS_EMBED_URL) return;

  container.innerHTML = `
    <iframe
      src="${GOOGLE_MAPS_EMBED_URL}"
      width="100%"
      height="100%"
      style="border:0;"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="${t("contact-map-title")} — JV Construction"
    ></iframe>
  `;
}

/* --- WhatsApp Link --- */
function initWhatsApp() {
  const btn = document.getElementById("whatsapp-float");
  if (!btn) return;

  const message = encodeURIComponent("Hello JV Construction, I would like to inquire about your services.");
  btn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  btn.target = "_blank";
  btn.rel = "noopener noreferrer";
}

/* --- Init --- */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initSplash();
  initScrollProgress();
  initBackToTop();
  initMobileNav();
  setActiveNav();
  initFadeIn();
  initHeroSlider();
  initStatsCounter();
  initContactForm();
  initGoogleMap();
  initWhatsApp();

  const currentLang = getLanguage();
  document.documentElement.lang = currentLang;
  applyLanguage(currentLang);
  renderDynamicContent();

  document.getElementById("lang-toggle")?.addEventListener("click", () => {
    setLanguage(getLanguage() === "en" ? "kn" : "en");
  });

  document.getElementById("dark-toggle")?.addEventListener("click", toggleTheme);
});
