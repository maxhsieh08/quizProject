<script>
    import LogoutButton from '$lib/components/logoutButton.svelte';
    import Header from '$lib/components/header.svelte';
    export let data;

</script>

<style>
      :global(body) {
      margin: 0;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      min-height: 100vh;
      background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%);
    }

    nav a {
      color: #4a5568;
      text-decoration: none;
      margin: 0 15px;
      font-weight: 500;
      transition: color 0.2s ease;
    }
  
    nav a:hover {
      color: #2b6cb0;
    }
  
    /* MAIN CONTENT */
    .main-content {
      text-align: center;
      margin-top: 11vh;
      padding: 20px;
    }
  
    input {
      display: block;
      width: 100%;
      padding: 0.75rem 1rem;
      margin: 0.75rem 0;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      font-size: 1rem;
      transition: all 0.2s ease;
      box-sizing: border-box;
    }
  
    input:focus {
      outline: none;
      border-color: #4299e1;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.15);
    }
  
    button {
      background: #4299e1;
      color: white;
      border: none;
      padding: 0.75rem;
      width: 100%;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      margin: 1rem 0;
      transition: all 0.2s ease;
    }
  
    button:hover {
      background: #3182ce;
      transform: translateY(-1px);
    }
  
    button:active {
      transform: translateY(0);
    }
  
    a {
      color: #4299e1;
      text-decoration: none;
      font-size: 0.875rem;
      transition: color 0.2s ease;
    }
  
    a:hover {
      color: #2b6cb0;
    }
  
    /* div:last-child {
      margin-top: 0.75rem;
      color: #e53e3e;
      font-size: 0.875rem;
    } */

    .user-section {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    .welcome-text {
        color: #4a5568;
        font-size: 1rem;
        font-weight: 500;
        margin: 0;
    }

    .dashboard-grid {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
    }

    .dashboard-card {
        background: white;
        border-radius: 16px;
        padding: 2rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        transition: all 0.2s ease;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .dashboard-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }

    .card-content {
        text-align: left;
    }

    .card-title {
        font-size: 1.25rem;
        font-weight: 600;
        color: #2d3748;
        margin: 0 0 0.5rem 0;
    }

    .card-description {
        color: #718096;
        font-size: 0.875rem;
        margin: 0;
    }

    .card-stats {
        display: flex;
        gap: 1rem;
        margin-top: 0.5rem;
    }

    .stat {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        color: #718096;
        font-size: 0.875rem;
    }

    .card-icon {
        background: #ebf8ff;
        padding: 1rem;
        border-radius: 12px;
        color: #4299e1;
        font-size: 1.5rem;
    }

    .create-quiz-button {
        background: #4299e1;
        color: white;
        border: none;
        padding: 1rem 2rem;
        border-radius: 12px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }

    .create-quiz-button:hover {
        background: #3182ce;
        transform: translateY(-1px);
    }

    .create-quiz-button:active {
        transform: translateY(0);
    }

    .create-icon {
        font-size: 1.25rem;
    }
</style>

  <Header>
    {#snippet name()}
    <h1 style="position: absolute; left: 50%; transform: translateX(-50%);">Dashboard</h1>
    {/snippet}

    {#snippet header()}
    <div class="user-section">
        <p class="welcome-text">{data.user.email}</p>
         <LogoutButton> </LogoutButton>
    </div>
    {/snippet}
  </Header>

  <div class="main-content">
    <div class="dashboard-grid">
        <a href="/create">
            <button class="create-quiz-button">
                <span class="create-icon">➕</span>
                Create Your Own Quiz
            </button>
        </a>
        <div class="dashboard-card">
            <div class="card-content">
                <h3 class="card-title">JavaScript Fundamentals Quiz</h3>
                <p class="card-description">Test your knowledge of JavaScript basics including variables, functions, and objects.</p>
                <div class="card-stats">
                    <span class="stat">20 Questions</span>
                    <span class="stat">•</span>
                    <span class="stat">15 min</span>
                </div>
            </div>
            <div class="card-icon">📝</div>
        </div>

        <div class="dashboard-card">
            <div class="card-content">
                <h3 class="card-title">Python Programming Challenge</h3>
                <p class="card-description">Challenge yourself with Python programming concepts and problem-solving tasks.</p>
                <div class="card-stats">
                    <span class="stat">15 Questions</span>
                    <span class="stat">•</span>
                    <span class="stat">20 min</span>
                </div>
            </div>
            <div class="card-icon">🐍</div>
        </div>

        <div class="dashboard-card">
            <div class="card-content">
                <h3 class="card-title">Web Development Basics</h3>
                <p class="card-description">Learn about HTML, CSS, and basic web development principles.</p>
                <div class="card-stats">
                    <span class="stat">25 Questions</span>
                    <span class="stat">•</span>
                    <span class="stat">30 min</span>
                </div>
            </div>
            <div class="card-icon">🌐</div>
        </div>
    </div>
  </div>

  
  

