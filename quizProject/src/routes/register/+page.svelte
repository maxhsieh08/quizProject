<script>
  import Header from "$lib/components/header.svelte";
    let email = $state("");
    let password = $state("");
    let message = $state("");
      // ✅ Function to send the registration request
  async function register() {
    message = ""; // Clear previous messages

    // ✅ Send a request to the registration API
    const res = await fetch("../api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    message = data.message || data.error; // Display success or error message
  }
  
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
      margin-top: 15vh;
      padding: 20px;
    }
  
    .site-title {
      font-size: 2.5rem;
      font-weight: 800;
      color: #2d3748;
      margin-bottom: 1.5rem;
      letter-spacing: -0.025em;
    }
  
    .signin-box {
      background: white;
      padding: 2.5rem;
      border-radius: 16px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      max-width: 400px;
      margin: 0 auto;
      transition: transform 0.2s ease;
    }
  
    .signin-box:hover {
      transform: translateY(-2px);
    }
  
    .signin-box h3 {
      font-size: 1.5rem;
      color: #2d3748;
      margin-bottom: 1.5rem;
      font-weight: 600;
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
  
    p {
      margin-top: 0.75rem;
      color: #e53e3e;
      font-size: 0.875rem;
    }
  </style>

  <Header>
    {#snippet name()}
    {/snippet}
    {#snippet header()}
    {/snippet}
  </Header>
  <!-- MAIN CONTENT -->
  <div class="main-content">
    <h1 class="site-title">Create Your Account</h1>
    
    <div class="signin-box">
      <h3>Sign Up</h3>
      <form onsubmit={register}>
        <input 
        type="text" 
        bind:value={email} 
        placeholder="Enter your username"
        autocomplete="email"
        required>
      <input 
        type="password" 
        bind:value={password} 
        placeholder="Choose a password"
        autocomplete="new-password"
        required>
      <button>Create Account</button>
      <a href="/">Already have an account? Sign in</a>
      <p>{message}</p>
      </form>
    </div>
  </div>