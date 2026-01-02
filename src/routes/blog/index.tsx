import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  // Data ini nantinya bisa kamu buat dinamis,
  // namun untuk awal kita buat list yang terstruktur
  const posts = [
    {
      title: "Memulai Perjalanan Web Dev dengan Qwik",
      description:
        "Mengapa saya memilih Qwik untuk portofolio ini dan bagaimana performanya.",
      date: "2024-05-21",
      slug: "hello-world",
      tags: ["Qwik", "WebDev"],
    },
    // Tambahkan objek baru di sini jika kamu membuat file .mdx baru
  ];

  return (
    <section class="max-w-4xl mx-auto py-12 px-4">
      <header class="mb-12">
        <h1 class="text-4xl font-extrabold mb-4 dark:text-white">
          Blog & Artikel
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          Berbagi pemikiran seputar teknologi, koding, dan tips pengembangan
          web.
        </p>
      </header>

      <div class="grid gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            class="group relative flex flex-col items-start p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all"
          >
            <time class="text-sm text-gray-500 mb-2">{post.date}</time>
            <h2 class="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
              <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
              {post.description}
            </p>
            <div class="flex gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  class="text-xs font-medium text-blue-600 dark:text-blue-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
            {/* Link Tak Terlihat untuk membuat seluruh kartu bisa diklik */}
            <Link
              href={`/blog/${post.slug}/`}
              class="absolute inset-0 z-0"
              aria-label={post.title}
            />
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div class="text-center py-20 border-2 border-dashed rounded-2xl border-gray-200 dark:border-gray-800">
          <p class="text-gray-500">Belum ada artikel yang dipublikasikan.</p>
        </div>
      )}
    </section>
  );
});
