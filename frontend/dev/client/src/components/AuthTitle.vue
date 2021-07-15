<template>
  <div class="displayRow" style="align-items: center; justify-content: center;">
    <i class="fas fa-paperclip authIcon"></i>
    <div class="displayColumn" style="text-align: left;">
      <span class="authTitle"><u>{{ title }}</u></span>
      <span class="authText">{{ info }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AuthTitle",
    props: ["title", "info"]
  }
</script>

<style>

</style>