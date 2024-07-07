import { defineStore } from "pinia";

export const useCustomFuncStore = defineStore("customFunctions", () => {
    const capitalize = (word: string): string => {
        if (word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        }
        return ""
    };

    return {capitalize,}
})
