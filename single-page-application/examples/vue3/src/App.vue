<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <main class="container">
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact">Contact</RouterLink>
        </li>
      </ul>
    </nav>
    <RouterView />
  </main>
</template>
