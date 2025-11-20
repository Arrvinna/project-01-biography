<script>
  import { onMount } from 'svelte';

  // Section component: accept four props
  export let title = "";
  export let item1 = "";
  export let item2 = "";
  export let item3 = "";

  // Theme state (persistent)
  let isDarkMode = false;

  function applyTheme() {
    const theme = isDarkMode ? 'dark' : 'light';
    // set a data attribute on the root element so CSS can target it globally
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      // ignore storage errors (private mode, etc.)
    }
  }

  function toggleTheme() {
    isDarkMode = !isDarkMode;
    applyTheme();
  }

  onMount(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark') isDarkMode = true;
      else if (stored === 'light') isDarkMode = false;
    } catch (e) {
      // ignore
    }
    applyTheme();
  });
</script>

<!-- Theme toggle button placed above the card so it's available per-section; it controls a global data attribute on <html> and persists to localStorage -->
<div class="section-with-toggle">
  <button class="theme-toggle" on:click={toggleTheme} aria-label="Toggle theme">
    {isDarkMode ? '🌞' : '🌙'}
  </button>

  <div class="card mb-3">
    <div class="card-body">
      <h3 class="card-title">{title}</h3>
      {#if item1}<p class="card-text">{item1}</p>{/if}
      {#if item2}<p class="card-text">{item2}</p>{/if}
      {#if item3}<p class="card-text">{item3}</p>{/if}
    </div>
  </div>
</div>

<style>
  /* Global theme variables applied via data-theme on <html> */
  :global(:root[data-theme='light']) {
    --bg: #ffffff;
    --text: #111827;
    --card-bg: #ffffff;
    --card-border: #e5e7eb;
  }

  :global(:root[data-theme='dark']) {
    --bg: #0b1220;
    --text: #e6eef8;
    --card-bg: #0f1724;
    --card-border: #233044;
  }

  /* Body background + default text color */
  :global(body) {
    background-color: var(--bg);
    color: var(--text);
    transition: background-color 160ms ease, color 160ms ease;
  }

  /* Make card use the variables so existing markup adapts */
  :global(.card) {
    background-color: var(--card-bg) !important;
    color: var(--text) !important;
    border-color: var(--card-border) !important;
    transition: background-color 160ms ease, color 160ms ease, border-color 160ms ease;
  }

  /* Positioning for the toggle in this component */
  .section-with-toggle {
    position: relative;
  }

  .theme-toggle {
    position: absolute;
    right: 0.25rem;
    top: -2rem;
    background: transparent;
    border: 1px solid var(--card-border);
    color: var(--text);
    padding: 0.25rem 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    line-height: 1;
  }

  .theme-toggle:focus {
    outline: 2px solid rgba(59,130,246,0.4);
    outline-offset: 2px;
  }
</style>
