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