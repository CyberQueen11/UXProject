import { places } from "@/components/OnceUponComp/lists/places";
import { defineStore } from "pinia";

export const usePlaceStore = defineStore('placeStore', {
    state: () => ({
        places: places
    }),
    actions: {
        updatePlaces(newPlaces) {
            this.places = newPlaces;
        }
    }
})