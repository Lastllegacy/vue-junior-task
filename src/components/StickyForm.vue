<template>
      <div class="stick-content">
         <form 
            @submit.prevent
         >
         <div>
            <MyInput 
               v-for="label in labels"
               :key="label.id"
               :modelInput="label"
               v-model="product[label.is]"
              />
         </div>
         <MyButton
         @click="onAddItem"
          class="add-item-button">
            Добавить товар
         </MyButton>
         </form>
      </div>
</template>

<script>
   import { ref } from 'vue';
   
   export default {

      setup (props, { emit }) {
         const labels = ref([
            { name: "Наименование товара", id:"1", is: "name", placeholder:"Наименование товара"},
            { name: "Описание товара", needValidation: true, inputHeight:"6rem",id:"2",is: "description", isTextarea:true ,placeholder:"Описание товара"},
            { name: "Ссылка на изображение товара",id:"3", is: "link", placeholder: "Ссылка на изображение товара"},
            { name: "Цена товара", id:"4", is: "price", placeholder: "Цена товара"},
         ]);
         const product = ref({
               name: '',
               description: '',
               link: '',
               price: ''
         })

         const onAddItem = () => {
            emit('onAddItem', {product: product.value})
         }

         return {
            product,
            labels,
            onAddItem
         }
      }

   }
</script>

<style scoped>
   .stick-content {
      padding: 24px;
      width: 100%;
   }

   .add-item-button {
      font-family: 'Inter';
      width: 100%;
      font-weight: 600;
      font-size: 12px;
      margin: 24px 0 0 0;
      color: #B4B4B4;
   }
</style>