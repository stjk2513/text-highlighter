<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  text: string;
}>();

const words = ref(
  props.text.split(" ").map((word, index) => ({
    id: index,
    text: word,
    isHighlighted: true,
  }))
);

const handleClick = (id: number) => {
  const word = words.value.find((w) => w.id === id);
  if (word) {
    word.isHighlighted = false;
  }
};

const highlight = ref("highlighted-word");
</script>

<template>
  <div>
    <span
      v-for="(word, index) in words"
      :key="index"
      :class="{ [highlight]: word.isHighlighted }"
      @click="handleClick(word.id)"
    >
      {{ word.text }}
    </span>
  </div>
</template>

<style scoped>
.highlighted-word {
  background-color: rgb(0, 0, 255);
  color: white;
  padding: 2px 4px;
  margin: 0 2px;
}
</style>
