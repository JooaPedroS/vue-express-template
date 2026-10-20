<template>
    <div class="app-layout">
        <header>
            <RouterLink to="/">Minha aplicação</RouterLink>

            <nav>
                <RouterLink to="/">Início</RouterLink>
                <RouterLink to="/about">Sobre</RouterLink>
            </nav>
        </header>

        <main>
            <RouterView />
        </main>

        <footer>
            <p>© Minha aplicação</p>
        </footer>
    </div>
</template>

<style scoped>
.app-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

header,
footer {
    padding: 1rem 2rem;
    border-bottom: 1px solid #e5e7eb;
}

nav {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

main {
    flex: 1;
    padding: 2rem;
}
</style>
