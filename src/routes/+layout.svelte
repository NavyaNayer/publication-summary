<script>
	let showMenu = false;
	let showFilters = false;

	function toggleMenu() {
		showMenu = !showMenu;
	}

	function toggleFilters() {
		showFilters = !showFilters;
	}
	import '../app.css';
</script>

<!-- Menu Toggle Button -->
<button class="menu-toggle" on:click={toggleMenu}>
	<span class="material-icons">menu</span>
</button>

<header>
	<nav class="top-nav">
		<!-- Site Name -->
		<div class="site-name">
			<a href="/" class="site-link">
				<h1>Academia Assistant</h1>
			</a>
		</div>

		<!-- Centered Search Field with Filter Icon -->
		<div class="search-wrapper">
			<input type="text" placeholder="Search..." class="search-field" />
			<button class="filter-icon" on:click={toggleFilters}>
				<span class="material-icons">filter_list</span>
			</button>
			<!-- Generate and Upload Buttons -->
			<button class="generate-button">
				<span class="material-icons">add_circle</span>
				<span class="button-text">Generate</span>
			</button>
			<button class="upload-button">
				<span class="material-icons">upload</span>
				<span class="button-text">Upload</span>
			</button>
			{#if showFilters}
				<div class="filter-popup">
					<div class="filter-section">
						<h3>Filter Options</h3>
						<div class="filter-option">
							<label>Date Range:</label>
							<select>
								<option>Today</option>
								<option>Last Week</option>
								<option>Last Month</option>
							</select>
						</div>
						<div class="filter-option">
							<label>Categories:</label>
							<select multiple>
								<option>Events</option>
								<option>Pages</option>
								<option>Students</option>
							</select>
						</div>
						<div class="filter-option">
							<label>Status:</label>
							<select>
								<option>Active</option>
								<option>Completed</option>
								<option>Pending</option>
							</select>
						</div>
						<div class="filter-option">
							<label>Sort By:</label>
							<select>
								<option>Alphabetical</option>
								<option>Most Recent</option>
								<option>Popular</option>
							</select>
						</div>
					</div>
					<div class="filter-buttons">
						<button class="apply-button" on:click={() => showFilters = false}>Apply Filters</button>
						<button class="reset-button" on:click={() => showFilters = false}>Clear Filters</button>
					</div>
				</div>
			{/if}
		</div>

		<!-- Right Side Buttons -->
		<div class="nav-buttons">
			<div class="profile-menu">
				<!-- Profile Button with Profile Picture -->
				<button class="profile-button">
					<img src="./src/lib/images/avatar.png" alt="Profile" class="profile-pic" />
				</button>
				<div class="profile-dropdown">
					<a href="/profile">View Profile</a>
					<a href="/settings">Settings</a>
					<div class="dropdown-divider"></div>
        			<a href="/logout" class="dropdown-item">Logout</a>
				</div>
			</div>
			<button class="notifications-button">
				<span class="material-icons">notifications</span>
			</button>
		</div>
	</nav>
</header>

<aside class:show={showMenu} class="side-menu">
	<div class="user-avatar">
		<img src="./src/lib/images/avatar.png" alt="User Avatar" />
	</div>
	<button>Find Co-Author</button>
	<button>Manage Pages</button>
	<button>Manage Groups</button>
	<button>Manage Events</button>
	<button>Manage Interests</button>
	<button>Export Options</button>
</aside>

<main class:with-menu={showMenu}>
	<slot></slot>
</main>

<style>
	/* Color Theme: White, Blue, Yellow, Black */
	header {
		background: #1A4870;
		color: #fff;
		padding: 0.5rem 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: sticky;
		top: 0;
		width: 100%;
		z-index: 1000;
	}

	.top-nav {
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: space-between;
	}

	.menu-toggle {
		background: none;
		color: #fff;
		border: none;
		font-size: 1.25rem;
		cursor: pointer;
		position: fixed;
		top: 1rem;
		left: 1rem;
		z-index: 1100;
		padding: 0.5rem;
		border-radius: 5px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}

	.site-name {
		text-align: left;
		flex: 1;
		display: flex;
		align-items: center;
		padding-left: 3rem;
	}

	.site-link {
		text-decoration: none;
		color: #fff;
	}

	.site-link h1 {
		font-size: 2rem;
		margin: 0;
		transition: transform 0.3s ease;
	}

	.site-link:hover h1 {
		transform: scale(1.05);
	}

	.search-wrapper {
		display: flex;
		align-items: center;
		background-color: transparent;
		border-radius: 5px;
		padding: 0.2rem;
		flex: 1;
		max-width: 400px;
		margin: 0 1rem;
		position: relative;
	}

	.search-field {
		border: 1px solid #ddd;
		padding: 0.2rem 0.5rem;
		border-radius: 5px;
		flex: 1;
		font-size: 1rem;
	}

	.filter-icon {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 1.5rem;
		color: #ffffff;
		padding: 0.5rem;
		margin-left: 0.5rem;
	}

	.generate-button, .upload-button {
		background-color: transparent;
		color: #fff;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
		display: flex;
		align-items: center;

		justify-content: center;
	}

	.generate-button {
		color: #ffffff;
	}

	.upload-button {
		color: #ffffff;
	}

	.generate-button .material-icons, .upload-button .material-icons {
		font-size: 1.5rem;
	}

	.button-text {
		display: none;
		margin-left: 0.5rem;
	}

	.generate-button:hover .button-text, .upload-button:hover .button-text {
		display: inline;
	}

	.generate-button:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}

	.upload-button:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}

	.profile-menu {
		position: relative;
		display: flex;
		align-items: center;
		margin-left: 1rem;
	}

	.profile-button {
		background: none;
		border: none;
		color: #fff;
		cursor: pointer;
	}

	.profile-pic {
		border-radius: 50%;
		width: 40px;
		height: 40px;
		object-fit: cover;
	}

	.profile-dropdown {
		position: absolute;
		top: 100%;
		right: 0;
		background-color: #ffffff;
		color: #333;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		border-radius: 0.25rem;
		padding: 0.5rem 0;
		width: 100px;
		z-index: 1050;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.3s ease, visibility 0.3s ease;
	}

	.profile-menu:hover .profile-dropdown {
		opacity: 1;
		visibility: visible;
	}

	.profile-dropdown a {
		color: #333;
		text-decoration: none;
		padding: 0.5rem 1rem;
		display: block;
	}

	.profile-dropdown a:hover {
		background-color: #f8f9fa;
		color: #007bff;
	}

	.dropdown-divider {
		border-top: 1.5px solid #6f6f6f;
		margin: 0.5rem 0;
	}
	.nav-buttons {
		display: flex;
		align-items: center;
		gap: 0.5 rem; /* Space between items */
	}

	.notifications-button {
		background: none;
		border: none;
		color: #fff;
		font-size: 1.5rem;
		cursor: pointer;
		margin-left: 1rem;
	}

	aside.side-menu {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 250px;
		background-color: #D7D6D6;
		padding: 1rem;
		transform: translateX(-100%);
		transition: transform 0.3s ease;
		z-index: 1001;
	}

	aside.side-menu.show {
		transform: translateX(0);
	}

	.user-avatar {
		text-align: center;
		margin-bottom: 1rem;
	}

	.user-avatar img {
		border-radius: 50%;
		width: 100px;
		height: 100px;
	}

	.side-menu button {
		background-color: #8D8D92;
		color: black;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		margin-bottom: 0.5rem;
		cursor: pointer;
		width: 100%;
	}

	.side-menu button:hover {
		background-color: #fdd835;
	}

	.filter-popup {
		position: absolute;
		top: 100%;
		right: 0;
		background-color: #fff;
		color: #333;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		border-radius: 0.25rem;
		padding: 1rem;
		width: 250px;
		z-index: 1050;
	}

	.filter-section {
		margin-bottom: 1rem;
	}

	.filter-option {
		margin-bottom: 0.5rem;
	}

	.filter-buttons {
		display: flex;
		justify-content: space-between;
	}

	.apply-button, .reset-button {
		background-color: #007bff;
		color: #fff;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		cursor: pointer;
		font-size: 0.875rem;
	}

	.reset-button {
		background-color: #6c757d;
	}

	.apply-button:hover {
		background-color: #0056b3;
	}

	.reset-button:hover {
		background-color: #5a6268;
	}

	main {
		margin-left: 50px;
		padding: 1rem;
		background-color: #fff;
		color: #333;
		transition: margin-left 0.3s ease;
	}

	main.with-menu {
		margin-left: 250px;
	}
</style>
