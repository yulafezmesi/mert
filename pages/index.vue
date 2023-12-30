<template>
  <main class="max-w-2xl flex flex-col gap-8 py-8 sm:px-0 px-4 sm:py-16 mx-auto w-full">
    <section class="flex flex-col gap-3">
      <div class="flex justify-between w-full">
        <div class="flex gap-1.5 flex-col flex-1">
          <h1 class="text-2xl font-bold">
            Mert Certel
          </h1>
          <h2 class="text-slate-700 text-sm">
            Detail-Oriented Frontend Developer
          </h2>
          <address class="text-xs text-slate-700">
            <a class="inline-flex gap-x-1.5 align-baseline leading-none hover:underline" href="https://www.google.com/maps/place/Turkey" target="_blank">
              <span class="i-tabler-world" />
              Turkey
            </a>
          </address>
          <div class="flex gap-x-1 pt-1 text-sm text-slate-700 print:hidden">
            <a v-for="item in social" :key="item.name" :href="item.url" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-8 w-8">
              <span :class="item.icon" />
            </a>
          </div>
        </div>
        <div class="relative flex shrink-0 overflow-hidden rounded-xl h-28 w-28">
          <img width="112" height="112" class="aspect-square h-full w-full" alt="Mert Certel" src="/avatar.png">
        </div>
      </div>
    </section>
    <section class="flex flex-col gap-3">
      <h2 class="text-xl font-bold">
        About
      </h2>
      <p class="text-sm text-slate-700">
        highly skilled frontend developer with a deep love for crafting visually stunning user interfaces using Vue, React frameworks. remote worker, open source contributor, and a lifelong learner.
      </p>
    </section>
    <section class="flex flex-col gap-3">
      <h2 class="text-xl font-bold">
        Work Experience
      </h2>
      <div class="flex flex-col gap-4">
        <div v-for="item in experience" :key="item.company" class="rounded-lg">
          <div class="flex flex-col space-y-1.5">
            <div class="flex items-center justify-between gap-x-2 text-base">
              <h3 class="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                <Component :is="item.website ? 'a' : 'p'" :class="item.website ? 'hover:underline' : ''" :href="item.website">
                  {{ item.company }}
                </Component>
                <span v-if="item.remote" class="inline-flex gap-x-1">
                  <div class="bg-blue-200 text-xs rounded-md py-0.5 px-2">
                    <p class="text-blue-800 font-medium">Remote</p>
                  </div>
                </span>
              </h3>
              <div class="text-sm tabular-nums text-slate-700">
                {{ item.start }}<!-- --> - <!-- --> {{ item.end }}
              </div>
            </div><h4 class="text-sm leading-none">
              {{ item.title }}
            </h4>
          </div>
          <div class="text-slate-700 mt-2 text-xs">
            {{ item.description }}
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col gap-3">
      <h2 class="text-xl font-bold">
        Education
      </h2><div class="rounded-lg bg-card text-card-foreground">
        <div class="flex flex-col space-y-1.5">
          <div class="flex items-center justify-between gap-x-2 text-base">
            <h3 class="font-semibold leading-none">
              Pamukkale University
            </h3><div class="text-sm tabular-nums text-slate-700">
              2010<!-- --> - <!-- -->2012
            </div>
          </div>
        </div><div class="text-pretty text-sm text-slate-700 mt-2">
          Associate's Degree in Computer Programming
        </div>
      </div>
    </section>
    <section class="flex flex-col gap-y-3">
      <h2 class="text-xl font-bold">
        Skills
      </h2>
      <div class="flex flex-wrap gap-1">
        <div v-for="i in skills" :key="i.name" :class="i.class" class="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent">
          {{ i.name }}
        </div>
      </div>
    </section>
    <section class="flex flex-col gap-3">
      <h2 class="text-xl font-bold">
        Projects
      </h2>
      <div class="grid sm:grid-cols-2 gap-4">
        <div v-for="project in projects" :key="project.title" class="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3">
          <div class="flex flex-col space-y-1.5">
            <div class="space-y-1">
              <h3 class="font-semibold tracking-tight text-base">
                <Component :is="project.website ? 'a' : 'div'" :href="project.website" target="_blank" class="inline-flex items-center gap-1 hover:underline">
                  {{ project.title }}<!-- -->
                  <span class="h-1 w-1 rounded-full bg-blue-600" />
                </Component>
              </h3>
              <div class="hidden text-xs underline print:visible">
                {{ project.website }}
              </div><p class="text-muted-foreground text-xs">
                {{ project.description }}
              </p>
            </div>
          </div>
          <div class="text-pretty text-sm text-muted-foreground mt-auto flex">
            <div class="mt-2 flex flex-wrap gap-1">
              <div v-for="tag in project.tags" :key="tag" class="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-neutral-200 text-neutral-800 px-1 py-0 text-[10px]">
                {{ tag }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
