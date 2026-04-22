/* =========================================================
   Quiz Engine — Pilotage IA & Big Data (ANSUT) v2
   Feedback immédiat · Score cumulé · sessionStorage
   ========================================================= */

const QuizEngine = {

  state: {
    scores:   {},
    answered: {}
  },

  init() {
    this._loadState();
    Reveal.on('slidechanged', (e) => {
      const qid = e.currentSlide.dataset && e.currentSlide.dataset.quiz;
      if (qid) this._render(e.currentSlide, qid);
    });
    this._renderCurrent();
  },

  _renderCurrent() {
    if (!Reveal.isReady()) return;
    const s = Reveal.getCurrentSlide();
    if (s && s.dataset.quiz) this._render(s, s.dataset.quiz);
  },

  _render(slide, qid) {
    const el = slide.querySelector(`#quiz-${qid}`);
    if (!el) return;
    const data = getQuestion(qid);
    if (!data) { el.innerHTML = `<p style="color:red">Question introuvable : ${qid}</p>`; return; }
    const answered = this.state.answered[qid] !== undefined;
    const selected = this.state.answered[qid];
    const chKey   = getChapterKey(qid);
    const chScore = this.state.scores[chKey];
    el.innerHTML  = this._html(data, answered, selected, chScore);
  },

  _html(data, answered, selected, chScore) {
    const LETTERS = ['A', 'B', 'C', 'D'];
    const scoreText = chScore ? `${chScore.correct}/${chScore.total}` : '–';

    const options = data.options.map((opt, i) => {
      let cls = 'qo';
      if (answered) {
        if (i === data.correct && i === selected) cls += ' correct';
        else if (i === selected)                   cls += ' incorrect';
        else if (i === data.correct)               cls += ' reveal-c';
        else                                       cls += ' disabled';
      }
      const click = answered ? '' : `onclick="QuizEngine.pick('${data.id}',${i})"`;
      return `<button class="${cls}" ${click}>
        <span class="ql">${LETTERS[i]}</span>
        <span>${opt}</span>
      </button>`;
    }).join('');

    let feedback = '';
    if (answered) {
      const ok = selected === data.correct;
      feedback = `<div class="qf ${ok ? 'qf-ok' : 'qf-err'}">
        <span class="qf-icon">${ok ? '✅' : '❌'}</span>
        <div>
          <div class="qf-title">${ok ? 'Bonne réponse !' : `Réponse correcte : ${data.options[data.correct]}`}</div>
          <div class="qf-expl">${data.explanation}</div>
        </div>
      </div>`;
    }

    return `<div class="quiz-container">
      <div class="qh">
        <span class="qbadge">QCM</span>
        <span class="qscore">Score : ${scoreText}</span>
      </div>
      <div class="qq">${data.question}</div>
      <div class="qopts">${options}</div>
      ${feedback}
    </div>`;
  },

  pick(qid, idx) {
    if (this.state.answered[qid] !== undefined) return;
    this.state.answered[qid] = idx;
    const data  = getQuestion(qid);
    const chKey = getChapterKey(qid);
    if (!this.state.scores[chKey]) this.state.scores[chKey] = { correct: 0, total: 0 };
    this.state.scores[chKey].total++;
    if (idx === data.correct) this.state.scores[chKey].correct++;
    this._saveState();
    const slide = document.querySelector(`section[data-quiz="${qid}"]`);
    if (slide) this._render(slide, qid);
  },

  totalScore() {
    let c = 0, t = 0;
    for (const s of Object.values(this.state.scores)) { c += s.correct; t += s.total; }
    return { correct: c, total: t };
  },

  scoreBoard() {
    const total = this.totalScore();
    const pct   = total.total > 0 ? Math.round((total.correct / total.total) * 100) : 0;

    const chapters = {
      chapitre1: 'Ch.1 Big Data / IA',
      chapitre2: 'Ch.2 Cadrage',
      chapitre3: 'Ch.3 Données',
      chapitre4: 'Ch.4 MLOps',
      chapitre5: 'Ch.5 Pilotage',
      final:     'Synthèse finale'
    };

    const rows = Object.entries(chapters).map(([k, lbl]) => {
      const s = this.state.scores[k] || { correct: 0, total: 0 };
      return `<div class="sb-ch">
        <div class="sb-name">${lbl}</div>
        <div class="sb-val">${s.total > 0 ? `${s.correct}/${s.total}` : '—'}</div>
      </div>`;
    }).join('');

    const color = pct >= 80 ? '#38A169' : pct >= 60 ? '#D69E2E' : '#E53E3E';

    return `<div class="scoreboard">
      <div class="sb-circle" style="border-color:${color}">
        <span class="sb-num" style="color:${color}">${total.correct}/${total.total}</span>
        <span class="sb-pct">${pct} %</span>
      </div>
      <div class="sb-grid">${rows}</div>
    </div>`;
  },

  reset() {
    this.state = { scores: {}, answered: {} };
    sessionStorage.removeItem('ansut_quiz_v2');
  },

  _saveState() {
    try { sessionStorage.setItem('ansut_quiz_v2', JSON.stringify(this.state)); } catch (e) {}
  },

  _loadState() {
    try {
      const d = sessionStorage.getItem('ansut_quiz_v2');
      if (d) { const p = JSON.parse(d); this.state.scores = p.scores||{}; this.state.answered = p.answered||{}; }
    } catch (e) {}
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (typeof Reveal !== 'undefined') {
    Reveal.on('ready', () => { QuizEngine.init(); QuizEngine._renderCurrent(); });
  }
});
