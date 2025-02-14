<script>
    export let data;
</script>

{#if data.user}
    <h1>Welcome, {data.user.email}!</h1>
{:else}
    <p>You are not logged in. <a href="/">Login</a></p>
{/if}
