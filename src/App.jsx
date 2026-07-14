import { useEffect, useMemo, useState } from 'react'
import './App.css'

const userProfile = {
  id: 1,
  name: '김민수',
  company: '삼성전자',
}

const introCards = [
  { id: 1, src: '/intro-card-1.png', alt: '나눔키오스크 소개 카드 1' },
  { id: 2, src: '/intro-card-2.png', alt: '나눔키오스크 소개 카드 2' },
  { id: 3, src: '/intro-card-3.png', alt: '나눔키오스크 소개 카드 3' },
  { id: 4, src: '/intro-card-4.png', alt: '나눔키오스크 소개 카드 4' },
]

const stageConfig = [
  {
    level: 1,
    name: '알',
    minAmount: 0,
    maxAmount: 4999,
    image: '/stages/lv1-egg.png',
  },
  {
    level: 2,
    name: '새끼 펭귄',
    minAmount: 5000,
    maxAmount: 9999,
    image: '/stages/lv2-baby.png',
  },
  {
    level: 3,
    name: '펭귄',
    minAmount: 10000,
    maxAmount: 49999,
    image: '/stages/lv3-penguin.png',
  },
  {
    level: 4,
    name: '황제 펭귄',
    minAmount: 50000,
    maxAmount: 99999,
    image: '/stages/lv4-emperor.png',
  },
  {
    level: 5,
    name: '전설의 펭귄',
    minAmount: 100000,
    maxAmount: Infinity,
    image: '/stages/lv5-legendary.png',
  },
]

const affiliateData = [
  {
    id: 1,
    company: '삼성전자',
    highestAverageAmount: 9800,
    totalDonationAmount: 1186000000,
    dailyAverageDonationAmount: 6625698,
    totalEmployees: 124000,
    participantCount: 86540,
    totalTagCount: 2748500,
    maxTagsPerPerson: 142,
    peakTagTimeAndDay: '수요일 12:00~13:00',
    installationDate: '2026-01-02',
    operationStartDate: '2026-01-03',
    operationEndDate: '2026-06-30',
    operationPeriodDays: 179,
  },
  {
    id: 2,
    company: '삼성디스플레이',
    highestAverageAmount: 10400,
    totalDonationAmount: 278500000,
    dailyAverageDonationAmount: 1698171,
    totalEmployees: 22700,
    participantCount: 17230,
    totalTagCount: 526300,
    maxTagsPerPerson: 119,
    peakTagTimeAndDay: '월요일 12:00~13:00',
    installationDate: '2026-01-16',
    operationStartDate: '2026-01-18',
    operationEndDate: '2026-06-30',
    operationPeriodDays: 164,
  },
  {
    id: 3,
    company: '삼성물산',
    highestAverageAmount: 12800,
    totalDonationAmount: 168400000,
    dailyAverageDonationAmount: 967816,
    totalEmployees: 9200,
    participantCount: 7180,
    totalTagCount: 214700,
    maxTagsPerPerson: 96,
    peakTagTimeAndDay: '수요일 12:00~13:00',
    installationDate: '2026-01-06',
    operationStartDate: '2026-01-08',
    operationEndDate: '2026-06-30',
    operationPeriodDays: 174,
  },
  {
    id: 4,
    company: '삼성전기',
    highestAverageAmount: 10900,
    totalDonationAmount: 156800000,
    dailyAverageDonationAmount: 916959,
    totalEmployees: 11300,
    participantCount: 8640,
    totalTagCount: 273400,
    maxTagsPerPerson: 127,
    peakTagTimeAndDay: '금요일 08:00~09:00',
    installationDate: '2026-01-09',
    operationStartDate: '2026-01-11',
    operationEndDate: '2026-06-30',
    operationPeriodDays: 171,
  },
  {
    id: 5,
    company: '삼성생명',
    highestAverageAmount: 14600,
    totalDonationAmount: 93600000,
    dailyAverageDonationAmount: 560479,
    totalEmployees: 5100,
    participantCount: 4010,
    totalTagCount: 125800,
    maxTagsPerPerson: 112,
    peakTagTimeAndDay: '화요일 08:00~09:00',
    installationDate: '2026-01-13',
    operationStartDate: '2026-01-15',
    operationEndDate: '2026-06-30',
    operationPeriodDays: 167,
  },
  {
    id: 6,
    company: '삼성화재',
    highestAverageAmount: 13900,
    totalDonationAmount: 81500000,
    dailyAverageDonationAmount: 509375,
    totalEmployees: 5600,
    participantCount: 4280,
    totalTagCount: 134600,
    maxTagsPerPerson: 104,
    peakTagTimeAndDay: '월요일 12:00~13:00',
    installationDate: '2026-01-20',
    operationStartDate: '2026-01-22',
    operationEndDate: '2026-06-30',
    operationPeriodDays: 160,
  },
  {
    id: 7,
    company: '삼성바이오로직스',
    highestAverageAmount: 11700,
    totalDonationAmount: 74300000,
    dailyAverageDonationAmount: 485621,
    totalEmployees: 5400,
    participantCount: 4370,
    totalTagCount: 139400,
    maxTagsPerPerson: 91,
    peakTagTimeAndDay: '목요일 12:00~13:00',
    installationDate: '2026-01-27',
    operationStartDate: '2026-01-29',
    operationEndDate: '2026-06-30',
    operationPeriodDays: 153,
  },
  {
    id: 8,
    company: '삼성증권',
    highestAverageAmount: 15200,
    totalDonationAmount: 57200000,
    dailyAverageDonationAmount: 391781,
    totalEmployees: 2800,
    participantCount: 2140,
    totalTagCount: 67300,
    maxTagsPerPerson: 88,
    peakTagTimeAndDay: '금요일 17:00~18:00',
    installationDate: '2026-02-03',
    operationStartDate: '2026-02-05',
    operationEndDate: '2026-06-30',
    operationPeriodDays: 146,
  },
  {
    id: 9,
    company: '삼성바이오에피스',
    highestAverageAmount: 12300,
    totalDonationAmount: 26900000,
    dailyAverageDonationAmount: 203788,
    totalEmployees: 1100,
    participantCount: 860,
    totalTagCount: 25900,
    maxTagsPerPerson: 84,
    peakTagTimeAndDay: '화요일 18:00~19:00',
    installationDate: '2026-02-17',
    operationStartDate: '2026-02-19',
    operationEndDate: '2026-06-30',
    operationPeriodDays: 132,
  },
  {
    id: 10,
    company: '삼성자산운용',
    highestAverageAmount: 16500,
    totalDonationAmount: 18700000,
    dailyAverageDonationAmount: 134532,
    totalEmployees: 620,
    participantCount: 510,
    totalTagCount: 15800,
    maxTagsPerPerson: 76,
    peakTagTimeAndDay: '목요일 11:00~12:00',
    installationDate: '2026-02-10',
    operationStartDate: '2026-02-12',
    operationEndDate: '2026-06-30',
    operationPeriodDays: 139,
  },
]

function formatNumber(value) {
  return new Intl.NumberFormat('ko-KR').format(value)
}

function formatCurrency(value, unit = '원') {
  if (unit === '천원') {
    return `${formatNumber(Math.round(value / 1000))}천원`
  }

  return `${formatNumber(value)}원`
}

function formatRate(value) {
  return `${value.toFixed(1)}%`
}

function getRandomAmountInRange(minAmount, maxAmount) {
  const start = Math.ceil(minAmount / 1000)
  const end = Math.floor(maxAmount / 1000)
  const randomCount = Math.floor(Math.random() * (end - start + 1)) + start
  return randomCount * 1000
}

function getRandomDonationAmount() {
  const bucket = stageConfig[Math.floor(Math.random() * stageConfig.length)]

  if (bucket.level === 5) {
    return getRandomAmountInRange(100000, 150000)
  }

  return getRandomAmountInRange(bucket.minAmount, bucket.maxAmount)
}

function getStageByAmount(amount) {
  return stageConfig.find((stage) => amount >= stage.minAmount && amount <= stage.maxAmount) ?? stageConfig[0]
}

function getPercentilesByAmount(amount) {
  const stage = getStageByAmount(amount)
  const rangesByLevel = {
    1: { overall: [96, 83], company: [91, 72] },
    2: { overall: [78, 52], company: [58, 34] },
    3: { overall: [38, 14], company: [24, 8] },
    4: { overall: [12, 3], company: [7, 1.8] },
    5: { overall: [2.5, 0.3], company: [1.6, 0.1] },
  }

  const range = rangesByLevel[stage.level]
  const stageSpan = stage.maxAmount === Infinity ? 50000 : Math.max(stage.maxAmount - stage.minAmount, 1)
  const progress = Math.min(Math.max((amount - stage.minAmount) / stageSpan, 0), 1)
  const lerp = (start, end) => start + (end - start) * progress

  return {
    overallPercentile: lerp(range.overall[0], range.overall[1]),
    companyPercentile: lerp(range.company[0], range.company[1]),
  }
}

function BarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="nav-icon nav-icon-bars">
      <path d="M5 14v5" />
      <path d="M10 10v9" />
      <path d="M15 6v13" />
      <path d="M20 12v7" />
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="nav-icon nav-icon-home">
      <path d="M4 11.5 12 5l8 6.5" />
      <path d="M7.5 10.5V19h9v-8.5" />
    </svg>
  )
}

function CardIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="nav-icon nav-icon-card">
      <rect x="6.5" y="4.5" width="11" height="15" rx="2.5" />
      <path d="M9.5 9.5h5" />
      <path d="M9.5 13h5" />
      <path d="M9.5 16.5h3.5" />
    </svg>
  )
}

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="back-icon">
      <path d="M14.5 5.5 8 12l6.5 6.5" />
      <path d="M9 12h7" />
    </svg>
  )
}

function MedalIcon({ rank }) {
  return (
    <span className={`medal medal--${rank}`} aria-label={`${rank}위`}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 4h3l1 3 1-3h3l-2.2 5.2A5.5 5.5 0 1 1 10.2 9.2z" />
      </svg>
    </span>
  )
}

function PenguinBadge({ stage, progressPercent }) {
  const progressAngle = `${Math.max(progressPercent * 3.6, 0)}deg`

  return (
    <div className="penguin-progress" aria-label={`${stage.name} 달성률 ${Math.round(progressPercent)}퍼센트`}>
      <div className="penguin-progress__ring" style={{ '--progress-angle': progressAngle }}>
        <div className="penguin-progress__inner-ring">
          <img src={stage.image} alt={stage.name} className="penguin-image" />
        </div>
      </div>
      <div className="achievement-pill">{Math.round(progressPercent)}% 달성</div>
    </div>
  )
}

function StatCard({ title, items }) {
  return (
    <section className="stat-card">
      <h2>{title}</h2>
      <div className="stat-card__items">
        {items.map((item) => (
          <div key={item.label} className="stat-item">
            <p className="stat-item__label">{item.label}</p>
            <p className={`stat-item__value${item.accent ? ' stat-item__value--accent' : ''}`}>
              <strong>{item.value}</strong>
              <span>{item.unit}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function BottomNav({ currentScreen, onOpenHome, onOpenRanking, onOpenIntro }) {
  return (
    <nav className="bottom-nav" aria-label="하단 메뉴">
      <button
        type="button"
        className={`bottom-nav__item${currentScreen === 'ranking' ? ' bottom-nav__item--active' : ''}`}
        aria-label="랭킹"
        onClick={onOpenRanking}
      >
        <BarIcon />
      </button>
      <button
        type="button"
        className={`bottom-nav__item bottom-nav__item--home${currentScreen === 'home' ? ' is-current' : ''}`}
        aria-label="홈"
        onClick={onOpenHome}
      >
        <HomeIcon />
      </button>
      <button type="button" className="bottom-nav__item" aria-label="소개" onClick={onOpenIntro}>
        <CardIcon />
      </button>
    </nav>
  )
}

function HomeScreen({
  currentUser,
  stage,
  donationAmount,
  donationCount,
  progressPercent,
  overallPercentile,
  companyPercentile,
  onRefresh,
}) {
  const donationStats = [
    { label: '총 모금 횟수', value: formatNumber(donationCount), unit: '회' },
    { label: '누적 모금액', value: formatNumber(donationAmount), unit: '원' },
  ]

  const rankStats = [
    { label: '전체 상위', value: overallPercentile.toFixed(1), unit: '%', accent: true },
    { label: '계열사 상위', value: companyPercentile.toFixed(1), unit: '%', accent: true },
  ]

  return (
    <>
      <header className="hero-header">
        <div className="hero-header__topline">
          <p className="hero-header__eyebrow">MY PAGE</p>
          <button type="button" className="refresh-chip" onClick={onRefresh}>
            랜덤 갱신
          </button>
        </div>
        <h1>
          안녕하세요, <span>{currentUser.name}님</span>
        </h1>
      </header>

      <section className="character-panel">
        <div className="level-pill">LV. {stage.level}</div>
        <p className="character-name">{stage.name}</p>
        <PenguinBadge stage={stage} progressPercent={progressPercent} />
      </section>

      <section className="stats-grid" aria-label="나의 현황">
        <StatCard title="나의 나눔 기록" items={donationStats} />
        <StatCard title="나의 순위" items={rankStats} />
      </section>
    </>
  )
}

function RankingPodiumCard({ item, tone, rank }) {
  return (
    <article className={`podium-card podium-card--${tone}`}>
      <div className="podium-card__badge">{rank}위</div>
      <div className="podium-card__company">{item.company}</div>
      <div className="podium-card__rate">{formatRate(item.participationRate)}</div>
      <div className="podium-card__fraction">
        {formatNumber(item.participantCount)} / {formatNumber(item.totalEmployees)}
      </div>
    </article>
  )
}

function RankingScreen({ rankingData, currentDateLabel }) {
  const topThree = rankingData.slice(0, 3)
  const podiumOrder = [topThree[1], topThree[0], topThree[2]].filter(Boolean)
  const podiumTones = ['silver', 'gold', 'bronze']
  const podiumRanks = [2, 1, 3]

  return (
    <>
      <header className="ranking-header">
        <div className="ranking-header__topline">
          <p className="hero-header__eyebrow">ANALYSIS</p>
          <div className="live-pill">
            <span className="live-pill__dot" />LIVE
          </div>
        </div>
        <h1 className="ranking-header__title">
          실시간 계열사별
          <br />
          참여율 순위
        </h1>
        <p className="ranking-header__subtitle">
          따뜻한 나눔, 우리 계열사 기부 캠페인
          <br />
          {currentDateLabel} 기준
        </p>
      </header>

      <section className="ranking-podium-wrap" aria-label="상위 3개 계열사 참여율 순위">
        {podiumOrder.map((item, index) => (
          <RankingPodiumCard
            key={item.id}
            item={item}
            rank={podiumRanks[index]}
            tone={podiumTones[index]}
          />
        ))}
      </section>

      <section className="ranking-table-section">
        <h2 className="ranking-section-title">계열사별 상세 데이터</h2>
        <div className="ranking-table-card">
          <table className="ranking-table">
            <thead>
              <tr>
                <th>순위</th>
                <th>계열사명</th>
                <th>참여율</th>
                <th>기부 총금액</th>
                <th>인당 기부액</th>
              </tr>
            </thead>
            <tbody>
              {rankingData.map((item) => (
                <tr key={item.id}>
                  <td className="rank-cell">
                    {item.rank <= 3 ? <MedalIcon rank={item.rank} /> : `${item.rank}위`}
                  </td>
                  <td className="company-cell">{item.company}</td>
                  <td className={`rate-cell${item.rank <= 3 ? ' rate-cell--top' : ''}`}>
                    {formatRate(item.participationRate)}
                  </td>
                  <td>{formatCurrency(item.totalDonationAmount, '천원')}</td>
                  <td>{formatCurrency(item.averageDonationPerParticipant)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

function IntroScreen({ onBack }) {
  return (
    <section className="intro-screen" aria-label="나눔키오스크 소개 카드">
      <button type="button" className="intro-back-button" onClick={onBack} aria-label="뒤로가기">
        <ArrowLeftIcon />
      </button>

      <div className="intro-card-list">
        {introCards.map((card) => (
          <article key={card.id} className="intro-card-frame">
            <img src={card.src} alt={card.alt} className="intro-card-image" />
          </article>
        ))}
      </div>
    </section>
  )
}

function App() {
  const [screen, setScreen] = useState('home')
  const [returnScreen, setReturnScreen] = useState('home')
  const [donationAmount, setDonationAmount] = useState(() => getRandomDonationAmount())

  const rankingData = useMemo(() => {
    return [...affiliateData]
      .map((item) => ({
        ...item,
        participationRate: (item.participantCount / item.totalEmployees) * 100,
        averageDonationPerParticipant: Math.round(item.totalDonationAmount / item.participantCount),
      }))
      .sort((a, b) => b.participationRate - a.participationRate)
      .map((item, index) => ({
        ...item,
        rank: index + 1,
      }))
  }, [])

  const currentStage = useMemo(() => getStageByAmount(donationAmount), [donationAmount])
  const donationCount = useMemo(() => Math.round(donationAmount / 1000), [donationAmount])
  const progressPercent = useMemo(() => Math.min((donationAmount / 100000) * 100, 100), [donationAmount])
  const { overallPercentile, companyPercentile } = useMemo(
    () => getPercentilesByAmount(donationAmount),
    [donationAmount],
  )
  const currentDateLabel = useMemo(() => {
    const now = new Date()
    return `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`
  }, [])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setDonationAmount(getRandomDonationAmount())
    }, 180000)

    return () => window.clearInterval(intervalId)
  }, [])

  const refreshDonationState = () => setDonationAmount(getRandomDonationAmount())
  const openHome = () => setScreen('home')
  const openRanking = () => setScreen('ranking')
  const openIntro = () => {
    if (screen !== 'intro') {
      setReturnScreen(screen)
    }
    setScreen('intro')
  }
  const closeIntro = () => setScreen(returnScreen)

  return (
    <main className="page-shell">
      <section className={`mobile-screen mobile-screen--${screen}`}>
        <div className={`screen-content${screen === 'intro' ? ' screen-content--intro' : ''}`}>
          {screen === 'home' && (
            <HomeScreen
              currentUser={userProfile}
              stage={currentStage}
              donationAmount={donationAmount}
              donationCount={donationCount}
              progressPercent={progressPercent}
              overallPercentile={overallPercentile}
              companyPercentile={companyPercentile}
              onRefresh={refreshDonationState}
            />
          )}
          {screen === 'ranking' && <RankingScreen rankingData={rankingData} currentDateLabel={currentDateLabel} />}
          {screen === 'intro' && <IntroScreen onBack={closeIntro} />}
        </div>

        {screen !== 'intro' && (
          <BottomNav
            currentScreen={screen}
            onOpenHome={openHome}
            onOpenRanking={openRanking}
            onOpenIntro={openIntro}
          />
        )}
      </section>
    </main>
  )
}

export default App
