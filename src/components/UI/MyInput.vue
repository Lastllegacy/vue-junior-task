<template>
   <div class="input-item">
      <label class="label-name" :class="{ ['validation-mark']: !modelInput.needValidation }" :for="modelInput.id">
         {{ modelInput.name }}
      </label>
      <input v-if="!modelInput.isTextarea" :value="modelValue" @input="emitOnInput"
         :placeholder="modelInput.placeholder" :id="modelInput.id" class="input-text" type="text" />
      <textarea v-else :style="{ height: modelInput.inputHeight }" class="input-text"
         :placeholder="modelInput.placeholder" :value="modelValue" @input="emitOnInput">
   </textarea>
   </div>

</template>

<script>
import { ref } from 'vue';

export default {
   name: "MyInput",

   setup(props, { emit }) {

      const emitOnInput = (event) => {
         emit('update:modelValue', event.target.value.trim());
      }

      return {
         emitOnInput,
      }
   },
   //** Мы не можем получать значение из пропсов на прямую
   props: {
      modelValue: [String, Number],
      modelInput: {
         required: true,
         default: {
            name: "",
            needValidation: true,
            id: "",
            inputHeight: "",
            isTextarea: false,
            placeholder: ""
         },
      },
   },
}
</script>

<style lang="scss">
.label-name {
   font-size: 10px;
}

.input-item {
   margin: 1rem 0 0 0;
   &:first-child {
      margin: 0;
   }
}

.validation-mark {
   &::after {
      content: url('@/images/validationImage.svg');
      position: relative;
      bottom: 6px;
   }
}

.input-text {
   width: 100%;
   border: 0;
   margin: 4px 0 0 0;
   padding: 10px 15px;
   background: #FFFEFB;
   box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
   border-radius: 4px;
   overflow: hidden;
}
.error {
   color: red;
}
</style>