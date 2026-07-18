import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import PublicationItem from '../components/PublicationItem'
import { getLocaleFromPath, localeText } from '../content/i18n'
import { journalArticles, worksInProgress } from '../content/publications'

export default function Publications() {
  const locale = getLocaleFromPath(useRouter().pathname)
  const labels = localeText[locale]

  return (
    <Layout title={labels.publications} description={labels.researchDescription}>
      <div className="page">
        <div className="container container--wide">
          <header className="page-header">
            <p className="eyebrow">{locale === 'ko' ? '연구 성과' : 'Selected work'}</p>
            <h1 className="page-header__title">{labels.publications}</h1>
            <p className="page-header__intro">
              {locale === 'ko'
                ? '샘플 논문을 자신의 학술지 논문과 진행 중 연구로 교체하세요.'
                : 'Replace the sample citations with your journal articles and current work.'}
            </p>
          </header>
          <section className="cv-section">
            <p className="cv-section__label">{labels.journalArticles}</p>
            <ul className="pub-list">
              {journalArticles.map((publication) => (
                <PublicationItem key={publication.title} pub={publication} locale={locale} />
              ))}
            </ul>
          </section>
          <section className="cv-section">
            <p className="cv-section__label">{labels.workInProgress}</p>
            <ul className="pub-list">
              {worksInProgress.map((publication) => (
                <PublicationItem key={publication.title} pub={publication} locale={locale} />
              ))}
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  )
}
