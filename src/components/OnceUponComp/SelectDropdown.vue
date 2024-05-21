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
      // Emit an event to update the parent component with the selected value
      this.$emit("update:selected", selectedValue);
    },
  },
};
</script>

<template>
  <!-- Use DropMenuItem component to wrap the dropdown menu -->
  <DropMenuItem>
    <template #text>
      <!-- Display the label text -->
      {{ label }}
      <div>
        <!-- Dropdown menu element -->
        <select
          class="select w-11/12 max-w-xs mt-[2px] mb-[2vw] lg:mt-[0.5px] lg:mb-[0.5vw] rounded-box bg-white text-black border-gray-300"
          @change="updateSelection"
          :disabled="characterLoading || placeLoading"
          :class="{ 'select-disabled': characterLoading || placeLoading }"
        >
          <!-- Show "Loading..." option if data is being loaded -->
          <option v-if="characterLoading || placeLoading" disabled>
            Loading...
          </option>
          <!-- Show placeholder option if not loading -->
          <option v-else disabled selected>{{ placeholder }}</option>
          <!-- Render options from items array where item exists -->
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
/* Style for the disabled state of the select element */
.select-disabled {
  background-color: #f6f6f6 !important;
  color: #c7c1c1 !important;
}
</style>
