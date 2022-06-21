<template>
   <div class="error">
      <slot></slot>
   </div>
</template>

<script>
   export default {
      name: 'MyError'
   }
</script>

<style scoped>
.error {
   margin-top: 2px;
   font-size: 8px;
   color: #FF8484;
}
</style>