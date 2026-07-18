import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { getLocaleFromPath, localizedPath, localeText } from '../content/i18n'
import { profile } from '../content/portfolio'
import { site } from '../content/site'
import Footer from './Footer'
import Header from './Header'

function serializeStructuredData(value: object): string {
  return JSON.stringify(value).replace(/[<>&]/g, (character) => {
    const codePoint = character.codePointAt(0)
    return codePoint === undefined ? '' : `\\u${codePoint.toString(16).padStart(4, '0')}`
  })
}

type LayoutProps = {
  readonly children: React.ReactNode
  readonly title?: string
  readonly description?: string
  readonly ogImage?: string
}

export default function Layout({
  children,
  title,
  description,
  ogImage,
}: LayoutProps) {
  const router = useRouter()
  const locale = getLocaleFromPath(router.pathname)
  const labels = localeText[locale]
  const defaultTitle = locale === 'ko' ? site.koreanTitle : site.title
  const pageTitle = title ? `${title} | ${labels.displayName}` : defaultTitle
  const pageDescription = description ?? site.description
  const pageImage = ogImage ?? site.socialPreview
  const canonicalPath = localizedPath(router.pathname, locale)
  const englishUrl = `${site.url}${localizedPath(router.pathname, 'en')}`
  const koreanUrl = `${site.url}${localizedPath(router.pathname, 'ko')}`
  const canonicalUrl = `${site.url}${canonicalPath}`

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="author" content={site.name} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href={englishUrl} />
        <link rel="alternate" hrefLang="ko" href={koreanUrl} />
        <link rel="icon" type="image/svg+xml" href={site.favicon} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content={locale === 'ko' ? 'ko_KR' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <script type="application/ld+json">
          {serializeStructuredData({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: site.name,
            jobTitle: profile.role.en,
            affiliation: {
              '@type': 'Organization',
              name: profile.affiliation.en,
            },
            url: site.url,
            image: site.profileImageUrl,
            sameAs: [
              site.googleScholar,
              site.orcid,
              site.linkedin,
              site.instagram,
            ],
          })}
        </script>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
