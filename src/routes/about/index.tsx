import { component$ } from "@builder.io/qwik";

export default component$(() => {
  const skills = [
    {
      name: "Frontend",
      items: ["React", "Qwik", "Tailwind CSS", "TypeScript"],
    },
    { name: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Prisma"] },
    { name: "Tools", items: ["Git", "VS Code", "Figma", "Postman"] },
  ];

  return (
    <div class="space-y-16 py-12">
      {/* Section 1: Hero Profil */}
      <section class="flex flex-col items-center gap-10 md:flex-row">
        <div class="h-48 w-48 rotate-3 overflow-hidden rounded-2xl bg-gray-200 shadow-xl transition-transform duration-300 hover:rotate-0">
          <img
            src="https://picsum.photos/seed/person/400/400"
            alt="Profile"
            class="h-full w-full object-cover"
          />
        </div>
        <div class="flex-1 space-y-4 text-center md:text-left">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white">
            Halo, Saya <span class="text-blue-600">Irfan Setiawan D</span>
          </h1>
          <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Saya adalah seorang Fullstack Developer yang berfokus pada
            pembangunan aplikasi web yang cepat, responsif, dan mudah digunakan.
            Saat ini saya sedang mendalami teknologi modern seperti Qwik dan
            Tailwind CSS v4.
          </p>
        </div>
      </section>

      {/* Section 2: Tech Stack */}
      <section class="space-y-6">
        <h2 class="inline-block border-b-2 border-blue-500 pb-1 text-2xl font-bold">
          Keahlian Teknologi
        </h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          {skills.map((category) => (
            <div
              key={category.name}
              class="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900/50"
            >
              <h3 class="mb-4 font-bold text-blue-500">{category.name}</h3>
              <ul class="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    class="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <span class="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Kontak Cepat */}
      <section class="rounded-3xl bg-blue-600 p-8 text-center text-white">
        <h2 class="mb-4 text-2xl font-bold">Tertarik bekerja sama?</h2>
        <p class="mb-6 opacity-90">
          Saya selalu terbuka untuk diskusi proyek menarik atau peluang kerja.
        </p>
        <a
          href="mailto:emailkamu@gmail.com"
          class="inline-block rounded-full bg-white px-8 py-3 font-bold text-blue-600 transition-colors hover:bg-gray-100"
        >
          Hubungi Saya
        </a>
      </section>
    </div>
  );
});
