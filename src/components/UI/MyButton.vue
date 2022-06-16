<template>
   <button class="btn">
      <slot></slot>
   </button>
</template>

<script>
   export default {
      name: 'MyButton'
   }
</script>

<style>
.btn {
   padding: 10px 15px;
   background: #EEEEEE;
   border-radius: 10px;
}
</style>