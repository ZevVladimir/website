import { QuartzComponent, QuartzComponentProps } from "./types"

const LevelToggle: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <div class="level-toggle">
      <span class="level-toggle-label">Audience</span>
      <div class="level-toggle-buttons">
        <button class="level-btn" data-level="lay">
          🟢 Plain English
        </button>
        <button class="level-btn" data-level="general">
          🟡 General
        </button>
        <button class="level-btn" data-level="technical">
          🔵 Technical
        </button>
      </div>
    </div>
  )
}

LevelToggle.afterDOMLoaded = `
  const LEVELS = ['lay', 'general', 'technical'];

  function setAudienceLevel(level) {
    localStorage.setItem('audience-level', level);
    applyAudienceLevel(level);
    updateButtons(level);
  }

  function applyAudienceLevel(level) {
    const target = LEVELS.indexOf(level);
    LEVELS.forEach((type, i) => {
      document.querySelectorAll('blockquote[data-callout="' + type + '"]').forEach(el => {
        const content = el.querySelector('.callout-content');
        if (!content) return;
        if (i <= target) {
          el.removeAttribute('data-callout-fold');
          el.classList.remove('is-collapsed');
          content.style.gridTemplateRows = '1fr';
        } else {
          el.setAttribute('data-callout-fold', '');
          el.classList.add('is-collapsed');
          content.style.gridTemplateRows = '0fr';
        }
      });
    });
  }

  function updateButtons(level) {
    document.querySelectorAll('.level-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.level === level);
    });
  }

  function initAudienceLevel() {
    const hasLevels = LEVELS.some(type =>
      document.querySelector('blockquote[data-callout="' + type + '"]')
    );

    const toggle = document.querySelector('.level-toggle');
    if (!toggle) return;
    toggle.style.display = hasLevels ? 'flex' : 'none';

    if (!hasLevels) return;

    const saved = localStorage.getItem('audience-level') || 'technical';
    applyAudienceLevel(saved);
    updateButtons(saved);

    document.querySelectorAll('.level-btn').forEach(btn => {
      btn.addEventListener('click', () => setAudienceLevel(btn.dataset.level));
    });
  }

  document.addEventListener('nav', initAudienceLevel);
  initAudienceLevel();
`

LevelToggle.displayName = "LevelToggle"
export default LevelToggle