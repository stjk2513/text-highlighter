import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import WordHighlighter from "./WordHighlighter.vue";

const colorClass = ".highlighted-word";
const hello = "Hello";
const world = "world";

describe("WordHighlighter", () => {
  it("should highlight all words in in blue on mount", () => {
    const wrapper = mount(WordHighlighter, {
      props: {
        text: `${hello} ${world}`,
      },
    });

    const highlightedWords = wrapper.findAll(colorClass);

    expect(highlightedWords).toHaveLength(2);

    expect(highlightedWords[0].text()).toBe(hello);
    expect(highlightedWords[1].text()).toBe(world);
  });
});
