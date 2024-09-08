<script>
	// Script for dashboard-specific logic
	let articles = [
		{
			title: "Article 1",
			slug: "article-1",
			preview: "This is the first line of Article 1."
		},
		{
			title: "Article 2",
			slug: "article-2",
			preview: "This is a summary or the first line of Article 2."
		},
		{
			title: "Article 3",
			slug: "article-3",
			preview: "Here is a quick preview of Article 3."
		},
		{
			title: "Article 4",
			slug: "article-4",
			preview: "Discover more in Article 4's first line."
		},
		{
			title: "Article 5",
			slug: "article-5",
			preview: "An introduction to Article 5."
		}
	];
</script>

<main>
	<div class="dashboard-container">
		<div class="dashboard">
			<!-- Left Column -->
			<div class="card left-card">
				<div class="recent">
					<h2 class="h2-modern">Recent</h2>
					<ul>
						<li>User Pages</li>
						<li>User Groups</li>
						<li>Suggested Groups</li>
						<li>Events</li>
					</ul>
				</div>
				<div class="discover-articles">
					<h2 class="h2-modern">Discover</h2>
					<ul>
						{#each articles as article}
							<li>
								<a href={`/articles/${article.slug}`}>{article.title}</a>
								<p class="article-preview">{article.preview}</p>
							</li>
						{/each}
					</ul>
				</div>
			</div>
			

			<!-- Center Column -->
			<div class="card center-card">
				<!-- Typewriter Effect for Welcome Back -->
				<h2 class="typewriter">Welcome Dr.XYZ!</h2>

				<!-- Post Creation Section -->
				<div class="post-creation">
					<textarea placeholder="What's on your mind?" rows="3"></textarea>
					<button class="post-button">Post</button>
				</div>

				<!-- Top Picks Section -->
				<div class="top-picks">
					<h3>Top Picks for You Today</h3>
					<!-- Display top picks dynamically -->
				</div>

				<!-- Feed Posts Section -->
				<div class="feed-posts">
					<!-- Example Post 1 -->
					<div class="feed-post">
						<div class="post-header">
							<img src="/path-to-avatar.jpg" alt="User Avatar" class="avatar" />
							<div class="user-info">
								<h4>John Doe</h4>
								<p>@johndoe</p>
							</div>
						</div>
						<p class="post-content">This is an example of a post. It contains text and maybe some other media or links.</p>
						<div class="post-actions">
							<button>Like</button>
							<button>Comment</button>
							<button>Share</button>
						</div>
					</div>

					<!-- Example Post 2 -->
					<div class="feed-post">
						<div class="post-header">
							<img src="/path-to-avatar.jpg" alt="User Avatar" class="avatar" />
							<div class="user-info">
								<h4>Jane Smith</h4>
								<p>@janesmith</p>
							</div>
						</div>
						<p class="post-content">Another example post. It might include images or videos, depending on the content.</p>
						<div class="post-actions">
							<button>Like</button>
							<button>Comment</button>
							<button>Share</button>
						</div>
					</div>
				</div>
			</div>

			<!-- Right Column -->
			<div class="card right-card">
				

				<!-- Discover Profiles Section (Instagram-style) -->
				<div class="discover-profiles">
					<h2 class="h2-modern">Suggested Profiles </h2>
					<div class="profile-suggestions">
						<!-- Profile 1 -->
						<div class="profile">
							<img src="/path-to-avatar1.jpg" alt="Alice Johnson" class="profile-avatar">
							<div class="profile-info">
								<h4>Alice Johnson</h4>
								<p>AI Researcher</p>
							</div>
							<button class="follow-button">Follow</button>
						</div>

						<!-- Profile 2 -->
						<div class="profile">
							<img src="/path-to-avatar2.jpg" alt="Michael Lee" class="profile-avatar">
							<div class="profile-info">
								<h4>Michael Lee</h4>
								<p>Data Scientist</p>
							</div>
							<button class="follow-button">Follow</button>
						</div>

						<!-- Profile 3 -->
						<div class="profile">
							<img src="/path-to-avatar3.jpg" alt="Sarah Parker" class="profile-avatar">
							<div class="profile-info">
								<h4>Sarah Parker</h4>
								<p>Machine Learning Specialist</p>
							</div>
							<button class="follow-button">Follow</button>
						</div>

						<!-- Profile 4 -->
						<div class="profile">
							<img src="/path-to-avatar4.jpg" alt="David Brown" class="profile-avatar">
							<div class="profile-info">
								<h4>David Brown</h4>
								<p>Deep Learning Engineer hello hi</p>
							</div>
							<div>
								<button class="follow-button">Follow</button>
							</div>
						</div>
					</div>
					<button class="discover-more-button">Find More Profiles</button>
				</div>

				<!-- Nitro Subscription Section -->
				<div class="nitro-subscription">
					<h2 class="h2-modern">Get Nitro Subscription</h2>
					<p>Enhance your experience with Nitro:</p>
					<ul>
						<li>Better reach for auto posts/longer content</li>
						<li>Organize more events/pages</li>
						<li>Auto connect and connections recommendation engine feature</li>
						<li>Others</li>
					</ul>
					<button class="subscribe-button">Subscribe Now</button>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Gemini:wght@400;700&display=swap');

	.dashboard-container {
		padding: 0 15%; /* Adds white space to the left and right */
	}

	.dashboard {
		display: grid;
		grid-template-columns: 3fr 7fr 3fr; /* Left and right cards are narrower, center card is wider */
		gap: 0.5rem; /* Adjusts spacing between the cards */
	}

	.card {
		background-color: #fff;
		padding: 2%;
		border-radius: 20px;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.348);
		overflow: hidden;
	}

	.left-card, .right-card {
		padding: 2%;
	}

	.center-card {
		grid-column: 2;
		padding: 2%;
		background-color: #f5f5f5;
	}

	.post-creation {
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid #ddd;
		padding-bottom: 1rem;
		margin-bottom: 1rem;
	}

	.post-creation textarea {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #ddd;
		border-radius: 5px;
		font-size: 1rem;
		resize: none;
	}

	.post-button {
		background-color: #00358b; /* Blue */
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		cursor: pointer;
		margin-top: 0.5rem;
	}

	.post-button:hover {
		background-color: #ffeb3b;
		color: black;
	}

	.top-picks {
		margin-top: 1rem;
	}

	.top-picks h3 {
		margin: 0;
		font-size: 1.5rem;
		color: #333;
	}

	.feed-post {
		background-color: #fff;
		padding: 1rem;
		border-radius: 5px;
		margin-bottom: 1rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.post-header {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
	}

	.avatar {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		margin-right: 0.75rem;
	}

	.user-info {
		display: flex;
		flex-direction: column;
	}

	.user-info h4 {
		margin: 0;
		font-size: 1rem;
	}

	.user-info p {
		margin: 0;
		color: #666;
		font-size: 0.875rem;
	}

	.post-content {
		margin-bottom: 1rem;
	}

	.post-actions {
		display: flex;
		gap: 1rem;
	}

	.post-actions button {
		background: none;
		border: none;
		color: #1e90ff;
		cursor: pointer;
	}

	.post-actions button:hover {
		text-decoration: underline;
	}

	.discover-profiles {
		margin-top: 2rem;
	}

	.profile-suggestions {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.profile {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #fff;
		padding: 1rem;
		border-radius: 5px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.profile-avatar {
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}

	.profile-info {
		margin-left: 1rem;
	}

	.profile-info h4 {
		margin: 0;
		font-size: 1rem;
		color: #333;
	}

	.profile-info p {
		margin: 0;
		color: #666;
		font-size: 0.875rem;
	}

	.follow-button {
		background-color: #00358b; /* Blue */
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	.follow-button:hover {
		background-color: #ffeb3b; /* Yellow */
		color: black;
	}

	.discover-more-button {
		margin-top: 1rem;
		background-color: #1e90ff;
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	.discover-more-button:hover {
		background-color: #ffeb3b;
	}

	.nitro-subscription {
		margin-top: 2rem;
	}

	.typewriter {
	font-family: 'Gemini', sans-serif;
	font-size: 2rem;
	color: #00358b; /* Blue */
	margin-bottom: 2rem;
	overflow: hidden;
	white-space: nowrap;
	border-right: 2px solid #00358b;
	animation: typewriter 4s steps(40, end) 1s forwards;
	}

	@keyframes typewriter {
	from {
		width: 0;
	}
	to {
		width: 100%;
	}
	}

	.typewriter::after {
	content: '';
	animation: blink-caret 0.75s step-end infinite;
	}

	@keyframes blink-caret {
	from, to {
		border-color: transparent;
	}
	50% {
		border-color: #00358b; /* Blue */
	}
	}

	.discover-articles ul {
		list-style-type: none;
		padding: 0;
	}

	.discover-articles li {
		margin-bottom: 1rem;
	}

	.discover-articles a {
		font-weight: bold;
		color: #00358b;
		text-decoration: none;
	}

	.discover-articles a:hover {
		text-decoration: underline;
	}

	.article-preview {
		font-size: 0.875rem;
		color: #666;
		margin-top: 0.25rem;

	}
	.h2-modern {
	font-family: 'Gemini', sans-serif;
	font-weight: 500;
	color: #000000; 
	font-size: 2rem; /* Adjust size as needed */
	margin-bottom: 1rem;
	position: relative;
	padding-bottom: 0.5rem;
	}

	.h2-modern::after {
	content: '';
	position: absolute;
	left: 0;
	bottom: 0;
	width: 50%;
	height: 3px;
	
	border-radius: 5px;
	}
</style>