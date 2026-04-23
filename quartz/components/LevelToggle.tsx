import { QuartzComponent, QuartzComponentProps } from "./types"

const LevelToggle: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <div class="level-toggle">
      <span class="level-toggle-label">Audience</span>
      <div class="level-toggle-buttons">
        <button class="level-btn" data-level="lay">🟢 Plain English</button>
        <button class="level-btn" data-level="general">🟡 General</button>
        <button class="level-btn" data-level="technical">🔵 Technical</button>
      </div>
    </div>
  )
}

LevelToggle.afterDOMLoaded = `
  const LEVELS = ['lay', 'general', 'technical'];
  const ICONS  = { lay: '🟢', general: '🟡', technical: '🔵' };

  function saveSelected(selected) {
    localStorage.setItem('audience-levels', JSON.stringify(selected));
  }

  function loadSelected() {
    try {
      const raw = localStorage.getItem('audience-levels');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return ['lay'];
  }

  function applySelected(selected) {
    LEVELS.forEach(type => {
      const visible = selected.includes(type);
      document.querySelectorAll('blockquote[data-callout="' + type + '"]').forEach(el => {
        const content = el.querySelector('.callout-content');
        if (!content) return;
        if (visible) {
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

  function updateButtons(selected) {
    document.querySelectorAll('.level-btn').forEach(btn => {
      btn.classList.toggle('active', selected.includes(btn.dataset.level));
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

    let selected = loadSelected();
    applySelected(selected);
    updateButtons(selected);

    document.querySelectorAll('.level-btn').forEach(btn => {
      const newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);
      newBtn.addEventListener('click', () => {
        const level = newBtn.dataset.level;
        if (selected.includes(level)) {
          selected = selected.filter(l => l !== level);
        } else {
          selected = [...selected, level];
        }
        saveSelected(selected);
        applySelected(selected);
        updateButtons(selected);
      });
    });
  }

  document.addEventListener('nav', initAudienceLevel);
  initAudienceLevel();
`

LevelToggle.displayName = "LevelToggle"
export default LevelToggle