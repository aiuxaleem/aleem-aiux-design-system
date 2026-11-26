/* Showcase live demos: renders the shipping components from components/bundle.js
   into the "AI trust patterns" section. If React or the bundle fails to load, the
   fallback links in each mount stay in place. */
(() => {
  const D = window.AleemDesignSystem_3de1ed;
  if (!window.React || !window.ReactDOM || !D) return;
  const h = React.createElement;
  const REPO = 'https://github.com/aiuxaleem/aleem-aiux-design-system/blob/main/';

  function mount(id, el) {
    const node = document.getElementById(id);
    if (!node) return;
    try { ReactDOM.createRoot(node).render(el); } catch (e) { /* keep the fallback link */ }
  }

  function Answer() {
    const C = D.Citation;
    const [feedback, setFeedback] = React.useState(null);
    const sources = [
      { title: 'Button: variants and when to use danger', domain: 'api/components/Button.md', url: REPO + 'api/components/Button.md' },
      { title: 'ApprovalCard: human in the loop', domain: 'api/components/ApprovalCard.md', url: REPO + 'api/components/ApprovalCard.md' },
      { title: 'Target size (Minimum), WCAG 2.2', domain: 'w3.org/WAI/WCAG22', url: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum' },
    ];
    return h(D.AIResponse, {
      model: 'Design system assistant', confidenceLevel: 'high', sources,
      feedback, onFeedback: setFeedback,
      onCopy: () => {
        const text = 'Use the danger Button only on the confirm step of a destructive action. Put that step in an ApprovalCard that says whether the action can be undone, and keep every control at least 24 px, growing to 44 px on touch.';
        try { navigator.clipboard && navigator.clipboard.writeText(text); } catch (e) { /* clipboard blocked: nothing to do */ }
      },
    },
      'Use the danger Button only on the confirm step of a destructive action', h(C, { n: 1, href: sources[0].url, title: sources[0].title }),
      '. Put that step in an ApprovalCard that says whether the action can be undone', h(C, { n: 2, href: sources[1].url, title: sources[1].title }),
      ', and keep every control at least 24 px, growing to 44 px on touch', h(C, { n: 3, href: sources[2].url, title: sources[2].title }), '.');
  }

  function Approval() {
    const [status, setStatus] = React.useState('pending');
    const reset = status === 'pending' ? null : h('div', { style: { marginTop: 12 } },
      h(D.Button, { variant: 'ghost', size: 'sm', onClick: () => setStatus('pending') }, 'Reset the demo'));
    return h(React.Fragment, null,
      h(D.ApprovalCard, {
        agent: 'Release agent',
        title: 'Publish the v9 tokens to GitHub Pages',
        details: [
          { label: 'Affects', value: 'tokens.css and every component preview' },
          { label: 'When', value: 'As soon as you approve' },
        ],
        risk: 'medium', reversible: true, status,
        decidedBy: status === 'approved' ? 'Approved, by you' : status === 'rejected' ? 'Stopped, by you' : undefined,
        onApprove: () => setStatus('approved'),
        onReject: () => setStatus('rejected'),
      }, 'The live showcase and every preview will switch to the new values. You can roll it back with one commit.'),
      reset);
  }

  function Steps() {
    return h(D.AgentSteps, {
      title: 'Auditing the component previews',
      compact: true,
      steps: [
        { title: 'Load every preview', status: 'done', time: '0:12' },
        { title: 'Check WCAG 2.1 AA with axe', status: 'done', time: '1:48' },
        { title: 'Check that no text overflows', status: 'running', detail: 'Light theme, then dark, then right to left' },
        { title: 'Publish the report', status: 'waiting', detail: 'Needs your review before it goes public' },
      ],
    });
  }

  mount('demo-answer', h(Answer));
  mount('demo-approval', h(Approval));
  mount('demo-steps', h(Steps));
})();
