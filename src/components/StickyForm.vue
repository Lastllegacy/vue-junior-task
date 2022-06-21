<template>
      <div class="stick-content">
         <form 
            @submit.prevent
         >
         <div v-for="input,label in newInputs" 
         :key="input.id"
         >
         <label :for="input.id" class="input-label">{{input.name}}</label>
         <MyNewInput 
         :placeholder="input.name"
         :id="input.id"
         v-model="product[label]" 
         />
         </div>

         <!-- <div v-for="input,key in inputs" >
         <MyInput 
               :key="input.id"
               :modelInput="input"
               v-model="product[key]"
              />
              <MyError
              >
               {{ showErrors[key] }}
              </MyError>

         </div> -->

         <MyButton
         @click="emitOnAddProduct"
          class="add-item-button"
          >
            Добавить товар
         </MyButton>
         </form>
      </div>
</template>

<script>
   import { reactive, computed } from 'vue';
   
   export default {
    setup(props, { emit }) {
        const inputs = reactive({
            name: { name: "Наименование товара", id: "1" },
            description: { name: "Описание товара", id: "2", inputHeight: "6rem", isTextarea: true, needValidation: false },
            icon: { name: "Ссылка на изображение товара", id: "3" },
            price: { name: "Цена товара", id: "4" },
        });
        const newInputs = reactive({
            name: { name: "Наименование товара", id: "1" },
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
        const emitOnAddProduct = (event) => {
            for (let prop in product) {
                if (product[prop] == "" && prop != "description") {
                    return showErrors[prop] = "Поле является обязательным";
                }
                else {
                    showErrors[prop] = "";
                }
            }
            return addProductAndClearForm();
        };
        return {
            product,
            inputs,
            emitOnAddProduct,
            showErrors,
            newInputs
        };
    },
}
</script>

<style lang="scss">
   .stick-content {
      padding: 24px;
      width: 100%;
   }

   .input-label {
      font-size: 10px;
   }

   .add-item-button {
      font-family: 'Inter';
      width: 100%;
      font-weight: 600;
      font-size: 12px;
      margin: 24px 0 0 0;
      color: #B4B4B4;
   }



   .error {
      color: red;
      font-size: 8px;
   }
</style>