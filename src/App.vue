<template>
  <div class="app">
    <div class="app__header">
      Добавление товара
      <MySelect
      v-model="selectedOption"
      >
      </MySelect>
    </div>
    <div class="app__body">
      <div class="content-border stick-form">
        <StickyForm
         />
      </div>
      <div class="products">
        <ProductItem
        v-for="defaultProduct of defaultProducts"
        :productModel="defaultProduct"
         />
        
      </div>
    </div>
  </div>
</template>

<script>
import StickyForm from './components/StickyForm.vue';
import { ref } from 'vue';
import ProductItem from './components/ProductItem.vue';

  export default {

    setup (props, { emit }) {
      const selectedOption = ref('');
      const newIcon = ref("");


      const defaultProducts = ref([
        {name:"Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк" ,icon : "defaultProductImage.svg", price: "10 000 руб."},
        {name:"Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк" ,icon : "defaultProductImage.svg", price: "10 000 руб."},
        {name:"Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк" ,icon : "defaultProductImage.svg", price: "10 000 руб."},
        {name:"Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк" ,icon : "defaultProductImage.svg", price: "10 000 руб."},
        {name:"Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк" ,icon : "defaultProductImage.svg", price: "10 000 руб."},
        {name:"Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк" ,icon : "defaultProductImage.svg", price: "10 000 руб."},
        {name:"Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк" ,icon : "defaultProductImage.svg", price: "10 000 руб."},
        {name:"Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк" ,icon : "defaultProductImage.svg", price: "10 000 руб."},
        {name:"Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк" ,icon : "defaultProductImage.svg", price: "10 000 руб."}
      ])

      return {
        selectedOption,
        newIcon,
        defaultProducts
      }
    },


    components: {
    StickyForm,
    ProductItem
},
}
</script>

<style lang="scss">

  .app {
    margin: 32px;

    &__header {
      font-weight: 600;
      font-size: 28px;
      display: flex;
      justify-content: space-between;
    }
    &__body {
      display: flex;
      margin: 15px 0 0 0;
      justify-content: space-between;
    }
  }

  .stick-form {
    width: 34%; 
    height: 100%;
    position: sticky;
    top: 0;
  }
  .products {
    width: 65%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

</style>
