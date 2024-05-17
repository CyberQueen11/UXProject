<script>
import DropMenuItem from "./DropMenuItem.vue";

export default {
  components: {
    DropMenuItem,
  },
  props: {
    label: String,
    placeholder: String,
    items: Array,
    value: String,
    characterLoading: Boolean,
    placeLoading: Boolean,
  },

  methods: {
    async updateSelection(event) {
      //Get selected drop down menus value
      let selectedIndex = event.target.selectedIndex;
      let selectedValue = event.target.options[selectedIndex].value;
      this.$emit("update:selected", selectedValue);
    },
  },
};
</script>

<template>
  <DropMenuItem>
    <template #text>
      {{ label }}
      <div>
        <select
          class="select w-11/12 max-w-xs mt-[2px] mb-[2vw] lg:mt-[0.5px] lg:mb-[0.5vw] rounded-box bg-white text-black border-gray-300"
          @change="updateSelection"
          :disabled="characterLoading || placeLoading"
          :class="{ 'select-disabled': characterLoading || placeLoading }"
        >
          <option v-if="characterLoading || placeLoading" disabled>Loading...</option>
          <option v-else disabled selected>{{ placeholder }}</option>
          <option
            v-for="item in items.filter((item) => item.exists)"
            :value="item.value"
          >
            {{ item.label }}
          </option>
        </select>
      </div>
    </template>
  </DropMenuItem>
</template>

<style scoped>
.select-disabled {
  background-color: #f6f6f6 !important; 
  color: #c7c1c1 !important;
}
</style>
