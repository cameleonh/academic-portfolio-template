import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { getLocaleFromPath, localeText } from '../content/i18n'
import { awards, projects, training } from '../content/portfolio'

type TimelineProps = {
  readonly entries: readonly {
    readonly date: string
    readonly en: string
    readonly ko: string
  }[]
  readonly locale: 'en' | 'ko'
}

function Timeline({ entries, locale }: TimelineProps) {
  return (
    <div className="timeline">
      {entries.map((entry) => (
        <div className="cv-row" key={`${entry.date}-${entry.en}`}>
          <p className="cv-row__period">{entry.date}</p>
          <div className="cv-row__body"><p>{entry[locale]}</p></div>
        </div>
      ))}
    </div>
  )
}

export default function Experience() {
  const locale = getLocaleFromPath(useRouter().pathname)
  const labels = localeText[locale]

  return (
    <Layout title={labels.teaching} description={labels.teachingDescription}>
      <div className="page">
        <div className="container container--wide">
          <header className="page-header">
            <p className="eyebrow">{locale === 'ko' ? '현장과 연구의 연결' : 'Research in practice'}</p>
            <h1 className="page-header__title">{labels.teaching}</h1>
            <p className="page-header__intro">
              {locale === 'ko'
                ? '연구 프로젝트와 수상, 전문 교육 등 연구 활동의 실제 맥락을 소개하세요.'
                : 'Use this page for projects, recognition, and professional training that place your research in context.'}
            </p>
          </header>
          <section className="cv-section">
            <p className="cv-section__label">{locale === 'ko' ? '연구용역' : 'Research & Consulting Projects'}</p>
            <Timeline entries={projects} locale={locale} />
          </section>
          <section className="cv-section">
            <p className="cv-section__label">{locale === 'ko' ? '수상' : 'Awards'}</p>
            <Timeline entries={awards} locale={locale} />
          </section>
          <section className="cv-section">
            <p className="cv-section__label">{locale === 'ko' ? '교육 수료' : 'Training & Certificates'}</p>
            <Timeline entries={training} locale={locale} />
          </section>
        </div>
      </div>
    </Layout>
  )
}
