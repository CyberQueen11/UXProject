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
    value: [String, Number],
  },
  methods: {
    updateSelection(event) {
      //updateCharacterList
      //Fill SubjectList with values fetched from API
      
      //Update characterList depending on if(characterRoles in SubjectList) then output updated list
      //updatePlaceList

      //get the index
      let selectedIndex = event.target.selectedIndex;
      //And then get value with index num
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

      <select class="select w-full max-w-xs" @change="updateSelection">
        <option disabled selected>{{ placeholder }}</option>
        <option v-for="item in items" :value="item.value">
          {{ item.label }}
        </option>
      </select>
    </template>
  </DropMenuItem>
</template>
