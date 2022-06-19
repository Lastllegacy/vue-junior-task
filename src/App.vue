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
        :products="defaultProducts"
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
        defaultProducts.value = defaultProducts.value.filter( some => some.id != product.id)
      }

      function addProductHandler (product) {
        defaultProducts.value.push(product)
      }


      const defaultProducts = ref([
        {name:"Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк" ,icon : "defaultProductImage.svg", price: "10 000 руб.", id: "1"},
        {name:"Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк" ,icon : "defaultProductImage.svg", price: "20 000 руб.",id: "2"},
        {name:"Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк" ,icon : "defaultProductImage.svg", price: "30 000 руб.",id: "3"},
        {name:"Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк" ,icon : "defaultProductImage.svg", price: "10 000 руб.",id: "4"},
        {name:"Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк" ,icon : "defaultProductImage.svg", price: "10 000 руб.",id: "5"},
        {name:"Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк" ,icon : "defaultProductImage.svg", price: "10 000 руб.",id: "6"},
        {name:"Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк" ,icon : "defaultProductImage.svg", price: "10 000 руб.",id: "7"},
        {name:"Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк" ,icon : "defaultProductImage.svg", price: "10 000 руб.",id: "8"},
        {name:"Наименование товара", description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк" ,icon : "defaultProductImage.svg", price: "10 000 руб.",id: "9"}
      ])

      return {
        selectedOption,
        newIcon,
        defaultProducts,
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
  }

</style>
