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
    <header class="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/70 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/70">
      <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          class="text-xl font-bold tracking-tighter transition-colors hover:text-blue-500"
        >
          QWIK.PORTFOLIO
        </Link>

        <div class="flex items-center gap-4 md:gap-8">
          <div class="hidden gap-6 font-medium md:flex">
            <Link
              href="/projects"
              class="transition-colors hover:text-blue-500"
            >
              Projects
            </Link>
            <Link href="/blog" class="transition-colors hover:text-blue-500">
              Blog
            </Link>
            <Link href="/about" class="transition-colors hover:text-blue-500">
              About
            </Link>
          </div>

          <button
            onClick$={toggleTheme$}
            class="rounded-xl bg-gray-100 p-2 ring-blue-400 transition-all hover:ring-2 dark:bg-gray-800"
            aria-label="Toggle Theme"
          >
            {state.isDark ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>
    </header>
  );
});
