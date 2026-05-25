// script.js

const SOCIALS = [
  { name: "WhatsApp",  handle: "@Rahmat Ramadhan", icon: "phone",     href: "https://api.whatsapp.com/qr/ZVI6JHM2VRYYG1" },
  { name: "Instagram", handle: "@rhmat_rmdhnn",     icon: "instagram", href: "https://www.instagram.com/rhmat_rmdhnn?igsh=MTExNnhnMXl3cHljeQ==" },
  { name: "GitHub",    handle: "@rhmtt",           icon: "github",    href: "https://github.com/rahmatramadhaan30-hash" },
  { name: "Email",     handle: "rahmatramadhaan30@gmail.com", icon: "mail", href: "mailto:rahmatramadhaan30@gmail.com" },
];

const TECH = [
  { label: "React",       icon: "atom" },
  { label: "Next.js",     icon: "globe" },
  { label: "TypeScript",  icon: "code-2" },
  { label: "Node.js",     icon: "server" },
  { label: "PostgreSQL",  icon: "database" },
  { label: "Git",         icon: "git-branch" },
];

function icon(name) {
  if (name === 'instagram') {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5"></rect>
        <circle cx="12" cy="12" r="3"></circle>
        <circle cx="17.5" cy="6.5" r="1"></circle>
      </svg>`;
  }

  if (name === 'github') {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.41 7.86 10.95.57.1.78-.25.78-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.18A10.9 10.9 0 0112 6.8c.97.005 1.95.13 2.86.38 2.18-1.49 3.14-1.18 3.14-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.4-5.28 5.68.41.35.78 1.03.78 2.08 0 1.5-.01 2.7-.01 3.07 0 .31.2.67.79.56A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/>
      </svg>`;
  }

  return `<i data-lucide="${name}"></i>`;
}

// Render social cards
document.getElementById("socials").innerHTML = SOCIALS.map(({ name, handle, icon: ic, href }) => `
  <a href="${href}" class="card" target="_blank" rel="noreferrer">
    <div class="card-left">
      <div class="card-icon">${icon(ic)}</div>
      <div>
        <div class="card-name">${name}</div>
        <div class="card-handle">${handle}</div>
      </div>
    </div>
    <span class="card-arrow">${icon("arrow-up-right")}</span>
  </a>
`).join("");

// Render tech badges
document.getElementById("tech").innerHTML = TECH.map(({ label, icon: ic }) => `
  <span class="badge-tech">${icon(ic)} ${label}</span>
`).join("");

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Activate Lucide icons
lucide.createIcons();
