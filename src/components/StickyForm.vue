<template>
         <form 
            @submit.prevent
         >
         <!-- This input goes for name -->
         <label :for="newInputs.name.id" class="input-label valid">{{newInputs.name.name}}</label>
         <MyNewInput :placeholder="newInputs.name.name" :id="newInputs.name.id" v-model="product.name"
         :class="{ ['validation']: showErrors.name }"
          />
         <MyError> {{ showErrors.name }} </MyError>

         <!-- This textarea goes for description -->
         <label :for="newInputs.name.id" class="input-label">{{newInputs.description.name}}</label>
         <textarea class="input-text text-area" :placeholder="newInputs.description.name" :id="newInputs.description.id" 
         v-model="product.description">
         </textarea>
      
         <!-- This input goes for icon -->
         <label :for="newInputs.icon.id" class="input-label valid">{{newInputs.icon.name}}</label>
         <MyNewInput :placeholder="newInputs.icon.name" :id="newInputs.icon.id" v-model="product.icon" 
         :class="{ ['validation']: showErrors.icon }"
         />
         <MyError> {{showErrors.icon}} </MyError>

         <!-- This input goes for price -->
         <label :for="newInputs.price.id" class="input-label valid">{{newInputs.price.name}}</label>
         <MyNewInput :placeholder="newInputs.price.name" :id="newInputs.price.id" v-model="product.price" 
         :class="{ ['validation']: showErrors.price }"
         />
         <MyError> {{ showErrors.price }}  </MyError>

         <MyButton
         @click="onSubmit"
          class="add-item-button"
          :class="{ ['add-item-button-valid']: (product.name,product.icon,product.price) }"
          >
            Добавить товар
         </MyButton>

         </form>
</template>

<script>
   import { reactive } from 'vue';
   
   export default {

    setup(props, { emit }) {

      const newInputs = reactive({
         name: { name: "Наименование товара", id: "1" },
         description: { name:"Описание товара", id:"2" },
         icon: { name: "Ссылка на изображение товара", id: "3" },
         price: { name: "Цена товара", id: "4" },
      });

      const product = reactive({
         name: "",
         description: "",
         icon: "",
         price: "",
      });
      const showErrors = reactive({
         name: "",
         price: "",
         icon: ""
        });

      function addProductAndClearForm() {
         emit("addProduct", { ...product, id: Date.now() });
         for (let prop in product) {
               product[prop] = "";
         }
      }

      const onSubmit = (event) => {
         for (let prop in product) {
               if (product[prop] == "" && prop != "description") {
                  return showErrors[prop] = "Поле является обязательным" 
               }
               else {
                  showErrors[prop] = "";
               }
         }
         return addProductAndClearForm();
      };

      return {
         product,
         onSubmit,
         showErrors,
         newInputs
      };
   },
}
</script>

<style lang="scss">

   .input-label {
      font-size: 10px;
   }

   .add-item-button {
      margin: 24px 0 0 0;
      width: 100%;
      &-valid {
         background: #7BAE73;
         color: white;
      }
      color: #B4B4B4;
      
   }

   .error {
      color: red;
      font-size: 8px;
   }

   .text-area {
      resize: none;
      height: 6rem;
      font-family: 'Source Sans Pro' , sans-serif;
   }

   .valid {
      &::after {
         content: url('@/images/validationImage.svg');
         position: relative;
         bottom: 6px;
      }
   }

   .validation {
      border: 1px solid red;
   }

</style>