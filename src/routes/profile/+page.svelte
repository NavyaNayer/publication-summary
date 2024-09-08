<script>
  // Script for profile-specific logic
  let profileName = "Researcher Name";
  let profileLine = "Profile Line";
  let associatedOrgs = ["Org 1", "Org 2"];
  let activeTab = 'general'; // Default active tab

  // Function to handle tab switching
  /**
     * @param {string} tab
     */
  function switchTab(tab) {
    activeTab = tab;
  }
</script>

<main class="profile-page">
    <!-- Profile Header -->
    <div class="profile-header position-relative bg-white p-4 rounded shadow-sm mb-4">
        <img src="../src/lib/images/banner.png" alt="Background" class="background-image img-fluid rounded"/>
        <div class="profile-avatar position-absolute">
            <img src="../src/lib/images/avatar.png" alt="Profile Avatar" class="img-fluid"/>
        </div>
        <h1 class="mt-3">{profileName}</h1>
        <p class="text-muted">{profileLine}</p>
    </div>

    <!-- Profile Info -->
    <div class="profile-info row mb-4">
        <div class="col-md-8">
            <h2>Associated Orgs</h2>
            <ul class="list-unstyled">
                {#each associatedOrgs as org}
                    <li>{org}</li>
                {/each}
            </ul>
        </div>
        <div class="col-md-4 text-md-end">
            <button class="btn btn-primary me-2">Follow</button>
            <button class="btn btn-secondary me-2">Connect</button>
            <button class="btn btn-success">Send Co-auth Request</button>
        </div>
    </div>

    <!-- Summary and Statistics Section -->
    <div class="row mb-4">
        <!-- Summaries Section -->
        <div class="col-md-3">
            <h2>Summaries</h2>
            <div class="list-group">
                <button class="list-group-item list-group-item-action active">General</button>
                <button class="list-group-item list-group-item-action">Field-Wise</button>
            </div>
        </div>

        <!-- Statistics Dashboard -->
        <div class="col-md-9">
            <div class="card mb-4">
                <div class="card-body">
                    <h2 class="card-title">Statistics Dashboard</h2>
                    <ul class="list-unstyled mb-4">
                        <li><strong>H-index:</strong> <span class="fw-bold">XX</span></li>
                        <li><strong>I-index:</strong> <span class="fw-bold">XX</span></li>
                        <li><strong>Published Papers:</strong> <span class="fw-bold">XX</span></li>
                        <li><strong>Citations:</strong> <span class="fw-bold">XX</span></li>
                    </ul>
                    <div class="btn-group">
                        <button class="btn btn-outline-primary me-2">Recent Citations</button>
                        <button class="btn btn-outline-primary me-2">Top 10 H/I-index Papers</button>
                        <button class="btn btn-outline-primary">All Papers</button>
                    </div>
                </div>
            </div>

            <!-- About Section with Tabs -->
            <div class="card">
                <div class="card-body">
                    <ul class="nav nav-tabs mb-4" id="profile-tabs" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link {activeTab === 'general' ? 'active' : ''}" id="general-tab" data-bs-toggle="tab" href="#general" role="tab" aria-controls="general" aria-selected={activeTab === 'general'} on:click={() => switchTab('general')}>General</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link {activeTab === 'cv' ? 'active' : ''}" id="cv-tab" data-bs-toggle="tab" href="#cv" role="tab" aria-controls="cv" aria-selected={activeTab === 'cv'} on:click={() => switchTab('cv')}>CV</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link {activeTab === 'agi' ? 'active' : ''}" id="agi-tab" data-bs-toggle="tab" href="#agi" role="tab" aria-controls="agi" aria-selected={activeTab === 'agi'} on:click={() => switchTab('agi')}>AGI</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link {activeTab === 'nlp' ? 'active' : ''}" id="nlp-tab" data-bs-toggle="tab" href="#nlp" role="tab" aria-controls="nlp" aria-selected={activeTab === 'nlp'} on:click={() => switchTab('nlp')}>NLP</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="profile-tabs-content">
                        <div class="tab-pane fade {activeTab === 'general' ? 'show active' : ''}" id="general" role="tabpanel" aria-labelledby="general-tab">
                            <h3>General Information</h3>
                            <p>Details about the faculty member's general expertise and contributions.</p>
                        </div>
                        <div class="tab-pane fade {activeTab === 'cv' ? 'show active' : ''}" id="cv" role="tabpanel" aria-labelledby="cv-tab">
                            <h3>CV</h3>
                            <p>Details about the faculty member's curriculum vitae and achievements.</p>
                        </div>
                        <div class="tab-pane fade {activeTab === 'agi' ? 'show active' : ''}" id="agi" role="tabpanel" aria-labelledby="agi-tab">
                            <h3>AGI</h3>
                            <p>Details about the faculty member's work and expertise in Artificial General Intelligence.</p>
                        </div>
                        <div class="tab-pane fade {activeTab === 'nlp' ? 'show active' : ''}" id="nlp" role="tabpanel" aria-labelledby="nlp-tab">
                            <h3>NLP</h3>
                            <p>Details about the faculty member's work and expertise in Natural Language Processing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<style>
    .profile-page {
        background-color: #f5f5f5;
        padding: 2% 0;
    }

    .profile-header {
        position: relative;
        background-color: #fff;
        overflow: hidden; /* Ensure no overflow issues */
        padding: 0;
    }

    .background-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        display: block;
        margin-bottom: -5px; /* Adjust if needed */
    }

    .profile-avatar {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%; /* Ensures circular border */
        border: 5px solid #fff; /* White border around the avatar */
        overflow: hidden; /* Ensures the image fits within the circle */
    }

    .profile-avatar img {
        width: 120px; /* Adjust size as needed */
        height: 120px; /* Adjust size as needed */
        object-fit: cover; /* Ensures the image covers the circle */
        border-radius: 50%; /* Ensures circular image */
    }

    .profile-info button {
        margin-bottom: 10px;
    }

    .list-group-item.active {
        background-color: #007bff;
        border-color: #007bff;
    }
</style>
