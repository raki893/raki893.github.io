const portfolioData = {
  skills: [
    {
      title: 'OS Support',
      icon: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>',
      items: [
        'Windows 10/11 and Windows Server 2019/2022/2025',
        'macOS and Linux (Ubuntu, Debian)',
        'Installation, CLI administration, and incident resolution'
      ]
    },
    {
      title: 'Identity & Access',
      icon: '<svg viewBox="0 0 24 24"><path d="M16 19a4 4 0 0 0-8 0"/><circle cx="12" cy="7" r="3.5"/><path d="M4 19c1.5-2 3.5-3 8-3s6.5 1 8 3"/></svg>',
      items: [
        'Active Directory, GPOs, user/group provisioning',
        'Okta SSO, Google Workspace, Microsoft 365',
        'Azure AD / Entra ID administration'
      ]
    },
    {
      title: 'Networking & Hardware',
      icon: '<svg viewBox="0 0 24 24"><path d="M12 3v18M3 12h18"/><circle cx="12" cy="12" r="6"/><path d="M7 7l10 10M17 7L7 17"/></svg>',
      items: [
        'LAN, WAN, WiFi troubleshooting',
        'TCP/IP, DNS, DHCP, VLANs, subnetting',
        'Router/switch support, Wireshark, printer & AV peripherals'
      ]
    },
    {
      title: 'MDM & Deployment',
      icon: '<svg viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M8 18v2m8-2v2M2 10h20"/></svg>',
      items: [
        'Microsoft Intune and Google MDM',
        'Desktop application deployment',
        'Remote support tools and silent installers via PowerShell'
      ]
    },
    {
      title: 'ITSM & Operations',
      icon: '<svg viewBox="0 0 24 24"><path d="M7 4h10l4 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/><path d="M9 9h6M9 13h6M9 17h4"/></svg>',
      items: [
        'Ticketing systems, Jira workflows',
        'ITIL-aligned incident and request handling',
        'Technical documentation and knowledge base maintenance'
      ]
    },
    {
      title: 'Virtualization & Automation',
      icon: '<svg viewBox="0 0 24 24"><path d="M5 19V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12"/><path d="M8 10h8M8 14h8M9 19l3-3 3 3"/></svg>',
      items: [
        'Proxmox VE, VirtualBox, pfSense firewalls',
        'PowerShell, Bash, Python, Git/GitHub',
        'Network segmentation and infrastructure lab design'
      ]
    }
  ],
  experience: [
    {
      title: 'Freelance IT Support Technician',
      meta: 'Tangail, Bangladesh • Feb 2018 – Jul 2021',
      points: [
        'Configured, installed, and maintained computer and network equipment for local workstation setups and moves/adds/changes.',
        'Troubleshot LAN, WAN, WiFi, and peripheral issues across Windows, macOS, and Linux environments.',
        'Created and managed user accounts, security groups, and access permissions in Active Directory, Google Workspace, and Microsoft 365.',
        'Deployed desktop applications and documented troubleshooting steps in Jira-based workflows.'
      ]
    },
    {
      title: 'Deutsche Post InHaus Services GmbH',
      meta: 'Koblenz, Germany • Mar 2022 – Present',
      points: [
        'Operate and monitor high-volume automated letter sorting systems in a structured enterprise environment.',
        'Maintain operational accuracy, workflow efficiency, and adherence to quality and safety standards during mail processing.',
        'Work in compliance with workplace safety, data protection, and internal confidentiality requirements.',
        'Collaborate in a fast-paced German-speaking environment with strong process discipline and accountability.'
      ]
    }
  ],
  projects: [
    {
      title: 'Enterprise IT Lab',
      description: 'Production-grade enterprise virtualization and network isolation built on bare-metal hypervisor technology. A segmented enterprise lab for testing identity, endpoint management, firewall policy, and disaster recovery on a single Proxmox host.',
      tags: ['Proxmox VE', 'pfSense', 'AD DS'],
      link: 'https://github.com/raki893/Enterprise-IT-Lab',
      linkLabel: 'GitHub link →'
    },
    {
      title: 'Active Directory Home Lab Setup (VirtualBox)',
      description: 'Built a functional Active Directory domain controller and Windows client environment in VirtualBox to demonstrate real-world network configuration, server administration, user management, and virtualization skills.',
      meta: 'Started: Jul 2025',
      tags: ['Active Directory', 'VirtualBox', 'Windows Server'],
      link: 'https://github.com/raki893/VirtualBox-Active-Directory-Lab',
      linkLabel: 'GitHub link →'
    },
    {
      title: 'Small Office Network (Cisco Packet Tracer)',
      description: 'Designed a small office network model with wired and wireless devices, DHCP configuration, and a hierarchical LAN setup to simulate business connectivity and structured network planning.',
      meta: 'Started: Jun 2025',
      tags: ['Cisco Packet Tracer', 'DHCP', 'LAN Design'],
      link: 'https://github.com/raki893/office-network-pt',
      linkLabel: 'GitHub link →'
    }
  ],
  certificates: [
    {
      provider: 'Cisco',
      title: 'IT Support Specialist Career Path',
      subtitle: 'Cisco Networking Academy',
      badge: 'Career Path',
      preview: 'assets/certificates/previews/IT_Support_Specialist_Career_Path_certificate.png',
      verify: 'https://www.credly.com/badges/3a4ab8cd-a255-4bc1-aa10-267f62cb6040',
      open: 'assets/certificates/docs/IT_Support_Specialist_Career_Path_certificate_islam-rakibul-cse-gmail-com_30f0545e-2b22-477a-8ddc-3dbcb6a56962.pdf',
      alt: 'IT Support Specialist Career Path certificate preview'
    },
    {
      provider: 'Cisco',
      title: 'Operating Systems Support',
      subtitle: 'Cisco Networking Academy',
      badge: 'Systems',
      preview: 'assets/certificates/previews/Operating_Systems_Support.png',
      verify: 'https://www.credly.com/badges/ece5fdd0-2ef1-42e4-abf2-2094faf52e61',
      open: 'assets/certificates/docs/Operating_Systems_Support_certificate_islam-rakibul-cse-gmail-com_69c8d551-297a-4fa9-9845-afb451d236d9 (1).pdf',
      alt: 'Operating Systems Support certificate preview'
    },
    {
      provider: 'Cisco',
      title: 'Networking Basics',
      subtitle: 'Cisco Networking Academy',
      badge: 'Networking',
      preview: 'assets/certificates/previews/Networking_Basics.png',
      verify: 'https://www.credly.com/badges/f6e2ca12-23a7-4492-ada7-5f94da07f46f',
      open: 'assets/certificates/docs/Networking_Basics_certificate_islam-rakibul-cse-gmail-com_7cc71508-7a64-47cc-9e31-fc6e73e7fc2e (1).pdf',
      alt: 'Networking Basics certificate preview'
    },
    {
      provider: 'Cisco',
      title: 'IT Customer Support Basics',
      subtitle: 'Cisco Networking Academy',
      badge: 'Support',
      preview: 'assets/certificates/previews/IT_Customer_Support_Basics.png',
      verify: 'https://www.credly.com/badges/510251a8-da3c-4b70-bd40-0a2869236142',
      open: 'assets/certificates/docs/IT_Customer_Support_Basics_certificate_islam-rakibul-cse-gmail-com_7817146a-b68a-4589-a8b2-e5d00786cb44 (1).pdf',
      alt: 'IT Customer Support Basics certificate preview'
    },
    {
      provider: 'IBM',
      title: 'Information Technology Fundamentals',
      subtitle: 'IBM',
      badge: 'IT Fundamentals',
      preview: 'assets/certificates/previews/Information Technology Fundamentals_IBM.png',
      verify: 'https://www.credly.com/badges/818f9ee9-212a-4f39-af4f-3ced7b89f547',
      open: 'assets/certificates/docs/Information Technology Fundamentals_IBM.pdf',
      alt: 'Information Technology Fundamentals certificate preview'
    },
    {
      provider: 'IBM',
      title: 'Cybersecurity Fundamentals',
      subtitle: 'IBM',
      badge: 'Security',
      preview: 'assets/certificates/previews/Cybersecurity Fundamentals_IBM.png',
      verify: 'https://www.credly.com/badges/f4d1a750-8af4-4dde-b4cb-3d68918a6bfd',
      open: 'assets/certificates/docs/Cybersecurity Fundamentals_IBM.pdf',
      alt: 'Cybersecurity Fundamentals certificate preview'
    },
    {
      provider: 'TELC',
      title: 'TELC Deutsch B1',
      subtitle: 'German language proficiency certificate',
      badge: 'Language',
      preview: 'assets/certificates/previews/telc Deutsch B1.png',
      verify: 'https://results.telc.net/vb?credential=telc-upwC73l',
      open: 'assets/certificates/docs/telc Deutsch B1_Md-Rakibul-Islam-C73l.pdf',
      alt: 'TELC German B1 certificate preview'
    }
  ]
};

const renderSkills = () => {
  const container = document.getElementById('skillsGrid');
  if (!container || container.children.length) return;

  container.innerHTML = portfolioData.skills.map((skill) => `
    <article class="card skill-card">
      <div class="skill-icon" aria-hidden="true">${skill.icon}</div>
      <h3>${skill.title}</h3>
      <ul>
        ${skill.items.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    </article>
  `).join('');
};

const renderExperience = () => {
  const container = document.getElementById('experienceTimeline');
  if (!container || container.children.length) return;

  container.innerHTML = portfolioData.experience.map((item) => `
    <article class="timeline-item">
      <h3>${item.title}</h3>
      <div class="timeline-meta">${item.meta}</div>
      <ul>
        ${item.points.map((point) => `<li>${point}</li>`).join('')}
      </ul>
    </article>
  `).join('');
};

const renderProjects = () => {
  const container = document.getElementById('projectsGrid');
  if (!container || container.children.length) return;

  container.innerHTML = portfolioData.projects.map((project) => `
    <article class="card project-card">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      ${project.meta ? `<div class="project-meta">${project.meta}</div>` : ''}
      <div class="tag-list">
        ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <a class="project-link" href="${project.link}" target="_blank" rel="noopener">${project.linkLabel}</a>
    </article>
  `).join('');
};

const renderCertificates = () => {
  const container = document.getElementById('certificateGrid');
  if (!container || container.children.length) return;

  container.innerHTML = portfolioData.certificates.map((item) => `
    <article class="certificate-card">
      <div class="certificate-topbar">
        <span class="provider-pill">${item.provider}</span>
        <span class="verified-pill">Verified</span>
      </div>
      <button class="certificate-preview" type="button" aria-label="Open ${item.title} certificate">
        <img src="${item.preview}" alt="${item.alt}" />
        <span class="certificate-zoom">Full view</span>
      </button>
      <div class="certificate-body">
        <div class="meta-row">
          <span class="meta-label">Credential</span>
          <span class="meta-badge">${item.badge}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.subtitle}</p>
        <div class="certificate-actions">
          <a href="${item.verify}" target="_blank" rel="noopener">Verify</a>
          <a href="${item.open}" target="_blank" rel="noopener">Open</a>
        </div>
      </div>
    </article>
  `).join('');
};

const initializePortfolio = () => {
  const yearNode = document.getElementById('year');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  renderSkills();
  renderExperience();
  renderProjects();
  renderCertificates();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.12
  });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

  const modal = document.getElementById('certificateModal');
  const modalImage = document.getElementById('certificateModalImage');
  const closeButton = document.querySelector('.certificate-modal-close');

  document.querySelectorAll('.certificate-preview').forEach((preview) => {
    preview.addEventListener('click', () => {
      const img = preview.querySelector('img');
      if (!img || !modal || !modalImage) return;

      modalImage.src = img.src;
      modalImage.alt = img.alt;
      modal.classList.add('visible');
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('visible');
    modal.setAttribute('aria-hidden', 'true');
    modalImage.src = '';
  };

  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target instanceof HTMLElement && event.target.dataset.close === 'true') {
        closeModal();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.classList.contains('visible')) {
        closeModal();
      }
    });
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePortfolio, { once: true });
} else {
  initializePortfolio();
}
