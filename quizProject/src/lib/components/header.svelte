
<script>
    let { header, name } = $props();
</script>
<style>
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
</style>

<header>
    <div class="logo">
        <a href="/">
            <img src="favicon.png" alt="QuizMe Logo">
          </a>
      <h1>QuizMe</h1>
      {@render name()}
      </div>
      {@render header()}
  </header>
