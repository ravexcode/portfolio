type Project = {
  logo_url: string;
  name: string;
  description: string;
  langs: string[];
  frameworks: string[];
  apps: string[];
  repo: string;
  deploy?: string;
}

export const projects: Project[] = [
  {
    logo_url: "https://raw.githubusercontent.com/ravexcode/Eclipze/refs/heads/master/public/favicon.ico",
    name: "Eclipze",
    description: "Workflow management tool made for developers and clients team",
    langs: [ "TypeScript", "Prisma", "Docker", "SQL" ],
    frameworks: [ "NextJS" ],
    apps: [ "Supabase", "Vercel", "Codex" ],
    repo: "https://github.com/ravexcode/Eclipze",
  },
  {
    logo_url: "https://raw.githubusercontent.com/ravexcode/credifox-store/refs/heads/master/public/logo.svg",
    name: "Credifox",
    description: "Online catalog for the bussiness Credifox, built to integrate a better workflow and finance in the bussiness",
    langs: [ "TypeScript", "Prisma" ],
    frameworks: [ "NextJS", "ShadCN" ],
    apps: [ "Neon", "Vercel", "Stripe" ],
    repo: "https://github.com/ravexcode/credifox-store",
  },
  {
    logo_url: "https://raw.githubusercontent.com/ravexcode/programmate/refs/heads/development/public/logos/logo.svg",
    name: "Nex0",
    description: "AI-Powered workflows Saas built to improve a better workflow for the devs in their projects. The first project that I've used Model, Service, Controller project structure",
    langs: [ "TypeScript", "SQL" ],
    frameworks: [ "NextJS" ],
    apps: [ "Supabase", "Vercel", "Stripe" ],
    repo: "https://github.com/ravexcode/programmate",
  },
  {
    logo_url: "https://raw.githubusercontent.com/ravexcode/list-app/refs/heads/web/public/favicon.ico",
    name: "CloudBook",
    description: "Note app built for user's security",
    langs: [ "JavaScript", "Dart", "SQL" ],
    frameworks: [ "NextJS", "Flutter" ],
    apps: [ "Vercel", "Supabase" ],
    repo: "https://github.com/ravexcode/list-app"
  },
]
