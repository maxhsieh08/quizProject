<script>
  
    let email = $state("");
    let password = $state("");
    let message = $state("");

    async function signIn() {
        message = "";

        //send request to sign in api
        const res = await fetch("api/auth/signIn", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
            });

        const data = await res.json();

        message = data.message || data.error;

        if (res.ok) {
          window.location.href = "/dashboard";
        }
        }

  </script>
  
  <style>
    :global(body) {
      margin: 0;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      min-height: 100vh;
      background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%);
    }
  
    /* HEADER STYLES */
    header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 20px;
      background: rgba(255, 255, 255, 0.95);
      color: #2d3748;
      position: fixed;
      top: 0;
      left: 0;
      margin: 0;
      box-sizing: border-box;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      backdrop-filter: blur(10px);
    }
  
    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
    }
  
    .logo img {
      height: 32px;
      transition: transform 0.2s ease;
    }
  
    .logo img:hover {
      transform: scale(1.05);
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
  
    div:last-child {
      margin-top: 0.75rem;
      color: #e53e3e;
      font-size: 0.875rem;
    }
  </style>
  
  <!-- HEADER -->
  <header>
    <div class="logo">
      <img src="favicon.png" alt="QuizMe Logo">
      <h1>QuizMe</h1>
    </div>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  </header>
  
  <!-- MAIN CONTENT -->
  <div class="main-content">
    <h1 class="site-title">Welcome to QuizMe</h1>
    
    <div class="signin-box">
      <h3>Sign In</h3>
      <form onsubmit={signIn}>
        <input 
        type="text" 
        bind:value={email} 
        placeholder="Enter your username"
        autocomplete="email">
      <input 
        type="password" 
        bind:value={password} 
        placeholder="Enter your password"
        autocomplete="current-password">
      <button>Sign In</button>
      <a href="/register">Create an account</a>
      <div>{message}</div>
      </form>
    </div>
  </div>
  