<template> 
   <select v-model="modelValue" @change="changeOption" class="custom__select">
      <option disabled value="">По умолчанию</option>
      <option 
      v-for="option in options" 
      :key="option.value" 
      :value="option.value"
      >
         {{ option.name }}
      </option>
   </select>
</template>

<script> 
   export default {
      name: "MySelect",
      props: {
         modelValue: {
            type: String,
         },
         options: {
            type: Array,
            default: () => []
         }
      },
      methods: {
         changeOption (event) {
            this.$emit('update:modelValue', event.target.value)
         }
      }
   }
</script>

<style lang="scss"> 
   .custom__select {
      padding: 5px;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      border: 0;
      &:hover{
         cursor: pointer;
         box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
      }
   }
</style>
