<template>
   <div v-if="products.length > 0" class="list-of-products">
      <TransitionGroup
         name="product-list"
         >
            <ProductItem
               v-for="product of products"
               :productModel="product"
               :key="product.id"
               @removeProduct="removeProductHandler"
               />
         </TransitionGroup>
   </div>

   <h2 v-else>
      Список продуктов пуст!
   </h2>

</template>

<script>
import ProductItem from './ProductItem.vue'
   export default {
    props: {
        products: {
            required: true,
            type: Array
        }
    },
    setup(props, { emit }) {
        function removeProductHandler(product) {
            emit("removeProduct", product);
        }

        return {
         removeProductHandler
        }
    },
    components: { ProductItem }
}
</script>

<style>

.product-list-move, /* apply transition to moving elements */
.product-list-enter-active,
.product-list-leave-active {
  transition: all 0.5s ease;
}

.product-list-enter-from,
.product-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.product-list-leave-active {
  position: absolute;
  transform: translateY(-30px);
  transition: all 1s ease;
}


.list-of-products {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   position: relative;
}
</style>