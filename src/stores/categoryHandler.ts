import { ref } from "vue";
import { defineStore } from "pinia";
// import { CategoryList as ListOfCategoriesAndWords, Word } from "../types/types";
import {useCustomFuncStore} from './customFunctions'

export const useCategoryStore = defineStore("categoryHandler", () => {
    const fn = useCustomFuncStore()

    // Test, can be deleted
    const categoryData = ref<any[]>([
        { category: "Animals", words: ["cat"] },
        { category: "Objects", words: ["car"] },
    ]);

    const updateCategoryList = () => {
        const categoryNames = categoryData.value.map((item) => fn.capitalize(item.category))
        categoryData.value = [{ category: "Ideas", words: ["swimming"] }, ...categoryNames]
    }

    return {
        categoryData,
        updateCategoryList,
    };
});
