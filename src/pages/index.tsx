import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import CopyEmail from '../components/CopyEmail'
import Layout from '../components/Layout'
import LinkButton from '../components/LinkButton'
import PublicationItem from '../components/PublicationItem'
import { getLocaleFromPath, localizedPath, localeText } from '../content/i18n'
import { journalArticles } from '../content/publications'
import { profile, researchAreas } from '../content/portfolio'
import { site } from '../content/site'

function ResearchMotif() {
  return (
    <svg className="hero__motif" width="620" height="440" viewBox="0 0 620 440" fill="none" aria-hidden="true">
      <path d="M84 336C178 225 263 254 330 159C383 84 470 72 563 110" stroke="var(--color-motif-muted)" strokeWidth="2" opacity=".24" />
      <path d="M68 365C179 302 247 326 350 229C421 163 499 161 583 180" stroke="var(--color-navy)" strokeWidth="2" opacity=".2" />
      {[84, 184, 330, 458, 563].map((x, index) => (
        <circle key={x} cx={x} cy={[336, 244, 159, 88, 110][index]} r="8" fill="var(--color-navy)" opacity=".2" />
      ))}
    </svg>
  )
}

export default function Home() {
  const router = useRouter()
  const locale = getLocaleFromPath(router.pathname)
  const labels = localeText[locale]
  const local = <T extends { readonly en: string; readonly ko: string }>(value: T) => value[locale]

  return (
    <Layout description={labels.homeDescription}>
      <div className="page page--home">
        <section className="hero" aria-labelledby="hero-name">
          <ResearchMotif />
          <div className="container container--wide">
            <div className="hero__inner">
              <div className="hero__text">
                <p className="eyebrow">{local(profile.field)}</p>
                <h1 className="hero__name" id="hero-name">
                  {locale === 'ko' ? profile.koreanName : profile.name}, {profile.degreeSuffix}
                </h1>
                <p className="hero__title">{local(profile.role)}</p>
                <p className="hero__affiliation">{local(profile.affiliation)}</p>
                <p className="hero__statement">{local(profile.statement)}</p>
                <div className="hero__links">
                  <LinkButton href={localizedPath('/research', locale)} filled>
                    {locale === 'ko' ? '연구 보기' : 'Explore research'}
                  </LinkButton>
                  <LinkButton href={localizedPath('/cv', locale)}>CV</LinkButton>
                  <CopyEmail email={profile.email} className="link-btn" locale={locale} />
                  <address className="hero__contact">
                    <ul className="hero__contact-list">
                      <li>
                        <a
                          href={`tel:${profile.phone.replace(/\s/g, '')}`}
                          className="hero__contact-link"
                          aria-label={`${locale === 'ko' ? '전화' : 'Call'}: ${profile.phone}`}
                          title={`${locale === 'ko' ? '전화' : 'Call'}: ${profile.phone}`}
                        >
                          <svg
                            className="hero__contact-icon"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path
                              d="M22 16.9v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.8a2 2 0 0 1-.45 2.11L9 10.94A16 16 0 0 0 15.06 17l1.31-1.31a2 2 0 0 1 2.11-.45c.9.32 1.84.55 2.8.68A2 2 0 0 1 22 16.9Z"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href={profile.linkedin}
                          className="hero__contact-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={locale === 'ko' ? 'LinkedIn 프로필 열기' : 'Open LinkedIn profile'}
                          title="LinkedIn"
                        >
                          <svg
                            className="hero__contact-icon"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path d="M16 8A6 6 0 0 1 22 14V21H18V14A2 2 0 0 0 14 14V21H10V14A6 6 0 0 1 16 8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                            <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                            <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.8" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href={profile.instagram}
                          className="hero__contact-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={locale === 'ko' ? 'Instagram 프로필 열기' : 'Open Instagram profile'}
                          title="Instagram"
                        >
                          <svg
                            className="hero__contact-icon"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
                            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </address>
                </div>
              </div>
              <Image src={site.profileImage} alt={labels.headshotAlt} className="hero__headshot" width={320} height={400} priority />
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="about-heading">
          <div className="container container--wide">
            <p className="section__heading" id="about-heading">{labels.about}</p>
            <p className="about-lead">{local(profile.about)}</p>
          </div>
        </section>

        <section className="section section--bordered" aria-labelledby="areas-heading">
          <div className="container container--wide">
            <p className="section__heading" id="areas-heading">{labels.research}</p>
            <div className="research-grid">
              {researchAreas.map((area) => (
                <article className="research-card" key={area.id}>
                  <p className="research-card__index">0{researchAreas.indexOf(area) + 1}</p>
                  <h2 className="research-card__title">{local(area.title)}</h2>
                  <p className="research-card__desc">{local(area.description)}</p>
                  <ul className="topic-list" aria-label={local(area.title)}>
                    {area.topics.map((topic) => <li key={topic}>{topic}</li>)}
                  </ul>
                </article>
              ))}
            </div>
            <Link href={localizedPath('/research', locale)} className="text-link">
              {locale === 'ko' ? '연구 프로그램 자세히 보기 →' : 'View research programs →'}
            </Link>
          </div>
        </section>

        <section className="section section--bordered" aria-labelledby="selected-publications">
          <div className="container container--wide">
            <p className="section__heading" id="selected-publications">
              {locale === 'ko' ? '주요 논문' : 'Selected Publications'}
            </p>
            <ul className="pub-list">
              {journalArticles.slice(0, 4).map((publication) => (
                <PublicationItem key={publication.title} pub={publication} locale={locale} />
              ))}
            </ul>
            <Link href={localizedPath('/publications', locale)} className="text-link">
              {locale === 'ko' ? '전체 논문 보기 →' : 'View all publications →'}
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}
