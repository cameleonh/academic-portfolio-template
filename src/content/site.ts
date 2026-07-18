import { profile } from './portfolio'

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com'
const siteUrl = `${siteOrigin.replace(/\/$/, '')}${basePath}`

export const site = {
  name: profile.name,
  title: `${profile.name} | Academic Portfolio`,
  koreanTitle: `${profile.koreanName} | 연구 포트폴리오`,
  description:
    'A bilingual academic portfolio for research, publications, experience, and a curriculum vitae.',
  url: siteUrl,
  email: profile.email,
  cvUrl: `${basePath}/cv/`,
  googleScholar: 'https://scholar.google.com/',
  orcid: 'https://orcid.org/',
  linkedin: profile.linkedin,
  instagram: profile.instagram,
  favicon: `${basePath}/favicon.svg`,
  favicon32: `${basePath}/favicon-32.png`,
  favicon16: `${basePath}/favicon-16.png`,
  appleTouchIcon: `${basePath}/apple-touch-icon.png`,
  profileImage: `${basePath}/profile-placeholder.svg`,
  profileImageUrl: `${siteUrl}/profile-placeholder.svg`,
  socialPreview: `${siteUrl}/social-preview.svg`,
} as const
