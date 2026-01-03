import { component$ } from "@builder.io/qwik";
import projects from "../../data/projects.json";

export default component$(() => {
  return (
    <section class="py-12">
      <h1 class="mb-4 text-center text-4xl font-bold">My Projects</h1>
      <p class="mb-12 text-center text-gray-500">
        Beberapa karya terbaik yang pernah saya bangun.
      </p>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            class="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:shadow-xl dark:border-gray-800 dark:bg-gray-800"
          >
            <img
              src={project.image}
              alt={project.title}
              class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div class="p-6">
              <h3 class="mb-2 text-xl font-bold">{project.title}</h3>
              <p class="mb-4 text-sm text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              <div class="mb-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    class="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/IrfanSetiawanD"
                target="_blank"
                class="font-medium text-blue-500 hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
