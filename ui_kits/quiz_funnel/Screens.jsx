/* SUNNYCELLS quiz funnel: the reusable building blocks of an onboarding quiz.
   Every screen is 390x844. Composition only. Controls come from the design system. */

var FAM = { ingestible: 'sun', topical: 'zest', hair: 'sky', wellness: 'sprout' };

/* ---------- shared chrome ---------- */

/* One continuous bar, not one segment per question: a segmented bar turns into
   confetti at 20 questions and stops reading as progress. */
function Progress({ step, total }) {
  return (
    <div style={{ padding: '0 var(--page-gutter-mobile)' }}>
      <div
        role="progressbar"
        aria-valuenow={step}
        aria-valuemin={0}
        aria-valuemax={total}
        style={{ height: 6, borderRadius: 'var(--radius-pill)', background: 'var(--ink-10)', overflow: 'hidden' }}
      >
        <div style={{
          height: '100%', width: (step / total) * 100 + '%',
          background: 'var(--ink)', borderRadius: 'var(--radius-pill)',
          transition: 'width var(--duration-base) var(--ease-standard)'
        }} />
      </div>
    </div>
  );
}

function QuizHeader({ step, total, onBack }) {
  var IconButton = window.IconButton;
  var Wordmark = window.Wordmark;
  return (
    <div style={{ paddingTop: 'var(--space-2)' }}>
      <div style={{
        height: 64, display: 'grid', gridTemplateColumns: '48px 1fr 48px',
        alignItems: 'center', padding: '0 var(--space-2)'
      }}>
        {onBack === false
          ? <span />
          : <IconButton icon="chevron-left" label="Back" size="sm" />}
        <div style={{ textAlign: 'center' }}><Wordmark size={19} /></div>
        <span />
      </div>
      {total ? <Progress step={step} total={total} /> : null}
    </div>
  );
}

function Question({ children }) {
  return (
    <h1 style={{
      margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800,
      fontSize: 30, lineHeight: 1.12, letterSpacing: 'var(--tracking-heading)'
    }}>{children}</h1>
  );
}

function Statement({ children, size }) {
  return (
    <h1 style={{
      margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900,
      fontSize: size || 40, lineHeight: 0.98, letterSpacing: 'var(--tracking-display)',
      textTransform: 'uppercase'
    }}>{children}</h1>
  );
}

function Sub({ children }) {
  return (
    <p style={{
      margin: 'var(--space-4) 0 0', fontSize: 'var(--size-body)',
      lineHeight: 'var(--leading-body)', color: 'var(--ink-80)'
    }}>{children}</p>
  );
}

/* tone="accent" for any --sun surface: grey on yellow measures 3.4:1, under AA,
   and the system allows black text only on the accents. */
function Micro({ children, tone }) {
  var color = tone === 'accent' ? 'var(--ink)'
    : tone === 'invert' ? 'var(--ink-40)'
    : 'var(--ink-60)';
  return (
    <div style={{
      fontFamily: 'var(--font-label)', fontSize: 'var(--size-meta)', fontWeight: 600,
      letterSpacing: 'var(--tracking-mono)', color: color
    }}>{children}</div>
  );
}

/* Answer row. Selected reads as a 2px black rule plus a sunny tint, matching
   RadioOption in the core system but sized for a full-width quiz list. */
function Choice({ children, selected, note, multi }) {
  var Icon = window.Icon;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-4)',
      minHeight: 64, padding: '14px var(--space-5)',
      background: selected ? 'var(--sun-tint)' : 'var(--white)',
      border: '2px solid ' + (selected ? 'var(--ink)' : 'var(--border-hairline)'),
      borderRadius: 'var(--radius-md)', cursor: 'pointer'
    }}>
      <span style={{ flex: 1 }}>
        <span style={{ display: 'block', fontSize: 'var(--size-body)', fontWeight: 600, lineHeight: 1.3 }}>{children}</span>
        {note ? <span style={{ display: 'block', fontSize: 'var(--size-meta)', color: 'var(--ink-60)', marginTop: 2 }}>{note}</span> : null}
      </span>
      <span style={{
        width: 28, height: 28, flex: 'none',
        borderRadius: multi ? 'var(--radius-xs)' : '50%',
        border: '2px solid ' + (selected ? 'var(--ink)' : 'var(--border-input)'),
        background: selected ? 'var(--ink)' : 'var(--white)',
        color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>{selected ? <Icon name="check" size={18} strokeWidth={3} /> : null}</span>
    </div>
  );
}

function Body({ children, style }) {
  return <div style={{ flex: 1, padding: 'var(--space-8) var(--page-gutter-mobile) 0', overflow: 'hidden', ...style }}>{children}</div>;
}

/* onAccent: notes on a --sun surface take --ink. Grey on yellow measures 3.4:1,
   under AA, and the system allows black text only on the accents. */
function Footer({ children, note, onAccent }) {
  return (
    <div style={{ padding: 'var(--space-5) var(--page-gutter-mobile) var(--space-6)' }}>
      {children}
      {note ? <div style={{
        textAlign: 'center', marginTop: 'var(--space-3)', fontSize: 'var(--size-meta)',
        fontWeight: onAccent ? 600 : 500,
        color: onAccent ? 'var(--ink)' : 'var(--ink-60)'
      }}>{note}</div> : null}
    </div>
  );
}

/* ---------- 01 · Start ---------- */
function ScreenStart() {
  var Button = window.Button, Wordmark = window.Wordmark, StarRating = window.StarRating;
  return (
    <React.Fragment>
      <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', padding: 'var(--space-10) var(--page-gutter-mobile) 0' }}>
        <Wordmark size={26} />
        <div style={{ marginTop: 'var(--space-10)' }}>
          <Statement size={46}>Build the routine your cells are asking for.</Statement>
          <Sub>Nine questions, about two minutes. You get a routine built on what your skin is actually doing, not on your birthday.</Sub>
        </div>
        <div style={{
          marginTop: 'var(--space-8)', flex: 1, minHeight: 120, background: 'var(--sun)',
          borderRadius: 'var(--radius-card)', display: 'flex', alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Micro tone="accent">Portrait goes here</Micro>
        </div>
      </div>
      <Footer note="No email needed to see your result.">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-4)' }}>
          <window.OfferFlag size="sm" />
        </div>
        <Button size="lg" fullWidth>Start the quiz</Button>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-5)' }}>
          <StarRating value={4.7} count={12480} size={18} />
        </div>
      </Footer>
    </React.Fragment>
  );
}

/* ---------- 02 · Single select ---------- */
function ScreenSingle() {
  var Button = window.Button;
  return (
    <React.Fragment>
      <QuizHeader step={2} total={9} />
      <Body>
        <Micro>Question 2 of 9</Micro>
        <div style={{ marginTop: 'var(--space-3)' }}>
          <Question>What decade are you in?</Question>
          <Sub>Cell turnover changes shape at each one. This sets your baseline.</Sub>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-8)' }}>
          <Choice>35 to 39</Choice>
          <Choice selected>40 to 49</Choice>
          <Choice>50 to 59</Choice>
          <Choice>60 and up</Choice>
        </div>
      </Body>
      <Footer>
        <Button size="lg" fullWidth>Continue</Button>
      </Footer>
    </React.Fragment>
  );
}

/* ---------- 03 · Multi select ---------- */
function ScreenMulti() {
  var Button = window.Button;
  return (
    <React.Fragment>
      <QuizHeader step={4} total={9} />
      <Body>
        <Micro>Choose all that apply</Micro>
        <div style={{ marginTop: 'var(--space-3)' }}>
          <Question>What has changed in the last five years?</Question>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
          <Choice multi selected>Skin feels thinner</Choice>
          <Choice multi>Hair sheds more</Choice>
          <Choice multi selected>Slower to bounce back</Choice>
          <Choice multi>Sleep got lighter</Choice>
          <Choice multi>Nothing yet, I am ahead of it</Choice>
        </div>
      </Body>
      <Footer>
        <Button size="lg" fullWidth>Continue</Button>
      </Footer>
    </React.Fragment>
  );
}

/* ---------- 04 · Social proof ---------- */
function ScreenProof() {
  var Button = window.Button;
  return (
    <React.Fragment>
      <QuizHeader step={5} total={9} />
      <Body>
        <div style={{ background: 'var(--sun)', borderRadius: 'var(--radius-card)', padding: 'var(--space-6)' }}>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 64,
            letterSpacing: 'var(--tracking-display)', lineHeight: 0.9
          }}>38,400</div>
          <div style={{ fontSize: 'var(--size-body-lg)', fontWeight: 700, marginTop: 'var(--space-3)', lineHeight: 1.3 }}>
            women in their forties started here
          </div>
        </div>
        <div style={{ marginTop: 'var(--space-6)' }}>
          <Statement size={30}>You are not late. You are on time.</Statement>
          <Sub>Most women find us the year something changes. That is exactly the right year to build a floor under it.</Sub>
        </div>
      </Body>
      <Footer>
        <Button size="lg" fullWidth>Continue</Button>
      </Footer>
    </React.Fragment>
  );
}

/* ---------- 05 · Reinforcement ---------- */
function ScreenReinforce() {
  var Button = window.Button, Icon = window.Icon, StarRating = window.StarRating;
  return (
    <React.Fragment>
      <QuizHeader step={6} total={9} />
      <Body>
        <div style={{
          width: 56, height: 56, borderRadius: 'var(--radius-md)', background: 'var(--sun)',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}><Icon name="check" size={30} strokeWidth={3} /></div>
        <div style={{ marginTop: 'var(--space-6)' }}>
          <Statement size={34}>Good. That is a fixable one.</Statement>
          <Sub>Thinning skin is a barrier problem before it is a collagen problem. We will put ceramides first and build from there.</Sub>
        </div>
        <div style={{
          marginTop: 'var(--space-8)', border: '1px solid var(--border-hairline)',
          borderRadius: 'var(--radius-card)', padding: 'var(--space-5)'
        }}>
          <StarRating value={5} size={18} />
          <p style={{ margin: 'var(--space-4) 0 var(--space-4)', fontSize: 'var(--size-body)', lineHeight: 'var(--leading-body)' }}>
            Six weeks in, my jawline came back. I did not expect to notice it that fast.
          </p>
          <Micro>Dana, 52 · verified purchase</Micro>
        </div>
      </Body>
      <Footer>
        <Button size="lg" fullWidth>Continue</Button>
      </Footer>
    </React.Fragment>
  );
}

/* ---------- 06 · Analyzing ---------- */
function ScreenAnalyzing() {
  var rows = [['Reading your answers', 100], ['Matching the study group', 100], ['Building your routine', 64]];
  return (
    <React.Fragment>
      <QuizHeader step={7} total={9} onBack={false} />
      <Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingBottom: 80 }}>
        <Statement size={34}>Building your routine</Statement>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', marginTop: 'var(--space-10)' }}>
          {rows.map(function (r) {
            return (
              <div key={r[0]}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-3)' }}>
                  <span style={{ fontSize: 'var(--size-body)', fontWeight: 600 }}>{r[0]}</span>
                  <span style={{ fontSize: 'var(--size-body)', fontWeight: 800, fontVariantNumeric: 'tabular-nums' }}>{r[1]}%</span>
                </div>
                <div style={{ height: 8, borderRadius: 'var(--radius-pill)', background: 'var(--ink-10)', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: r[1] + '%', background: r[1] === 100 ? 'var(--ink)' : 'var(--sun)', borderRadius: 'var(--radius-pill)' }} />
                </div>
              </div>
            );
          })}
        </div>
        <div style={{
          marginTop: 'var(--space-10)', background: 'var(--surface-sunk)',
          borderRadius: 'var(--radius-card)', padding: 'var(--space-5)'
        }}>
          <Micro>While you wait</Micro>
          <p style={{ margin: 'var(--space-3) 0 0', fontSize: 'var(--size-body)', lineHeight: 'var(--leading-body)' }}>
            92% of the study group saw firmer skin at twelve weeks. Nobody saw it at week one, and we will not pretend otherwise.
          </p>
        </div>
      </Body>
    </React.Fragment>
  );
}

/* ---------- 07 · Results graph ---------- */
function ScreenResult() {
  var Button = window.Button;
  return (
    <React.Fragment>
      <QuizHeader step={8} total={9} />
      <Body>
        <Micro>Your projection</Micro>
        <div style={{ marginTop: 'var(--space-3)' }}>
          <Statement size={34}>Twelve weeks changes the slope.</Statement>
        </div>
        <div style={{
          marginTop: 'var(--space-6)', border: '1px solid var(--border-hairline)',
          borderRadius: 'var(--radius-card)', padding: 'var(--space-5)'
        }}>
          <svg viewBox="0 0 300 150" style={{ width: '100%', height: 150, display: 'block' }} role="img" aria-label="Projected skin firmness over twelve weeks, with and without the routine">
            <line x1="0" y1="130" x2="300" y2="130" stroke="#D8D6CE" strokeWidth="1" />
            <line x1="0" y1="70" x2="300" y2="70" stroke="#EAE8E1" strokeWidth="1" />
            <line x1="0" y1="20" x2="300" y2="20" stroke="#EAE8E1" strokeWidth="1" />
            <path d="M8 96 C 80 100, 150 106, 292 116" fill="none" stroke="#9B9B90" strokeWidth="3" strokeLinecap="round" strokeDasharray="7 7" />
            <path d="M8 96 C 90 92, 150 56, 292 22" fill="none" stroke="#0D0D0C" strokeWidth="4" strokeLinecap="round" />
            <circle cx="8" cy="96" r="6" fill="#0D0D0C" />
            <circle cx="292" cy="22" r="9" fill="#FFC61E" stroke="#0D0D0C" strokeWidth="3" />
          </svg>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'var(--space-3)' }}>
            <Micro>Today</Micro><Micro>Week 6</Micro><Micro>Week 12</Micro>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-5)', marginTop: 'var(--space-4)', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--size-meta)', fontWeight: 700 }}>
              <span style={{ width: 18, height: 4, background: 'var(--ink)', borderRadius: 2 }} />With the routine
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--size-meta)', fontWeight: 600, color: 'var(--ink-60)' }}>
              <span style={{ width: 18, height: 4, background: 'var(--ink-40)', borderRadius: 2 }} />On your own
            </span>
          </div>
        </div>
        <div style={{ marginTop: 'var(--space-4)' }}>
          <Micro>Projection based on a 12-week study of 84 women, aged 35 to 60. Individual results vary.</Micro>
        </div>
      </Body>
      <Footer>
        <Button size="lg" fullWidth>See my routine</Button>
      </Footer>
    </React.Fragment>
  );
}

/* ---------- 08 · Commitment ---------- */
function ScreenCommit() {
  var Button = window.Button;
  return (
    <React.Fragment>
      <div style={{ flex: 1, minHeight: 0, background: 'var(--sun)', display: 'flex', flexDirection: 'column', padding: 'var(--space-10) var(--page-gutter-mobile) 0' }}>
        <Statement size={40}>Sixty seconds a day. That is the whole ask.</Statement>
        <Sub>No powders to shake, no ten-step evening, no ritual to dread. If it takes longer than a minute, we built it wrong.</Sub>
        <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            width: 132, height: 132, borderRadius: '50%', border: '4px solid var(--ink)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 44, letterSpacing: '-0.03em'
          }}>60s</div>
        </div>
      </div>
      <div style={{ background: 'var(--sun)' }}>
        <Footer onAccent note="You can change your mind at any point.">
          <Button size="lg" fullWidth>I am in</Button>
        </Footer>
      </div>
    </React.Fragment>
  );
}

/* ---------- 09 · Offer ---------- */
function ScreenOffer() {
  var Button = window.Button, Badge = window.Badge, Icon = window.Icon, Price = window.Price;
  var OfferFlag = window.OfferFlag, firstOrderPrice = window.firstOrderPrice;
  var full = 142, bundle = 119, first = firstOrderPrice(bundle);
  var line = function (t) {
    return (
      <div key={t} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
        <Icon name="check" size={22} />
        <span style={{ fontSize: 'var(--size-body)', lineHeight: 1.4 }}>{t}</span>
      </div>
    );
  };
  return (
    <React.Fragment>
      <QuizHeader step={9} total={9} />
      <Body>
        <Micro>Built for you</Micro>
        <div style={{ marginTop: 'var(--space-3)' }}>
          <Statement size={32}>Your barrier-first routine</Statement>
        </div>

        <div style={{
          marginTop: 'var(--space-6)', border: '2px solid var(--ink)',
          borderRadius: 'var(--radius-card)', overflow: 'hidden'
        }}>
          <div style={{ background: 'var(--sun)', padding: 'var(--space-4) var(--space-5)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            <OfferFlag size="sm" />
            <span style={{ fontSize: 'var(--size-meta)', fontWeight: 700 }}>{'Save $' + (full - bundle) + ' versus buying separately'}</span>
          </div>
          <div style={{ padding: 'var(--space-5)' }}>
            <Price value={first} compareAt={bundle} size="lg" note={'Then $' + bundle + ' per month, skip or cancel anytime'} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-5)' }}>
              {['SC-04 Barrier Cream, your first step', 'SC-12 Liquid Collagen, mango', 'SC-02 Morning SPF 40'].map(line)}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-5)', marginTop: 'var(--space-5)', flexWrap: 'wrap' }}>
          {[['shield-check', 'Sixty-day returns'], ['truck', 'Free shipping']].map(function (r) {
            return (
              <span key={r[1]} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--size-meta)', fontWeight: 600, color: 'var(--ink-60)' }}>
                <Icon name={r[0]} size={20} />{r[1]}
              </span>
            );
          })}
        </div>
      </Body>
      <Footer>
        <Button size="lg" fullWidth price={first}>Start my routine</Button>
      </Footer>
    </React.Fragment>
  );
}

/* ---------- board ---------- */
var SCREENS = [
  ['01', 'Start', 'Sets the promise and the cost in time. Social proof sits under the button, not above the headline.', ScreenStart],
  ['02', 'Single select', 'One choice, four options. Selected state is a 2px black rule plus a sunny tint.', ScreenSingle],
  ['03', 'Multi select', 'Same row, square check. Always offer the honest opt-out ("Nothing yet").', ScreenMulti],
  ['04', 'Social proof', 'A number she is inside of, then a reframe. Never a countdown or a scarcity line.', ScreenProof],
  ['05', 'Reinforcement', 'Answers her last answer. Names the mechanism, then a real review.', ScreenReinforce],
  ['06', 'Analyzing', 'Honest progress, no fake spinner minutes. Carries one study fact.', ScreenAnalyzing],
  ['07', 'Result', 'The projection, with the study footnote visible on the same screen.', ScreenResult],
  ['08', 'Commitment', 'Full-bleed sunny block. Asks for the smallest real commitment: a minute.', ScreenCommit],
  ['09', 'Offer', 'Integer price, dollar savings, the routine spelled out. No timer.', ScreenOffer]
];

function Frame(props) {
  var S = props.screen;
  return (
    <div style={{ width: 390, flex: 'none' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
        <span style={{
          fontFamily: 'var(--font-label)', fontSize: 'var(--size-meta)', fontWeight: 600,
          letterSpacing: 'var(--tracking-mono)', color: 'var(--ink-60)'
        }}>{props.num}</span>
        <span style={{ fontSize: 'var(--size-body-lg)', fontWeight: 800 }}>{props.title}</span>
      </div>
      <p style={{
        margin: '0 0 var(--space-4)', fontSize: 'var(--size-meta)', lineHeight: 1.5,
        color: 'var(--ink-60)', minHeight: 76
      }}>{props.note}</p>
      <div style={{
        width: 390, height: 844, background: 'var(--white)',
        border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-sheet)',
        overflow: 'hidden', display: 'flex', flexDirection: 'column'
      }}><S /></div>
    </div>
  );
}

function QuizBoard() {
  var Wordmark = window.Wordmark;
  return (
    <div style={{ padding: '64px 48px 96px' }}>
      <Wordmark size={26} />
      <h1 style={{
        margin: 'var(--space-5) 0 0', fontFamily: 'var(--font-display)', fontWeight: 900,
        fontSize: 64, letterSpacing: '-0.04em', textTransform: 'uppercase', lineHeight: 0.95
      }}>Quiz funnel blocks</h1>
      <p style={{ margin: 'var(--space-5) 0 0', maxWidth: 720, fontSize: 'var(--size-body-lg)', lineHeight: 'var(--leading-body)' }}>
        The nine screen types an onboarding quiz is built from. Rearrange and repeat them; the pattern for each type stays fixed.
      </p>
      <div style={{ display: 'flex', gap: 40, marginTop: 64, alignItems: 'flex-start' }}>
        {SCREENS.map(function (s) {
          return <Frame key={s[0]} num={s[0]} title={s[1]} note={s[2]} screen={s[3]} />;
        })}
      </div>
    </div>
  );
}

window.SCKit = Object.assign(window.SCKit || {}, { QuizBoard: QuizBoard });
