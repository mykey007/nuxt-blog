<template>
    <main class="container mx-auto">
        <h1>Single's Nite</h1>
        <h2>Single ID {{ $route.params.id }}</h2>
    </main>
</template>

<script>
export default {
    validate (data) {
        console.log(data)
        return /^\d+$/.test(data.params.id)
    }
}
</script>