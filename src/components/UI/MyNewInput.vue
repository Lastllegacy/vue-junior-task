<template>
      <input 
      :value="modelValue" 
      @input="emitOnInput"
      :placeholder="placeholder" 
      :id="id" 
      class="input-text" 
      type="text" 
      />
</template>

<script >

export default {
   name: "MyNewInput",

   setup(props, { emit }) {

      const emitOnInput = (event) => {
         emit('update:modelValue', event.target.value.trim());
      }

      return {
         emitOnInput,
      }
   },

   props: {
      modelValue: [String, Number],
      placeholder: "",
      id: "",
   },
}
</script>

<style lang="scss">

.input-text {
   width: 100%;
   margin-top: 4px;
   padding: 10px 15px;
   background: #FFFEFB;
   box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
   border-radius: 4px;
   &::placeholder {
      font-family: 'Source Sans Pro';
   }
}
@media screen and (max-width: 720px) {
   .input-text {
   font-size: 12px;
   padding: 5px 10px;
}
   
}

</style>