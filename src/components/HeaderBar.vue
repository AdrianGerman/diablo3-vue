<template>
    <div class="header-bar">
        <div class="navigation-bar">
            <b-navbar toggleable="lg" type="dark" variant="dark">
                <b-navbar-brand :to="{ name: 'Home' }">
                    <img src="@/assets/img/diablo-iii.svg" alt="D3" width="30">
                    <!-- Variable de Entorno -->
                    <span class="font-diablo ml-2">{{ title }}</span>
                </b-navbar-brand>
            </b-navbar>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderBar',
    data() {
        return {
            // Recuperamos la variable de entorno y la guardamos en 'title'
            title: process.env.VUE_APP_TITLE
        }
    }
}
</script>