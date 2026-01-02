import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <>
      {/* Header akan selalu muncul di setiap halaman */}
      <Header />

      <main class="min-h-screen pt-20 px-4 md:px-0">
        <div class="max-w-6xl mx-auto">
          {/* Slot adalah tempat isi halaman (index, about, projects) akan muncul */}
          <Slot />
        </div>
      </main>

      <footer class="mt-20 py-10 border-t border-gray-200 dark:border-gray-800">
        <div class="max-w-6xl mx-auto text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} - Built with Qwik & Tailwind CSS</p>
        </div>
      </footer>
    </>
  );
});
