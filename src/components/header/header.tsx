import { component$, useStore, useVisibleTask$, $ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const state = useStore({ isDark: false });

  // Cek tema saat ini di browser
  useVisibleTask$(() => {
    state.isDark = document.documentElement.classList.contains("dark");
  });

  // Fungsi toggle tema
  const toggleTheme$ = $(() => {
    state.isDark = !state.isDark;
    const theme = state.isDark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", state.isDark);
    localStorage.setItem("theme", theme);
  });

  return (
    <header class="fixed top-0 w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav class="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <Link
          href="/"
          class="text-xl font-bold tracking-tighter hover:text-blue-500 transition-colors"
        >
          DEV.PORTFOLIO
        </Link>

        <div class="flex items-center gap-4 md:gap-8">
          <div class="hidden md:flex gap-6 font-medium">
            <Link
              href="/projects"
              class="hover:text-blue-500 transition-colors"
            >
              Projects
            </Link>
            <Link href="/blog" class="hover:text-blue-500 transition-colors">
              Blog
            </Link>
            <Link href="/about" class="hover:text-blue-500 transition-colors">
              About
            </Link>
          </div>

          <button
            onClick$={toggleTheme$}
            class="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:ring-2 ring-blue-400 transition-all"
            aria-label="Toggle Theme"
          >
            {state.isDark ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>
    </header>
  );
});
