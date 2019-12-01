<template>
  <div class="home">
    <weatherWidget />
  </div>
</template>

<script>
import weatherWidget from '@/components/weatherWidget.vue'; // import component

export default {
  name: "home",
  components: { // and register it
    weatherWidget
  }
}
</script>