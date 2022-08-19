<script>
    import Counter from './lib/Counter.svelte'

    let message = "";
    fetch("https://localhost:7294/example")
        .then((response) => response.json())
        .then(
            (data) => {
                console.log(data);
                message = data.message;
            });
</script>

<main>

    <h1>Options</h1>

    <div class="card">
        { message }
    </div>


</main>

<style>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
    }

    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }

    .logo.svelte:hover {
        filter: drop-shadow(0 0 2em #ff3e00aa);
    }

    .read-the-docs {
        color: #888;
    }
</style>
