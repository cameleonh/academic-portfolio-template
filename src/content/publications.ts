export type PublicationStatus =
  | 'Published'
  | 'Forthcoming'
  | 'Conditionally Accepted'
  | 'Revise & Resubmit'
  | 'Under Review'
  | 'Working Paper'
  | 'In Progress'

export type Publication = {
  readonly authors: string
  readonly year?: string
  readonly title: string
  readonly venue: string
  readonly volumeIssuePages?: string
  readonly doi?: string
  readonly url?: string
  readonly status: PublicationStatus
  readonly manuscriptAvailable?: boolean
}

export const journalArticles: readonly Publication[] = [
  {
    authors: 'Surname, A., & Collaborator, B.',
    year: '2026',
    title: 'Replace this sample title with your most recent publication.',
    venue: 'Example Journal',
    volumeIssuePages: '12(3), 100–118',
    status: 'Forthcoming',
  },
  {
    authors: 'Collaborator, C., Surname, A., & Collaborator, D.',
    year: '2025',
    title: 'A second sample article showing a multi-author citation.',
    venue: 'Journal of Example Research',
    volumeIssuePages: '8(2), 44–61',
    url: 'https://example.com/',
    status: 'Published',
  },
  {
    authors: 'Surname, A.',
    year: '2024',
    title: 'A sample single-author publication for the portfolio.',
    venue: 'Example Review',
    volumeIssuePages: '5(1), 1–19',
    status: 'Published',
  },
] as const

export const worksInProgress: readonly Publication[] = [
  {
    authors: 'Surname, A., & Collaborator, E.',
    year: '2026',
    title: 'Replace this title with a current manuscript or working paper.',
    venue: 'Target journal or project name',
    status: 'Under Review',
  },
  {
    authors: 'Surname, A.',
    title: 'Add another emerging project or remove this sample entry.',
    venue: '',
    status: 'In Progress',
  },
] as const
