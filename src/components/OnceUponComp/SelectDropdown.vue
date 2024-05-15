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
      <div>
        <select
          class="select w-full max-w-xs mt-[2px] mb-[2vw] lg:mt-[0.5px] lg:mb-[0.5vw] rounded-box bg-white text-black border-gray-300"
          @change="updateSelection"
        >
          <option disabled selected>{{ placeholder }}</option>
          <option v-for="item in items" :value="item.value">
            {{ item.label }}
          </option>
        </select>
      </div>
    </template>
  </DropMenuItem>
</template>
