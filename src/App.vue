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
        <TransitionGroup
        name="product-list"
        >
          <ProductItem
            v-for="defaultProduct of defaultProducts"
            :productModel="defaultProduct"
            :key="defaultProduct.id"
            @removeProduct="logger"
            />
        </TransitionGroup>
        
        
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

      function logger (product) {
        defaultProducts.value = defaultProducts.value.filter( some => some.id != product.id)
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
        logger
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .product-list-item {
  display: inline-block;
  margin-right: 10px;
  }
  .product-list-enter-active, 
  .product-list-leave-active {
    transition: all 1s;
  }
  .product-list-enter, 
  .product-list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

</style>
