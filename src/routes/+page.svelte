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
	import '../app.css';
</script>
<head>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  </head>
<main>
	
	<div class="dashboard-container">
		<div class="dashboard">
			<!-- Left Column -->
			<div>
				<div class="card left-card">
					<h2 class="h2-modern-recent">Recent</h2>
					<ul class="recent-list">
						
						<li class="recent-item">
							<div class="icon"><span class="material-icons">person</span></div>
							<span>User Pages</span>
						</li>
						<li class="recent-item">
							<div class="icon"><span class="material-icons">groups</span></div>
							<span>User Groups</span>
						</li>
						<li class="recent-item">
							<div class="icon"><span class="material-icons">group_add</span></div>
							<span>Suggested Groups</span>
						</li>
						<li class="recent-item">
							<div class="icon"><span class="material-icons">event</span></div>
							<span>Events</span>
						</li>
						<li class="recent-item">
							<div class="icon"><span class="material-icons">search</span></div>
							<span>Discover</span>
						</li>
						<li class="recent-item">
							<div class="icon"><span class="material-icons">business_center</span></div>
							<span>Find Co-Author</span>
						</li>
						
					</ul>
				</div>
				<!---<div class="discover-articles">
					<a href="/discover">
						<h2 class="h2-modern-discover">Discover</h2>
					</a>
					<ul>
						{#each articles as article}
							<li>
								<a href={`/articles/${article.slug}`}>{article.title}</a>
								<p class="article-preview">{article.preview}</p>
							</li>
						{/each}
					</ul>
				</div>-->
			</div>
			

			<!-- Center Column -->
			<div class="card center-card">
				<!-- Typewriter Effect for Welcome Back -->
				<h2 class="typewriter">Welcome XYZ!</h2>

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
							<img src="./src/lib/images/navya.png" alt="User Avatar" class="avatar" />
							<div class="user-info">
								<h4>Lisa Green</h4>
								<p>@LisaGreen</p>
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
							<img src="./src/lib/images/shashwat.png" alt="User Avatar" class="avatar" />
							<div class="user-info">
								<h4>John Doe</h4>
								<p>@johndoe</p>
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
					<h2 class="h2-modern-suggested">Suggested Profiles</h2>
					<div class="profile-suggestions">
						<!-- Profile 1 -->
						<div class="profile">
							<img src="./src/lib/images/manya.png" alt="Alice Johnson" class="profile-avatar">
							<div class="profile-info">
								<h4>Alice Johnson</h4>
								<p>AI Researcher</p>
							</div>
							<button class="follow-button">Follow</button>
						</div>
				
						<!-- Profile 2 -->
						<div class="profile">
							<img src="./src/lib/images/sanyam.png" alt="Michael Lee" class="profile-avatar">
							<div class="profile-info">
								<h4>Michael Lee</h4>
								<p>Data Scientist</p>
							</div>
							<button class="follow-button">Follow</button>
						</div>
				
						<!-- Profile 3 -->
						<div class="profile">
							<img src="./src/lib/images/priyanshi.png" alt="Sarah Parker" class="profile-avatar">
							<div class="profile-info">
								<h4>Sarah Parker</h4>
								<p>Machine Learning Specialist</p>
							</div>
							<button class="follow-button">Follow</button>
						</div>
				
						<!-- Profile 4 -->
						<div class="profile">
							<img src="./src/lib/images/anubhav.png" alt="David Brown" class="profile-avatar">
							<div class="profile-info">
								<h4>David Brown</h4>
								<p>Deep Learning Engineer</p>
							</div>
							<button class="follow-button">Follow</button>
						</div>
					</div>
					<button class="discover-more-button">Find More Profiles</button>
				</div>
				
				<!-- Nitro Subscription Section -->
				<div class="nitro-subscription">
					<h2 class="h2-modern">Get Nitro Subscription <span class="rocket-icon">🚀</span></h2>
					<p>Enhance your experience with Nitro:</p>
					<button class="subscribe-button">Subscribe Now</button>
				</div>
				
			</div>
		</div>
	</div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@400;500;700&display=swap');

	.dashboard-container {
		padding: 0 8%; /* Adds white space to the left and right */
		
	}

	.dashboard {
		display: grid;
		grid-template-columns: 3.5fr 7fr 3.5fr; /* Left and right cards are narrower, center card is wider */
		gap: 1rem; /* Adjusts spacing between the cards */
		
	}

	.card {
		background-color: #fff;
		
		border-radius: 20px;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.348);
		overflow: hidden;
		margin-top: 1rem;
	}

	.left-card, .right-card {
    padding: 10px 10px; /* Adding 2% padding on both left and right */
    padding-left: 20px; /* Adding extra padding specifically on the left */
	padding-right: 20px; 
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.348);
    margin-top: 1rem;
}
	
	/*.left-card{
	background: #f4f4f4; Light grey background for both sections 
    color: #333;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-bottom: 1.5rem; Space below each section 
    font-family: 'Poppins', sans-serif;
	} */

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
		border: 1.5px solid #494949;
		border-radius: 8px;
		font-size: 1rem;
		resize: none;
		
	}

	.post-button {
		background-color: #000000; /* Blue */
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		cursor: pointer;
		margin-top: 0.5rem;
		font-family: 'Poppins', sans-serif;
	}

	.post-button:hover {
		background-color: #FF8C00;
		color: black;
	}

	.top-picks {
		margin-top: 1rem;
		margin-bottom: 1.5rem;
	}

	.top-picks h3 {
		margin: 0;
		font-size: 1.5rem;
		color: #333;
		font-family: 'Poppins', sans-serif;
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
		border-radius: 50%;
		width: 50px;
		height: 50px;
		margin-right: 1rem;
	}

	.user-info h4 {
		margin: 0;
		font-size: 1.2rem;
	}

	.user-info p {
		margin: 0;
		font-size: 0.9rem;
		color: #555;
	}

	.post-content {
		font-size: 1rem;
		color: #333;
	}

	.post-actions {
		display: flex;
		gap: 1rem;
		margin-top: 0.5rem;
	}

	.post-actions button {
    background-color: #fff;
    border: 2px solid transparent; /* Initial transparent border */
    color: #000000;
    font-size: 0.9rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: border 0.3s ease, color 0.3s ease;
}

.post-actions button:hover {
    border: 2px solid #000000; /* Border on hover */
    color: #000000;
}


	/* Left Column - Recent and Discover */
	/* General styling for Recent section */
	.recent  {
    background: #f4f4f4; /* Light grey background for both sections */
    color: #333;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-bottom: 1.5rem; /* Space below each section */
    font-family: 'Poppins', sans-serif; /* Ensure font consistency */
	
}

	.h2-modern-suggested{
		font-size: 1.75rem;
		margin-bottom: 1.5rem;
		position: relative;
		margin-top: 1.5rem;
		align-items: center;
		color: #000000; 
		font-family: 'Poppins', sans-serif;
		font-weight: 100 px;
	}

	/* Heading styling */
	.h2-modern-recent {
		font-size: 1.75rem;
		margin-bottom: 1.5rem;
		position: relative;
		margin-top: 1.5rem;
		align-items: center;
		color: #000000; /* Blue color for the heading */
		font-family: 'Poppins', sans-serif;
		font-weight: 100 px;
	}

	/* List styling */
	.recent-list {
		list-style: none;
		padding: 0;
		margin: 0;
		
	}

	.recent-item {
		display: flex;
		align-items: center;
		background: #f9f9f9;
		border-radius: 5px;
		padding: 0.5rem;
		margin-bottom: 1rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		transition: background-color 0.3s ease, transform 0.3s ease;
		cursor: pointer;
		font-size: 1rem;
		font-family: 'Poppins', sans-serif;
	}

	.recent-item:hover {
		background-color: #e0e0e0;
		transform: scale(1.02);
	}

	.recent-item .icon {
		font-size: 1.5rem;
		margin-right: 1rem;
		color: #000000; /* Blue color for icons */
	}

	



	.article-preview {
		font-family: 'Poppins', sans-serif;
		color: #777;
	}

	/* Center Column */
	.typewriter {
	font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;
    color: #000000; /* Classic, neutral color */
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
    transform: translateY(20px); /* Start with the text slightly below its position */
    animation: fadeInSlideUp 1.5s ease-out forwards; /* Smooth slide-up and fade-in */
	margin-bottom: 2rem;
	font-weight: 90px;
}

/* Fade-in and slide-up animation */
@keyframes fadeInSlideUp {
    0% {
        opacity: 0;
        transform: translateY(20px); /* Text starts 20px below */
    }
    100% {
        opacity: 1;
        transform: translateY(0); /* Text slides up to its normal position */
    }
}




	/* Right Column - Suggested Profiles */
	.profile-suggestions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.profile {
    display: flex;
    align-items: center;
    justify-content: space-between; /* Ensure button is aligned to the right */
    background-color: #f4f4f4; /* Light grey background */
    padding: 0.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	font-family: 'Poppins', sans-serif;
}

.profile-avatar {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-right: 1rem;
}

.profile-info {
    flex: 1; /* Allows the profile info to take up remaining space */
	font-family: 'Poppins', sans-serif;
}

.profile-info h4 {
    margin: 0;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif; /* Playfair Display for names */
}

.profile-info p {
    margin: 0;
    font-size: 0.9rem;
    color: #777;
    font-family: 'Poppins', sans-serif; /* Poppins for job titles */
}

.follow-button {
    background-color: #000000; /* Blue */
    color: white;
    border: none;
    padding: 0.3rem 0.8rem;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif; /* Poppins for button text */
}

.follow-button:hover {
    background-color: #FF8C00;
    color: black;
}

.discover-more-button {
    background-color: #000000; /* Blue */
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif; /* Poppins for text */
    font-size: 1.1rem;
    text-align: center;
    display: block;
    margin: 1rem auto; /* Centers the button */
    transition: background-color 0.3s ease, transform 0.3s ease; /* Smooth transitions */
	font-family: 'Poppins', sans-serif;
}

.discover-more-button:hover {
    background-color: #FF8C00; /* Yellow on hover */
    color: black;
    transform: scale(1.05); /* Slightly enlarges the button */
}

.discover-more-button:active {
    transform: scale(0.95); /* Shrinks when clicked */
}
	/* Nitro Subscription Section */
	.nitro-subscription {
		background: #000000; /* Blue background similar to Discord */
		color: #fff;
		padding: 2rem;
		border-radius: 10px;
		text-align: center;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		max-width: 280px;
		margin: 2rem auto;
		font-family: 'Poppins', sans-serif;
		position: relative;
		overflow: hidden;
	}

	/* Heading styling */
	.h2-modern {
		font-size: 1.75rem;
		margin-bottom: 1rem;
		position: relative;
		display: inline-flex;
		align-items: left;
		font-family: 'Poppins', sans-serif;
	}

	/* Rocket icon styling */
	.rocket-icon {
		font-size: 40px;
		margin-left: 0px;
		animation: rocket-animation 1s infinite;
	}

	/* Rocket animation */
	.discover-articles {
    background-color: #f0f8ff; /* Light blue background */
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow */
    margin: 2rem 0;
}

.h2-modern-discover {
    font-family: 'Playfair Display', serif; /* Playfair for a modern serif look */
    font-size: 2rem;
    color: #1A4870; /* Dark blue for the text */
    text-align: center;
    margin-bottom: 1.5rem;
    position: relative;
}

.h2-modern-discover::after {
    content: '';
    display: block;
    width: 50px;
    height: 4px;
    background-color: #FF8C00; 
    margin: 0.5rem auto 0; /* Centered underline below the heading */
    border-radius: 2px;
}


	/* Paragraph styling */
	.nitro-subscription p {
		margin-bottom: 1.5rem;
		font-size: 1.2rem;
		font-family: 'Poppins', sans-serif;
		
	}

	/* Button styling */
	.subscribe-button {
		background-color: #FF8C00; /* Bright orange color for button */
		color: #fff;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 5px;
		font-size: 1.125rem;
		cursor: pointer;
		font-family: 'Poppins', sans-serif;
		transition: background-color 0.3s ease, transform 0.3s ease;
		font-family: 'Poppins', sans-serif;
	}

	.subscribe-button:hover {
		background-color: #e07b00;
		transform: scale(1.05);
	}

	.subscribe-button:active {
		transform: scale(0.95);
	}

	.material-icons {
    font-family: 'Material Icons';
    font-size: 24px; /* Adjust size as needed */
    color: #000000; /* Match your theme color */
	}
</style>
