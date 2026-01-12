// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const domainsGrid = document.getElementById('domainsGrid');
const galleryGrid = document.getElementById('galleryGrid');
const modal = document.getElementById('imageModal');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const currentYearSpan = document.getElementById('currentYear');

// Data
const domains = [
    {
        id: 1,
        name: "Competitive Programming",
        description: "Master algorithms, data structures and problem-solving techniques for coding competitions.",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
   
    {
        id: 2,
        name: "Web Development",
        description: "Build modern websites using HTML, CSS, JavaScript and popular frameworks.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
     {
        id: 3,
        name: "Cybersecurity",
        description: "Learn about securing systems, networks, and data from digital attacks and threats.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        name: "Data Structures & Algorithms",
        description: "Understand fundamental DSA concepts for efficient problem solving.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 5,
        name: "  AI  & Machine Learning",
        description: "Explore AI and ML concepts with practical implementations.",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        name: "Mobile App Development",
        description: "Create mobile applications for Android and iOS platforms.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 7,
        name: "Cloud Computing",
        description: "Learn about AWS, Azure, Google Cloud and cloud architectures.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
         id: 8,
        name: "C & C++",
        description: "Master low-level programming with C and C++ for system development.",
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    
    }
];

const events = {
    upcoming: [
        {
            id: 1,
            title: "Hackathon 2026",
            date: "March 20-22, 2026",
            description: "24-hour coding marathon to solve real-world problems. Open to all students.",
            registerLink: "#"
        },
       {
  id: 2,
  title: "Python Workshop",
  date: "Feb 26, 2026",
  description: `
    Beginner-friendly workshop covering Python basics and practical applications.
    <span style="font-style:italic; color:#6b7280;">
      — Akash Pandey
    </span>
  `,
  registerLink: "#"
},
 {
  id: 3,
  title: "Zero to Internship Workshop",
  date: "Feb 19, 2026",
  description: `
    Cold emails, resume, portfolio & internship prep
  <span style="font-style:italic; color:#6b7280;">
     By — Shailesh, Intern @ Infosys Springboard
  </span>

  `,
  registerLink: "#"
}

    ],
    past: [
        {
  id: 4,
  title: "Frontend Development Workshop",
  date: "Dec 5, 2025",
  description: `
    Hands-on workshop on building web pages using HTML and CSS with practical exercises.
    <span style="font-style:italic; color:#6b7280;">
      — by Shreya Tripati
    </span>
  `,
  registerLink: "#"
}

      ,{
  id: 5,
  title: "Git & GitHub Workshop",
  date: "Dec 5, 2025",
  description: `
    Learn version control and collaborative coding with Git and GitHub.
    <span style="font-style:italic; color:#6b7280;">
      — by Ayushman Pandey
    </span>
  `,
  registerLink: "#"
}

        ,{
  id: 4,
  title: "App Development Workshop",
  date: "Nov 21, 2025",
  description: `
    Hands-on workshop on building mobile and web applications with practical exercises.
    <span style="font-style:italic; color:#6b7280;">
      — by Akash
    </span>
  `,
  registerLink: "#"
}

    ,{ 
  id: 6,
  title: "C Workshop",
  date: "Nov 15, 2025",
  description: `
    Hands-on C programming workshop covering basics and practical examples.
    <span style="font-style:italic; color:#6b7280;">
      — by Ansh Verma
    </span>
  `,
  registerLink: "#"
},

         
           {
  id: 7,
  title: "Introduction to CTC(2nd Year)",
  date: "Sept 12, 2025",
  description: `
    An introduction to CTC for 2nd-year students, explaining its purpose and benefits.
    <span style="font-style:italic; color:#6b7280;">
      — by all CTC Members
    </span>
  `,
  registerLink: "#"
}

    ,{
            
  id: 8,
  title: "Introduction to CTC(1st Year)",
  date: "Sept 7, 2025",
  description: `
    A short introduction for first-year students on what CTC is and why it matters.
    <span style="font-style:italic; color:#6b7280;">
      — by CTC Team
    </span>
  `,
  registerLink: "#"
}

        
    ]
};




   const team = {
  
    core: [
        { 
            id: 1, 
            name: "Ansh Verma", 
            role: "cybersecurity Lead",
            department: "CSE 3rd Year",
            email: "2308410100016@recsonbhadra.ac.in",
            linkedin: "https://linkedin.com/in/aarav-sharma",
         
            image: "assets/logo/Ansh.png"
        },
        { 
            id: 2, 
            name: " Akash  Giri",
            role: " Flutter  Lead",
            department: "CSE 3rd Year",
            email: "2308410100006@recsonbhadra.ac.in",
            linkedin:"https://www.linkedin.com/in/akash-giri-183a21300",
           
           
            image: "assets/logo/AkashG.png" 
        },
        { 
            id: 3, 
            name: "Shailesh Maddheshiya ",
            role: "cloud computing Lead",
            department: "CSE 3rd Year",
            email: "shailesh91199477@gmail.com",
            linkedin: "https://www.linkedin.com/in/shailesh-kumar-98192a295/",
          
            image: "assets/logo/Shailesh.png"
        },
        { 
            id: 4, 
            name: "Shubh Seth ",
            role: "AI/ML Lead",

            department: "CSE 3rd Year",
            email:"2308410100061@recsonbhadra.ac.in",
            linkedin: "www.linkedin.com/in/shubh-seth-842842330",
            image: "assets/logo/Shubh.png"
          
         
        },
         { 
            id: 7, 
            name: "Akash Pandey ",
            role: "Data Science Lead",
            department: "CSE 3rd Year",
            email: "2308410100008@recsonbhadra.ac.in",
            linkedin: "https://www.linkedin.com/in/akash-pandey-717931295/",
            image: "assets/logo/Akash.png"
            
        }, 
         { 
            id: 8, 
            name: "Hariom Dubey ",
            role: "Full Stack Lead",
            department: "CSE 3rd Year",
            email: "2308410100032@recsonbhadra.ac.in",
            linkedin: "https://linkedin.com/in/hariom-dubey-5b3001281",
            image: "assets/logo/Hariom.png"
            
        },
        { 
            id: 9, 
            name: "Pritesh Mishra ",
            role: " CP/DSA lead",
            department: "CSE 3rd Year",
            email: "2308410100047@recsonbhadra.ac.in",
            linkedin: "",
            image: "assets/logo/Pritesh.png"
            
        },
        { 
            id: 10, 
            name: " Pradip Kumar ",
            role: "App Development Lead",
            department: "CSE 3rd Year",
            email: "2308410100054@recsonbhadra.ac.in",
            linkedin: "",
            image: "assets/logo/Pradip.png"
            
        },
         { 
            id: 10, 
            name: " Shashikant Singh ",
            role: "Social Media Lead",
            department: "CSE 3rd Year",
            email: "2308410100056recsonbhadra.ac.in",
            linkedin: "",
            image: "assets/logo/shashikant.png"
            
        },
        { 
            id: 10, 
            name: " Vaibhav Agrawal ",
            role: "Technical  Lead",
            department: "CSE 3rd Year",
            email: "",
            linkedin: "",
            image: "assets/logo/Vaibhav.png"
            
        }

    ],
      faculty: [

            
        { 
            id: 1, 
            name: "Aarav Sharma", 
            role: "Junior Developer", 
            department: "Computer Science",
            email: "aarav.sharma@recsonbhadra.ac.in",
            linkedin: "https://linkedin.com/in/aarav-sharma",
            github: "https://github.com/aaravsharma",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" ,
             selected: true
        },
        
           
    ],

};

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    currentYearSpan.textContent = new Date().getFullYear();
    
    // Load domains
    loadDomains();
    
    // Load events
    loadEvents();
    
   
    
    // Load team
    loadTeam();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize smooth scroll for navigation links
    initSmoothScroll();
    
    // Initialize tab functionality
    initTabs();
});

// Load domains into the grid
function loadDomains() {
    domainsGrid.innerHTML = domains.map(domain => `
        <div class="domain-card">
            <img src="${domain.image}" alt="${domain.name}" class="domain-image">
            <div class="domain-content">
                <h3 class="domain-title">${domain.name}</h3>
                <p class="domain-desc">${domain.description}</p>
            </div>
        </div>
    `).join('');
}

// Load events into the tabs
function loadEvents() {
    // Upcoming events
const upcomingEventsGrid = document.querySelector('#upcomingEvents .events-grid');

upcomingEventsGrid.innerHTML = events.upcoming.map(event => `
  <div class="event-card">
    <div class="event-header">
      <div class="event-date">${event.date}</div>
      <h3 class="event-title">${event.title}</h3>
    </div>
    <div class="event-content">
      <p class="event-description">${event.description}</p>
      <a href="${event.registerLink}" class="event-register">Register Now</a>
    </div>
  </div>
`).join('');

    
    // Past events
    const pastEventsGrid = document.querySelector('#pastEvents .events-grid');
    pastEventsGrid.innerHTML = events.past.map(event => `
        <div class="event-card">
            <div class="event-header">
                <div class="event-date">${event.date}</div>
                <h3 class="event-title">${event.title}</h3>
            </div>
            <div class="event-content">
                <p class="event-description">${event.description}</p>
                <a href="${event.registerLink}" class="event-register" style="background: #718096;">View Details</a>
            </div>
        </div>
    `).join('');
}

// Load gallery images

// Load team members
function loadTeam() {
    
    // Core team
   const coreTeam = document.querySelector('#coreTeam .team-grid');
coreTeam.innerHTML = team.core.map(member => `
    <div class="team-member">
        <img src="${member.image}" alt="${member.name}" class="team-photo">
        <div class="team-info">
            <h3 class="team-name">${member.name}</h3>
            <p class="team-role">${member.role}</p>
            <p class="team-department">${member.department}</p>
            <div class="team-contact">
                <a href="mailto:${member.email}" class="team-email" title="Email">
                    <i class="fas fa-envelope"></i>
                </a>
                <a href="${member.linkedin}" target="_blank" class="team-linkedin" title="LinkedIn">
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    </div>
`).join('');
    // junior 
    const facultyTeam = document.querySelector('#facultyTeam .team-grid');
    facultyTeam.innerHTML = team.faculty.map(member => `
        <div class="team-member">
            <img src="${member.image}" alt="${member.name}" class="team-photo">
            <div class="team-info">
                <h3 class="team-name">${member.name}</h3>
                <p class="team-role">${member.role}</p>
                <p class="team-department">${member.department}</p>
                <div class="team-contact">
                    <a href="mailto:${member.email}" class="team-email" title="Email">
                        <i class="fas fa-envelope"></i>
                        <span>Email</span>
                    </a>
                    <a href="${member.linkedin}" target="_blank" class="team-linkedin" title="LinkedIn">
                        <i class="fab fa-linkedin"></i>
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
    
    
}
// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // Modal close
    modalClose.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
}

// Initialize smooth scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize tab functionality
function initTabs() {
    // Event tabs
    const eventTabBtns = document.querySelectorAll('.tab-btn');
    eventTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // Update active button
            eventTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show selected tab content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(`${tabId}Events`).classList.add('active');
        });
    });
    
    // Team tabs
    const teamTabBtns = document.querySelectorAll('.team-tab-btn');
    teamTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const teamType = btn.getAttribute('data-team');
            
            // Update active button
            teamTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show selected team category
            document.querySelectorAll('.team-category').forEach(category => {
                category.classList.remove('active');
            });
            document.getElementById(`${teamType}Team`).classList.add('active');
        });
    });
}
// Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const emailField = document.getElementById('email');
    const replyToField = contactForm.querySelector('input[name="_replyto"]');
    
    // Set reply-to dynamically
    if (emailField && replyToField) {
        emailField.addEventListener('input', function() {
            replyToField.value = this.value;
        });
    }
    
    // Form submission handler
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const submitBtn = this.querySelector('.submit-form-btn');
            if (submitBtn) {
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;
                
                // Reset button after 10 seconds if something goes wrong
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 10000);
            }
        });
    }
    
    // WhatsApp join tracking
    const whatsappBtn = document.querySelector('.whatsapp-join-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            // Track WhatsApp click (for analytics)
            console.log('WhatsApp group join clicked');
        });
    }
});
// Query Form Submission
function handleQueryForm() {
    const queryForm = document.getElementById('queryForm');
    
    if (queryForm) {
        queryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                newsletter: document.getElementById('newsletter').checked,
                timestamp: new Date().toISOString()
            };
            
            // Validate form
            if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                showMessage('Please fill in all required fields', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = queryForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // In production, replace with actual form submission
                // Example: using Formspree, EmailJS, or your backend
                console.log('Form submitted:', formData);
                
                // Save to localStorage for demo purposes
                const queries = JSON.parse(localStorage.getItem('codingClubQueries') || '[]');
                queries.push(formData);
                localStorage.setItem('codingClubQueries', JSON.stringify(queries));
                
                // Show success message
                showMessage('Your query has been submitted successfully! We\'ll get back to you soon.', 'success');
                
                // Reset form
                queryForm.reset();
                
                // Restore button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Optional: Send email notification (using EmailJS)
                // sendEmailNotification(formData);
                
            }, 1500);
        });
    }
}

// Show message function
function showMessage(message, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Insert after form
    const queryForm = document.getElementById('queryForm');
    queryForm.parentNode.insertBefore(messageDiv, queryForm);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 300);
    }, 5000);
}

// Add CSS for form messages
const messageStyles = `
    .form-message {
        padding: 15px 20px;
        border-radius: 10px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 500;
        animation: slideIn 0.3s ease;
        transition: opacity 0.3s ease;
    }
    
    @keyframes slideIn {
        from {
            transform: translateY(-20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    .form-message-success {
        background: #d1fae5;
        color: #065f46;
        border: 1px solid #a7f3d0;
    }
    
    .form-message-error {
        background: #fee2e2;
        color: #991b1b;
        border: 1px solid #fecaca;
    }
    
    .form-message i {
        font-size: 1.2rem;
    }
`;

// Add styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = messageStyles;
document.head.appendChild(styleSheet);

// Email notification using EmailJS (optional)
function sendEmailNotification(formData) {
    // You need to setup EmailJS first: https://www.emailjs.com/
    // Replace with your EmailJS credentials
    const templateParams = {
        to_name: 'Coding Club Team',
        from_name: formData.name,
        from_email: formData.email,
        subject: `New Query: ${formData.subject}`,
        message: formData.message,
        phone: formData.phone || 'Not provided'
    };
    
    // Uncomment and configure when you setup EmailJS
    /*
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
        .then(function(response) {
            console.log('Email sent successfully!', response);
        }, function(error) {
            console.log('Failed to send email:', error);
        });
    */
}
// Browser console mein check karein
console.log('Image path:', document.querySelector('.footer-logo-image').src);

// Initialize form handler
document.addEventListener('DOMContentLoaded', function() {
    handleQueryForm();
    
    // Add smooth scroll to contact section
    document.querySelectorAll('a[href="#contact"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add WhatsApp join tracking
    document.querySelectorAll('.whatsapp-btn, .whatsapp-icon').forEach(btn => {
        btn.addEventListener('click', function() {
            // Track WhatsApp join click (for analytics)
            console.log('WhatsApp join clicked');
            // You can add Google Analytics or other tracking here
        });
    });
});
// Open modal with image
function openModal(imageUrl, caption) {
    modalImage.src = imageUrl;
    modalCaption.textContent = caption;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        navbar.style.height = '60px';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        navbar.style.height = '70px';
    }
});