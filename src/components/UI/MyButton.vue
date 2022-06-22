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
   cursor: pointer;
   border-radius: 10px;
   font-family: 'Inter';
   font-weight: 600;
   font-size: 12px;
}
</style>