<script>
    async function logout() {
        const res = await fetch("/api/auth/signOut", {
            method: "POST",
        });

        if (res.ok) {
            window.location.href = "/";
        }
    }
</script>

<button class="logout-button" on:click={logout}>
    Logout
</button>

<style>
    .logout-button {
        background: #4299e1;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .logout-button:hover {
        background: #3182ce;
    }

    .logout-button:active {
        transform: translateY(2px);
    }
</style>


