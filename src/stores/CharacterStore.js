import { characterRoles } from "@/components/OnceUponComp/lists/characterRoles";
import { defineStore } from "pinia";

export const useCharacterStore = defineStore('characterStore', {
    state: () => ({
        characters: characterRoles,
    }),
    getters: {
        exists() {
            return this.characterRoles.filter(t => t.exists)
        }
    }
})