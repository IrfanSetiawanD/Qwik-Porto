import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <section class="mx-auto max-w-4xl px-4 py-20 text-center">
      <h1 class="mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent md:text-7xl">
        Web Developer & Creative Coder (QWIK)
      </h1>
      <p class="mb-10 text-xl text-gray-600 dark:text-gray-400">
        A passionate Frontend Developer specializing in building beautiful,
        functional, and high-performance web applications.
      </p>
      <div class="flex justify-center gap-4">
        <Link
          href="/projects"
          class="rounded-full bg-blue-600 px-8 py-3 font-bold text-white hover:bg-blue-700"
        >
          Lihat Project
        </Link>
        <Link
          href="/contact"
          class="rounded-full border border-blue-600 px-8 py-3 font-bold hover:bg-blue-50 dark:hover:bg-gray-800"
        >
          Hubungi Saya
        </Link>
      </div>
    </section>
  );
});
