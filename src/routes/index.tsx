import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <section class="max-w-4xl mx-auto px-4 py-20 text-center">
      <h1 class="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Web Developer & Creative Coder
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 mb-10">
        Saya membangun aplikasi web yang cepat, responsif, dan menyenangkan
        untuk digunakan.
      </p>
      <div class="flex justify-center gap-4">
        <Link
          href="/projects"
          class="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700"
        >
          Lihat Project
        </Link>
        <Link
          href="/contact"
          class="px-8 py-3 border border-blue-600 rounded-full font-bold hover:bg-blue-50 dark:hover:bg-gray-800"
        >
          Hubungi Saya
        </Link>
      </div>
    </section>
  );
});
