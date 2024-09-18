<script>
  import { onMount } from 'svelte';
  // @ts-ignore
  import pkg from 'file-saver';
  const { saveAs } = pkg;

  let profile = {
    name: 'Jane Smith',
    institution: 'Institute of Example',
    hIndex: 15,
    i10Index: 25,
    domains: ['Computer Science', 'Machine Learning', 'Web Development'],
    publications: [
      { title: 'Innovations in Svelte', year: 2024, citations: 70, domain: 'Web Development' },
      { title: 'Deep Dive into JavaScript', year: 2023, citations: 55, domain: 'Web Development' },
      { title: 'Understanding Web Components', year: 2022, citations: 30, domain: 'Web Development' },
      { title: 'Advanced CSS Techniques', year: 2021, citations: 45, domain: 'Web Development' },
    ]
  };

  let searchText = '';
  let minYear = '';
  let maxYear = '';
  let minCitations = '';
  let maxCitations = '';
  let selectedDomain = '';
  let showFilters = false;

  let filteredPublications = [];

  onMount(() => {
    filterPublications();
  });

  function filterPublications() {
    filteredPublications = profile.publications.filter(pub => {
      const matchesText = pub.title.toLowerCase().includes(searchText.toLowerCase());
      const matchesYear = (!minYear || pub.year >= minYear) && (!maxYear || pub.year <= maxYear);
      const matchesCitations = (!minCitations || pub.citations >= minCitations) && (!maxCitations || pub.citations <= maxCitations);
      const matchesDomain = !selectedDomain || pub.domain === selectedDomain;
      return matchesText && matchesYear && matchesCitations && matchesDomain;
    });
  }

  function resetFilters() {
    searchText = '';
    minYear = '';
    maxYear = '';
    minCitations = '';
    maxCitations = '';
    selectedDomain = '';
    filterPublications();
  }

  function exportProfile() {
    const data = {
      ...profile,
      publications: filteredPublications
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    saveAs(blob, 'profile_data.json');
  }
</script>


<div class="profile">
  <div class="profile-left">
    <div class="profile-header">
      <img src="https://via.placeholder.com/120" alt="Profile Picture">
      <h1>{profile.name}</h1>
      <p>{profile.institution}</p>
      <div style="display: flex; align-items: center;">
        <a href="/network-graph" class="follow-button">Co-Author Network</a>
        <button class="export-button" on:click={exportProfile}>Export</button>
      </div>
    </div>

    <div class="profile-publications">
      <div style="display: flex; align-items: center; margin-bottom: 20px;">
        <input
          type="text"
          placeholder="Search Publications"
          bind:value={searchText}
          on:input={filterPublications}
          style="flex: 1; padding: 10px; border-radius: 5px; border: 1px solid #e0e0e0;"
        />
        <button
          class="toggle-filters"
          on:click={() => showFilters = !showFilters}
          style="margin-left: 10px;"
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      {#if showFilters}
        <div class="filters">
          <h2>Filter Publications</h2>
          <div class="filter-group">
            <label for="min-year">Min Year</label>
            <input id="min-year" type="number" bind:value={minYear} on:input={filterPublications}>
          </div>
          <div class="filter-group">
            <label for="max-year">Max Year</label>
            <input id="max-year" type="number" bind:value={maxYear} on:input={filterPublications}>
          </div>
          <div class="filter-group">
            <label for="min-citations">Min Citations</label>
            <input id="min-citations" type="number" bind:value={minCitations} on:input={filterPublications}>
          </div>
          <div class="filter-group">
            <label for="max-citations">Max Citations</label>
            <input id="max-citations" type="number" bind:value={maxCitations} on:input={filterPublications}>
          </div>
          <div class="filter-group">
            <label for="domain">Research Domain</label>
            <select id="domain" bind:value={selectedDomain} on:change={filterPublications}>
              <option value="">All Domains</option>
              {#each profile.domains as domain}
                <option value={domain}>{domain}</option>
              {/each}
            </select>
          </div>
          <div class="filter-buttons">
            <button class="apply-filters" on:click={filterPublications}>Apply Filters</button>
            <button class="reset-filters" on:click={resetFilters}>Reset Filters</button>
          </div>
        </div>
      {/if}

      {#each filteredPublications as pub}
        <div class="publication-card">
          <h3>{pub.title}</h3>
          <p>Year: {pub.year}</p>
          <p>Citations: {pub.citations}</p>
        </div>
      {/each}
    </div>
  </div>

  <div class="profile-right">
    <div class="profile-stats">
      <div class="stats-item">h-index: {profile.hIndex}</div>
      <div class="stats-item">i10-index: {profile.i10Index}</div>
    </div>
    <div class="domains">
      <h2>Research Domains</h2>
      <ul>
        {#each profile.domains as domain}
          <li class="domain-item">{domain}</li>
        {/each}
      </ul>
    </div>
    <!-- Example of a placeholder graph; replace with actual graph component -->
    <div class="stats-graph">
      <svg width="100%" height="100%">
        <!-- Example of a bar chart -->
        <rect class="bar" x="10" y="20" width="30" height="80"></rect>
        <rect class="bar" x="50" y="30" width="30" height="70"></rect>
        <rect class="bar" x="90" y="10" width="30" height="90"></rect>
        <!-- Example of axes and labels -->
        <line x1="0" y1="100" x2="200" y2="100" class="axis"></line>
        <line x1="0" y1="0" x2="0" y2="100" class="axis"></line>
        <text x="25" y="110" class="axis-label">A</text>
        <text x="65" y="110" class="axis-label">B</text>
        <text x="105" y="110" class="axis-label">C</text>
      </svg>
    </div>
  </div>
</div>


<style>
  .profile {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    padding: 20px;
  }

  .profile-left {
    width: 75%;
    padding-right: 20px;
    border-right: 1px solid #e0e0e0;
  }

  .profile-right {
    width: 25%;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .profile-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 20px;
    position: relative;
  }

  .profile-header img {
    border-radius: 50%;
    width: 120px;
    height: 120px;
    margin-bottom: 10px;
  }

  .profile-header h1 {
    font-size: 2rem;
    margin: 0;
  }

  .profile-header p {
    margin: 0.5rem 0;
    color: #555;
  }

  .follow-button,
  .export-button {
    margin-top: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .follow-button {
    background-color: #1a73e8;
    color: #fff;
  }

  .follow-button:hover {
    background-color: #155ab6;
  }

  .export-button {
    background-color: #34a853;
    color: #fff;
    margin-left: 10px;
  }

  .export-button:hover {
    background-color: #2c8d46;
  }

  .profile-stats, .domains {
    font-size: 1rem;
  }

  .profile-stats {
    margin-bottom: 20px;
  }

  .profile-stats .stats-item, .domains .domain-item {
    margin-bottom: 10px;
    color: #333;
  }

  .domains ul {
    list-style: none;
    padding: 0;
  }

  .domains li {
    margin-bottom: 0.5rem;
  }

  .profile-publications {
    margin-top: 20px;
  }

  .publication-card {
    border: 1px solid #e0e0e0;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
    background: #fafafa;
  }

  .publication-card h3 {
    margin: 0;
    font-size: 1.2rem;
  }

  .publication-card p {
    margin: 0.5rem 0;
    color: #555;
  }

  .stats-graph {
    width: 100%;
    height: 200px;
    margin-top: 20px;
  }

  .stats-graph svg {
    width: 100%;
    height: 100%;
  }

  .bar {
    fill: #1a73e8;
  }

  .axis-label {
    font-size: 10px;
    text-anchor: middle;
  }

  .axis {
    stroke: #e0e0e0;
  }

  .filters {
    margin-top: 20px;
    padding: 15px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background: #f9f9f9;
    display: flex;
    flex-direction: column;
  }

  .filters h2 {
    margin-bottom: 10px;
    font-size: 1.2rem;
  }

  .filters .filter-group {
    margin-bottom: 15px;
  }

  .filters .filter-group label {
    display: block;
    margin-bottom: 5px;
    font-size: 0.9rem;
    color: #333;
  }

  .filters .filter-group input,
  .filters .filter-group select {
    width: 100%;
    padding: 8px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    font-size: 0.9rem;
  }

  .filters .filter-group input[type="number"] {
    -moz-appearance: textfield;
  }

  .filters .filter-group input[type="number"]::-webkit-inner-spin-button,
  .filters .filter-group input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .toggle-filters {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    background: #f0f0f0;
    cursor: pointer;
    text-align: center;
    font-size: 1rem;
  }

  .filter-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .filter-buttons button {
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
  }

  .apply-filters {
    background-color: #1a73e8;
    color: #fff;
  }

  .reset-filters {
    background-color: #f0f0f0;
    color: #333;
  }

  .apply-filters:hover {
    background-color: #155ab6;
  }

  .reset-filters:hover {
    background-color: #e0e0e0;
  }
</style>

