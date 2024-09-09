<script>
    import { onMount } from 'svelte';
    import { Bar } from 'svelte-chartjs';
    import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
  
    Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
  
    let hIndex = 23;
    let iIndex = 60;
    let citations = 4850;
    let papers = 573;
  
    const citationsData = {
      labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
      datasets: [{
        label: 'Citations per Year',
        data: [600, 700, 550, 950, 1000, 1100],
        backgroundColor: 'black'
      }]
    };
  
    const recentPublications = [
      { title: 'Comparative Review of Selection Techniques in Genetic Algorithm', category: 'Genetic Algorithms' },
      { title: 'Performance comparison of time series data using predictive data mining techniques', category: 'Predictive Modeling and Forecasting' },
      { title: 'Advancements in Autonomous Robotic Systems', category: 'AI and Robotics' },
      { title: 'Advances in Intrusion Detection Systems: Evaluating New Techniques for Enhancing Network Security', category: 'Cybersecurity' }
    ];
</script>
  
<div class="dashboard">
    <h1>Dashboard</h1>

    <div class="metrics-grid">
        <div class="metric-card">
            <h2>H-Index</h2>
            <p class="metric-value">{hIndex}</p>
            <p class="metric-change">+2 from last month</p>
        </div>
        <div class="metric-card">
            <h2>I-Index</h2>
            <p class="metric-value">{iIndex}</p>
            <p class="metric-change">+3 from last month</p>
        </div>
        <div class="metric-card">
            <h2>No. of Citations</h2>
            <p class="metric-value">{citations}</p>
            <p class="metric-change">+3.2% from last month</p>
        </div>
        <div class="metric-card">
            <h2>No. of Papers</h2>
            <p class="metric-value">{papers}</p>
            <p class="metric-change">+201 from last month</p>
        </div>
    </div>

    <div class="buttons">
        <button>Citations</button>
        <button>Papers</button>
    </div>

    <div class="content-flex">
        <div class="chart-container">
            <h2>Citations Per Year</h2>
            <Bar data={citationsData} options={{ responsive: true }} />
        </div>

        <div class="recent-publications">
            <h2>Recent Publications</h2>
            <p>You made 4 summaries this month.</p>
            {#each recentPublications as publication}
                <div class="publication">
                    <h3>{publication.title}</h3>
                    <p>{publication.category}</p>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .dashboard {
        font-family: Arial, sans-serif;
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }

    .metrics-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        margin-bottom: 20px;
    }

    .metric-card {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 15px;
        background-color: #fff;
    }

    .metric-value {
        font-size: 24px;
        font-weight: bold;
        margin: 10px 0;
    }

    .metric-change {
        color: #666;
        font-size: 14px;
    }

    .buttons {
        margin-bottom: 20px;
    }

    button {
        background-color: #f4a261;
        border: none;
        color: white;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin-right: 10px;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #e76f51;
    }

    .content-flex {
        display: flex;
        gap: 20px;
    }

    .chart-container {
        flex: 2;
        margin-bottom: 20px;
    }

    .recent-publications {
        flex: 1;
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 8px;
    }

    .publication {
        margin-bottom: 15px;
    }

    .publication h3 {
        margin-bottom: 5px;
    }

    .publication p {
        color: #666;
    }
</style>
