<script>
    import Header from "$lib/components/header.svelte";
    import LogoutButton from "$lib/components/logoutButton.svelte";
    export let data;
</script>

<style>
    :global(body) {
      margin: 0;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      min-height: 100vh;
      background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%);
    }
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

    .main-content {
        text-align: center;
        margin-top: 15vh;
        padding: 20px;
    }

    .selection-grid {
        display: flex;
        justify-content: center;
        gap: 2rem;
        max-width: 1200px;
        margin: 2rem auto;
        padding: 1rem;
    }

    .selection-card {
        background: white;
        border-radius: 16px;
        padding: 3rem;
        width: 300px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        transition: all 0.2s ease;
        cursor: pointer;
        border: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }

    .selection-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }

    .selection-card:active {
        transform: translateY(-2px);
    }

    .card-icon {
        font-size: 4rem;
        background: #ebf8ff;
        padding: 1.5rem;
        border-radius: 16px;
        color: #4299e1;
    }

    .card-title {
        font-size: 1.5rem;
        font-weight: 600;
        color: #2d3748;
        margin: 0;
    }

    .card-description {
        color: #718096;
        font-size: 1rem;
        margin: 0;
        line-height: 1.5;
    }

    .page-title {
        font-size: 2.5rem;
        font-weight: 800;
        color: #2d3748;
        margin-bottom: 1rem;
        letter-spacing: -0.025em;
    }

    .page-subtitle {
        color: #718096;
        font-size: 1.125rem;
        margin-bottom: 2rem;
    }
    a {
      text-decoration: none;
    }
</style>

<Header>
    {#snippet name()}
    <h1 style="position: absolute; left: 50%; transform: translateX(-50%);">Create</h1>
    {/snippet}
    {#snippet header()}
    <div class="user-section">
        <p class="welcome-text">{data.user.email}</p>
         <LogoutButton> </LogoutButton>
    </div>
    {/snippet}
</Header>

<div class="main-content">
    <h1 class="page-title">What would you like to create?</h1>
    <p class="page-subtitle">Choose between flash cards or a quiz to help others learn</p>
    
    <div class="selection-grid">
        <a href="/createFlashCards">
        <button class="selection-card">
            <span class="card-icon">🗂️</span>
            <h2 class="card-title">Flash Cards</h2>
            <p class="card-description">Create a set of flash cards for memorization and quick review</p>
        </button>
        </a>
    <a href="/createQuiz">
        <button class="selection-card">
            <span class="card-icon">📝</span>
            <h2 class="card-title">Quiz</h2>
            <p class="card-description">Build a quiz with multiple choice questions and detailed answers</p>
        </button>
    </a>

    </div>
</div>