import { test, expect } from "@playwright/test";

test("should remove highlight when word is clicked", async ({ page }) => {
  await page.goto("/");

  const firstWord = page.locator(".highlighted-word").first();

  const initialBg = await firstWord.evaluate(
    (el) => window.getComputedStyle(el).backgroundColor
  );
  expect(initialBg).toBe("rgb(0, 0, 255");

  await firstWord.click();

  const newBg = await firstWord.evaluate(
    (el) => window.getComputedStyle(el).backgroundColor
  );
  expect(newBg).not.toBe("rgb(0,0,255)");
});
