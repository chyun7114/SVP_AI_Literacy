import './App.css'

const donationStats = [
  { label: '총 모금 횟수', value: '12', unit: '회' },
  { label: '누적 모금액', value: '248,000', unit: '원' },
]

const rankStats = [
  { label: '전체 중 내 순위', value: '37', unit: '위', accent: true },
  { label: '계열사 내 순위', value: '5', unit: '위', accent: true },
]

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

function PenguinBadge() {
  return (
    <div className="penguin-progress" aria-label="새끼 펭귄 달성률 25퍼센트">
      <div className="penguin-progress__ring">
        <div className="penguin-progress__inner-ring">
          <img src="/baby-penguin.png" alt="새끼 펭귄" className="penguin-image" />
        </div>
      </div>
      <div className="achievement-pill">25% 달성</div>
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

function App() {
  return (
    <main className="page-shell">
      <section className="mobile-screen">
        <header className="hero-header">
          <p className="hero-header__eyebrow">MY PAGE</p>
          <h1>
            안녕하세요, <span>지민님</span>
          </h1>
        </header>

        <section className="character-panel">
          <div className="level-pill">LV. 2</div>
          <p className="character-name">새끼 펭귄</p>
          <PenguinBadge />
        </section>

        <section className="stats-grid" aria-label="나의 현황">
          <StatCard title="나의 나눔 기록" items={donationStats} />
          <StatCard title="나의 순위" items={rankStats} />
        </section>

        <nav className="bottom-nav" aria-label="하단 메뉴">
          <button type="button" className="bottom-nav__item" aria-label="통계">
            <BarIcon />
          </button>
          <button
            type="button"
            className="bottom-nav__item bottom-nav__item--home"
            aria-label="홈"
          >
            <HomeIcon />
          </button>
          <button type="button" className="bottom-nav__item" aria-label="카드 정보">
            <CardIcon />
          </button>
        </nav>
      </section>
    </main>
  )
}

export default App
