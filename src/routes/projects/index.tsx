import { component$ } from "@builder.io/qwik";
import projects from "../../data/projects.json";

export default component$(() => {
  return (
    <section class="py-12">
      <h1 class="text-4xl font-bold mb-4 text-center">My Projects</h1>
      <p class="text-center text-gray-500 mb-12">
        Beberapa karya terbaik yang pernah saya bangun.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            class="group overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 hover:shadow-xl transition-all"
          >
            <img
              src={project.image}
              alt={project.title}
              class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">{project.title}</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {project.description}
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    class="px-3 py-1 text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                class="text-blue-500 font-medium hover:underline"
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
