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
        @addProduct="addProductHandler"
         />
      </div>
      <div class="products">
        <ProductList
        :products="arrayOfProducts"
        @removeProduct="removeProductHandler"
         />
      </div>
    </div>
  </div>
</template>

<script>
import StickyForm from './components/StickyForm.vue';
import ProductItem from './components/ProductItem.vue';

import { ref } from 'vue';
import ProductList from './components/ProductList.vue';

  export default {
  
    setup (props, { emit }) {

      const selectedOption = ref("");
      const newIcon = ref("");

      function removeProductHandler (product) {
        arrayOfProducts.value = arrayOfProducts.value.filter( p => p.id != product.id)
      }

      function addProductHandler (product) {
        arrayOfProducts.value.push(product)
      }


      const arrayOfProducts = ref([
        {name:"Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк" ,icon : "defaultProductImage.svg", price: "10 000 руб.", id: "1"},
        {name:"Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк" ,icon : "defaultProductImage.svg", price: "20 000 руб.",id: "2"},
        {name:"Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк" ,icon : "defaultProductImage.svg", price: "30 000 руб.",id: "3"},
        {name:"Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк" ,icon : "defaultProductImage.svg", price: "40 000 руб.", id: "4"},
        {name:"Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк" ,icon : "defaultProductImage.svg", price: "50 000 руб.",id: "5"},
        {name:"Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк" ,icon : "defaultProductImage.svg", price: "60 000 руб.",id: "6"},
      ])

      return {
        selectedOption,
        newIcon,
        arrayOfProducts,
        removeProductHandler,
        addProductHandler
      }
    },


    components: {
    StickyForm,
    ProductItem,
    ProductList
},
}
</script>

<style lang="scss" scoped>

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
    padding: 24px;
  }
  .products {
    width: 65%;
    margin-top: -1%;
  }

  @media screen and (max-width: 720px) {
    .app {
    margin: 16px;

    &__header {
      font-size: 22px;
    }
    &__body {
      margin: 10px 0 0 0;
    }
  }
  }

  @media screen and (max-width: 640px) {
    .stick-form {
    width: 40%; 
    padding: 10px;
  }
  .products {
    width: 59%;
  }
  }

  @media screen and (max-width: 450px) {

    .app {
    margin: 10px;
    &__body {
      display: flex;
      flex-direction: column;
    }
  }
  .stick-form {
    position: static;
    width: 100%;
  }
  .products {
    width: 100%;
    margin-top: 25px;
  }
  }


</style>
