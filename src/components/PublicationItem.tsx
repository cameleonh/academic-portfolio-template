import type { Publication, PublicationStatus } from '../content/publications'
import { localeText, type Locale } from '../content/i18n'
import { profile } from '../content/portfolio'

function boldMyName(text: string): React.ReactNode {
  const nameIndex = text.indexOf(profile.citationName)
  if (nameIndex < 0) return text

  const remainder = text.slice(nameIndex + profile.citationName.length)
  return (
    <>
      {text.slice(0, nameIndex)}
      <strong>{profile.citationName}</strong>
      {boldMyName(remainder)}
    </>
  )
}

interface PublicationItemProps {
  pub: Publication
  showStatus?: boolean
  locale?: Locale
}

const statusLabelsEnglish: Record<PublicationStatus, string> = {
  Published: 'Published',
  Forthcoming: 'Forthcoming',
  'Conditionally Accepted': 'Conditionally Accepted',
  'Revise & Resubmit': 'R&R',
  'Under Review': 'Under Review',
  'Working Paper': 'Working Paper',
  'In Progress': 'In Progress',
}

const statusClass: Record<PublicationStatus, string> = {
  Published: 'pub-item__status--published',
  Forthcoming: 'pub-item__status--forthcoming',
  'Conditionally Accepted': 'pub-item__status--forthcoming',
  'Revise & Resubmit': 'pub-item__status--under-review pub-item__status--rnr',
  'Under Review': 'pub-item__status--under-review',
  'Working Paper': 'pub-item__status--in-progress',
  'In Progress': 'pub-item__status--in-progress',
}

export default function PublicationItem({
  pub,
  showStatus = true,
  locale = 'en',
}: PublicationItemProps) {
  const displayVenue = pub.status === 'Revise & Resubmit' ? '' : pub.venue
  const labels = localeText[locale]
  const publicationLink = pub.doi ?? pub.url
  const showsStatusBadge = showStatus && pub.status !== 'Published'
  const yearRedundantWithStatus =
    showsStatusBadge &&
    pub.year?.trim().toLowerCase() === statusLabelsEnglish[pub.status].toLowerCase()
  const showYear = pub.year && !yearRedundantWithStatus

  return (
    <li className="pub-item">
      <p className="pub-item__citation">
        <span>{boldMyName(pub.authors)} </span>
        {showYear && <span>{pub.year}. </span>}
        {publicationLink ? (
          <a
            href={publicationLink}
            className="pub-item__title"
            target="_blank"
            rel="noopener noreferrer"
          >
            {pub.title}
          </a>
        ) : (
          <em className="pub-item__title">{pub.title}</em>
        )}{' '}
        {displayVenue && <em className="pub-item__venue">{displayVenue}</em>}
        {pub.volumeIssuePages ? (
          <span>, {pub.volumeIssuePages}</span>
        ) : displayVenue ? (
          <span>.</span>
        ) : null}
        {publicationLink && (
          <>
            {' '}
            <a
              href={publicationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="pub-item__doi"
            >
              {pub.doi ? 'DOI ↗' : 'Link ↗'}
            </a>
          </>
        )}
        {showsStatusBadge && (
          <span
            className={`pub-item__status ${statusClass[pub.status]}`}
            aria-label={`${labels.publications}: ${statusLabelsEnglish[pub.status]}`}
          >
            {statusLabelsEnglish[pub.status]}
          </span>
        )}
      </p>
    </li>
  )
}
