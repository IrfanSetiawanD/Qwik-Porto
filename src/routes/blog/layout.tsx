import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="mx-auto max-w-3xl px-6 py-12">
      {/* Bungkus Slot dengan class prose agar styling Markdown muncul */}
      <article class="prose dark:prose-invert lg:prose-xl mb-10">
        <Slot />
      </article>

      <div class="border-t border-gray-200 pt-6 dark:border-gray-800">
        <a href="/blog" class="text-blue-500 hover:underline">
          ← Kembali ke Blog
        </a>
      </div>
    </div>
  );
});
