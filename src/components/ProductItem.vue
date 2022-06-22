<template>
   <div class="content-border whole-product">
      <img :src="imageSourceChecker(productModel.icon)" alt="loading url " class="product-image"/> 
      <div class="text-content">
         <div class="content__name"> {{productModel.name}} </div>
         <div class="content__description"> {{productModel.description}} </div>
         <div class="content__price"> {{productModel.price}} </div>
      </div>
      <button
      class="remove-trash"
      @click="emitOnRemoveProduct"
      ></button>
   </div>
</template>

<script>

export default {

    setup(props, { emit }) {

      const emitOnRemoveProduct = (event) => {
         emit('removeProduct', props.productModel);
      }

      function imageSourceChecker (src) {
         
         if (src.substring(0,4) == "http"){
            return src
         }
         return require(`@/images/${src}`)
      }

      return {
      emitOnRemoveProduct,
      imageSourceChecker
      }
    },
    props: {
        productModel: {
            required: true,
            default: {
                name: {
                    required: true,
                    type: String
                },
                description: {
                    type: String
                },
                icon: {
                    required: true,
                    type: String
                },
                price: {
                    required: true,
                    type: String
                },
                id : {
                  required: true,
                }
            }
        }
    },
}

</script>

<style lang="scss">
   .whole-product {
      width: 32%;
      margin: 1% 0;
      display: flex;
      flex-direction: column;
      position: relative;
      &:hover {
         cursor: pointer;
      }
   }

   .whole-product:hover .remove-trash {
      display: block;
   }

   .remove-trash{
      display: none; 
      width: 32px;
      height: 32px;
      position: absolute;
      top: -10px;
      right: -10px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      background: url('@/images/trashIcon.svg') center no-repeat,#FF8484;
      cursor: pointer;
   }

   .product-image {
      max-width: 100%;
      max-height: 200px;
   }

   .text-content {
      margin: 0 1rem;
   }

   .content {
      &__name {
         font-weight: 600;
         font-size: 20px;
         margin-top: 1rem;
      }

      &__description {
         font-size: 16px;
         margin-top: 1rem;
      }
      
      &__price {
         font-size: 24px;
         font-weight: 600;
         margin: 2rem 0;
      }
   }
   
</style>