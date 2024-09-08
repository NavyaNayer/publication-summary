<script>
	let showMenu = false;
	let showFilters = false;

	function toggleMenu() {
		showMenu = !showMenu;
	}

	function toggleFilters() {
		showFilters = !showFilters;
	}
	
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
						<button on:click={() => showFilters = false}>Apply Filters</button>
						<button on:click={() => showFilters = false} class="clear-filters">Clear Filters</button>
					</div>
				</div>
			{/if}
		</div>

		<!-- Right Side Buttons -->
		<div class="nav-buttons">
			<button class="generate-button">
				<span class="material-icons">add_circle</span> Generate
			</button>
			<button class="upload-button">
				<span class="material-icons">upload</span> Upload
			</button>
			
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
		background: #00358b;
		color: #fff;
		padding: 0.5rem 1rem; /* Reduced padding for better fit */
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
		background: none; /* No background */
		color: #fff; /* White text color */
		border: none;
		font-size: 1.25rem; /* Adjusted size for better fit */
		cursor: pointer;
		position: fixed;
		top: 1rem;
		left: 1rem;
		z-index: 1100; /* Ensure toggle button is above the menu */
		padding: 0.5rem;
		border-radius: 5px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Optional: add a slight shadow for better visibility */
	}

	.site-name {
		margin-left: 3rem; /* Adjusted margin */
	}

	.site-link {
		text-decoration: none; /* Remove underline from link */
		color: #fff; /* Ensure text color matches header */
		transition: transform 0.3s ease; /* Smooth transition for the size change */
	}

	.site-link h1 {
		font-size: 2rem; /* Initial font size */
		margin: 0; /* Remove default margin from h1 */
	}

	.site-link:hover h1 {
		transform: scale(1.05); /* Slightly increase the size on hover */
	}



	.search-wrapper {
		display: flex;
		align-items: center;
		background-color: #fff;
		border-radius: 5px;
		padding: 0.2rem;
		width: 300px;
		position: relative;
	}

	.search-field {
		border: 1px solid #ddd;
		padding: 0.2rem 0.5rem;
		border-radius: 5px;
		flex: 1;
		font-size: 0.8rem;
	}

	.filter-icon {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 1.2rem;
		color: #333;
		margin-left: 0.5rem;
	}

	.filter-popup {
		position: absolute;
		background-color: #fff;
		color: #000;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		padding: 1rem;
		border-radius: 5px;
		top: 100%;
		right: 0;
		width: 300px;
		z-index: 1200; /* Ensure popup is above other elements */
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.filter-section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.filter-option {
		display: flex;
		flex-direction: column;
	}

	.filter-option label {
		margin-bottom: 0.5rem;
	}

	.filter-option select {
		width: 100%;
	}

	.filter-buttons {
		display: flex;
		justify-content: space-between;
	}

	.filter-buttons button {
		background-color: #1e90ff;
		color: white;
		border: none;
		padding: 0.5rem;
		border-radius: 5px;
		cursor: pointer;
	}

	.filter-buttons button:hover {
		background-color: #1c86ee;
	}

	.clear-filters {
		background-color: #ff5722;
	}

	.clear-filters:hover {
		background-color: #e64a19;
	}

	.nav-buttons {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.generate-button, .upload-button {
		background-color: #fdd835;
		color: black;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 0.5rem; /* Space between icon and text */
	}

	.generate-button .material-icons, .upload-button .material-icons {
		font-size: 1.2rem; /* Adjust icon size as needed */
	}

	.profile-menu {
		position: relative;
	}

	.profile-button {
		background: none;
		border: none;
		color: #fff;
		cursor: pointer;
	}

	.profile-pic {
		border-radius: 50%; /* Circular shape */
		width: 40px; /* Adjust size as needed */
		height: 40px; /* Adjust size as needed */
		object-fit: cover; /* Ensure the image covers the area */
	}

	.profile-dropdown {
	position: absolute;
	top: 100%;
	right: 0;
	background-color: #ffffff;
	color: #333;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	border-radius: 0.25rem; /* Rounded corners */
	padding: 0.5rem 0; /* Padding for better spacing */
	width: 200px; /* Fixed width for consistency */
	z-index: 1050; /* Bootstrap dropdowns have z-index of 1050 */
	opacity: 0; /* Start as hidden */
	visibility: hidden; /* Hide from layout */
	transition: opacity 0.3s ease, visibility 0.3s ease; /* Smooth fade-in effect */
	}

	.profile-menu:hover .profile-dropdown {
		opacity: 1;
		visibility: visible;
	}

	.profile-dropdown a {
		color: #333;
		text-decoration: none;
		padding: 0.5rem 1rem;
		display: block; /* Full width clickable area */
	}

	.profile-dropdown a:hover {
		background-color: #f8f9fa; /* Light grey background on hover */
		color: #007bff; /* Primary color text on hover */
	}

	.dropdown-divider {
		border-top: 1.5px solid #6f6f6f; /* Divider color */
		margin: 0.5rem 0; /* Margin around divider */
	}


	.profile-menu:hover .profile-dropdown {
		display: block;
	}

	.notifications-button {
		background: none;
		border: none;
		color: #fff;
		font-size: 1.5rem;
		cursor: pointer;
		margin-left: -1.75rem;
	}

	/* Static Side Menu */
	aside.side-menu {
		position: fixed;
		top: 50;
		left: 0;
		height: 100%;
		width: 250px;
		background-color: #ffffe0; /* Light Yellow */
		padding: 1rem;
		transform: translateX(-100%);
		transition: transform 0.3s ease;
		z-index: 1001; /* Ensure menu is behind the toggle button */
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
		background-color: #ffeb3b; /* Yellow */
		color: black;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		margin-bottom: 0.5rem;
		cursor: pointer;
		width: 100%;
	}

	.side-menu button:hover {
		background-color: #fdd835; /* Darker Yellow */
	}

	main {
		/* Adjust margin when menu is open */
		margin-left: 50px; /* Default small margin */
		padding: 1rem;
		background-color: #fff; /* White */
		color: #333; /* Black */
		transition: margin-left 0.3s ease;
	}

	main.with-menu {
		margin-left: 250px; /* Sidebar width */
	}
</style>
