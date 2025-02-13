<script>
  
    let email = $state("");
    let password = $state("");
  
    function signIn() {
      alert(`Signing in with ${email}`);
    }
  </script>
  
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100vh;
    }
  
    /* HEADER STYLES */
    header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 20px;
      background: #333;
      color: white;
      position: fixed;
      top: 0;
      left: 0;
      margin: 0;
      box-sizing: border-box;
    
    }
  
    .logo {
      display: flex;
      align-items: center;
    }
  
    .logo img {
      height: 40px;
      margin-right: 10px;
    }
  
    nav a {
      color: white;
      text-decoration: none;
      margin: 0 15px;
    }
  
    nav a:hover {
      text-decoration: underline;
    }
  
    /* MAIN CONTENT */
    .main-content {
      text-align: center;
      margin-top: 20vh;
    }
  
    .site-title {
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 10px;
    }
  
    .signin-box {
      background: #f4f4f4;
      padding: 30px;
      border-radius: 8px;
      display: inline-block;
      margin-top: 10px;
    }
  
    input {
      display: block;
      width: 100%;
      padding: 8px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  
    button {
      background: #333;
      color: white;
      border: none;
      padding: 10px;
      width: 100%;
      cursor: pointer;
    }
  
    button:hover {
      background: #555;
    }
  </style>
  
  <!-- HEADER -->
  <header>
    <div class="logo">
      <img src="favicon.png" alt="Logo"> <!-- Replace with actual logo -->
      <h1>QuizMe</h1>
    </div>
    <nav>
      <a href="https://www.youtube.com/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  </header>
  
  <!-- MAIN CONTENT -->
  <div class="main-content">
    <h1 class="site-title">QuizMe</h1>
    
    <div class="signin-box">
      <h3>Sign In</h3>
      <input type="email" bind:value={email} placeholder="Email">
      <input type="password" bind:value={password} placeholder="Password">
      <button onclick={signIn}>Sign In</button>
      <a href="">create an account</a>
    </div>
  </div>
  