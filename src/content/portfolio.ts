export type LocalizedText = {
  readonly en: string
  readonly ko: string
}

export type ResearchArea = {
  readonly id: string
  readonly title: LocalizedText
  readonly description: LocalizedText
  readonly topics: readonly string[]
}

export type DatedEntry = {
  readonly date: string
  readonly en: string
  readonly ko: string
}

export const profile = {
  name: 'Your Name',
  koreanName: '이름',
  degreeSuffix: 'Ph.D.',
  citationName: 'Surname, A.',
  role: {
    en: 'Research Fellow',
    ko: '연구원',
  },
  affiliation: {
    en: 'Department, Example University',
    ko: '예시대학교 학과',
  },
  field: {
    en: 'Your Research Field',
    ko: '연구 분야',
  },
  statement: {
    en: 'Write one clear sentence about the question that connects your research.',
    ko: '연구를 관통하는 질문을 한 문장으로 소개하세요.',
  },
  about: {
    en: 'Use this paragraph for a concise academic biography. Introduce your field, the questions you study, and the methods or perspectives that distinguish your work.',
    ko: '이 문단에 간결한 연구자 소개를 작성하세요. 연구 분야와 핵심 질문, 연구를 구별해 주는 방법론이나 관점을 소개하면 좋습니다.',
  },
  researchInterests: {
    en: 'Research area one · Research area two · Research area three · Methods',
    ko: '연구 분야 1 · 연구 분야 2 · 연구 분야 3 · 연구 방법',
  },
  email: 'hello@example.com',
  phone: '+1 555 010 0123',
  instagram: 'https://www.instagram.com/',
  linkedin: 'https://www.linkedin.com/',
} as const

export const researchAreas: readonly ResearchArea[] = [
  {
    id: 'systems',
    title: { en: 'Digital Systems', ko: '디지털 시스템' },
    description: {
      en: 'Describe how your work studies technology, data, or other evolving systems.',
      ko: '기술, 데이터, 변화하는 시스템을 연구하는 방식을 설명하세요.',
    },
    topics: ['Topic one', 'Topic two', 'Method one', 'Dataset one'],
  },
  {
    id: 'behavior',
    title: { en: 'Human Behavior', ko: '인간 행동' },
    description: {
      en: 'Summarize the individual or organizational behavior at the center of your research.',
      ko: '연구의 중심이 되는 개인 또는 조직의 행동을 요약하세요.',
    },
    topics: ['Decision-making', 'Organizations', 'Experiments', 'Survey research'],
  },
  {
    id: 'society',
    title: { en: 'Society & Policy', ko: '사회와 정책' },
    description: {
      en: 'Explain the social context, practical problem, or policy implication of your work.',
      ko: '연구의 사회적 맥락과 실무 문제, 정책적 함의를 설명하세요.',
    },
    topics: ['Public policy', 'Communities', 'Equity', 'Impact'],
  },
  {
    id: 'future',
    title: { en: 'Future Directions', ko: '향후 연구' },
    description: {
      en: 'Introduce the emerging questions and collaborations that shape your next projects.',
      ko: '다음 연구를 이끄는 새로운 질문과 협업 방향을 소개하세요.',
    },
    topics: ['Emerging topic', 'New collaboration', 'Open question', 'Future method'],
  },
] as const

export const projects: readonly DatedEntry[] = [
  {
    date: '2026',
    en: 'Sample collaborative research project, Example Research Council.',
    ko: '협업 연구 프로젝트 예시, 예시 연구재단.',
  },
  {
    date: '2025',
    en: 'Sample public or industry research project, Example Partner.',
    ko: '공공 또는 산업 연구 프로젝트 예시, 예시 협력기관.',
  },
] as const

export const awards: readonly DatedEntry[] = [
  {
    date: '2026',
    en: 'Example Research Award, Example Academic Association.',
    ko: '연구상 예시, 예시 학술단체.',
  },
  {
    date: '2025',
    en: 'Example Fellowship, Example Foundation.',
    ko: '펠로우십 예시, 예시 재단.',
  },
] as const

export const training: readonly DatedEntry[] = [
  {
    date: '2025',
    en: 'Advanced Methods Workshop, Example Institute.',
    ko: '고급 연구방법 워크숍, 예시 연구기관.',
  },
] as const
