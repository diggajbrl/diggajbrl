const SUN = 'M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z';
const MOON = 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z';

const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
document.getElementById('theme-icon').setAttribute('d', savedTheme === 'dark' ? SUN : MOON);

function toggleTheme() {
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = dark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    document.getElementById('theme-icon').setAttribute('d', dark ? MOON : SUN);
    localStorage.setItem('theme', next);
}

const skills = [
    { name: 'HTML', icon: '🔖' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'Django', icon: '🌿' },
    { name: 'React JS', icon: '⚛' },
    { name: 'SEO', icon: '🔍' },
    { name: 'GitHub', icon: '◉' },
];

const grid = document.getElementById('skills-grid');
skills.forEach(s => {
    const el = document.createElement('span');
    el.className = 'skill-tag';
    el.innerHTML = `${s.icon} ${s.name}`;
    grid.appendChild(el);
});

const jobs = [
    {
        title: 'Full Stack Developer',
        company: 'Compex Nepal', companyUrl: 'https://compexnepal.com', loc: 'Nepal', type: 'Creator',
        date: 'Jul 2023 – Present',
        bullets: [
            'Built a dynamic article website with real-time content management.',
            'Designed a modern, fully responsive UI following the 2026 redesign.',
            'Implemented SEO best practices, achieving top Google search rankings.',
            'Applied structured content writing techniques focused on readability and user intent.',
            'Deployed Django projects and gained hands-on experience with Google Search Console.',
            'Improved user engagement by actively collecting and acting on user feedback.',
        ]
    },
];

const list = document.getElementById('work-list');
jobs.forEach(job => {
    const meta = [
        `<span class="job-company"><a href="${job.companyUrl}" target="_blank" rel="noopener noreferrer">${job.company}</a></span>`,
        `<span class="job-sep">·</span>`,
        `<span class="job-loc">${job.loc}</span>`,
        ...(job.type ? [`<span class="job-sep">·</span>`, `<span class="job-type">${job.type}</span>`] : []),
    ].join('');

    const div = document.createElement('div');
    div.className = 'job';
    div.innerHTML = `
      <div class="job-dot-col"><div class="job-dot"></div></div>
      <div>
        <div class="job-title">${job.title}</div>
        <div class="job-meta">${meta}</div>
        <div class="job-date">${job.date}</div>
        <ul class="job-bullets">${job.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      </div>`;
    list.appendChild(div);
});