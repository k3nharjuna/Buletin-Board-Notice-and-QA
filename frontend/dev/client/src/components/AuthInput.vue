<template>
  <div class="displayColumn inputArea">
    <label class="inputLabel" for="input">{{ inputLabel }}</label>
    <input class="inputEntry" id="input" name="input" :type="inputType" :placeholder="inputPlaceholder" required>
  </div>
</template>

<script>
  export default {
    name: "AuthInput",
    props: ["inputLabel", "inputType", "inputPlaceholder"]
  }
</script>

<style>

</style>