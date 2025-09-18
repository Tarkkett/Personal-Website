<script setup lang="ts">
const { data: page } = await useAsyncData('projects-page', () => {
  return queryCollection('pages').path('/projects').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('projects').all()
})

const { global } = useAppConfig()

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <LazyStarsBg />
  <UPage v-if="page" class="w-full">
        <UPageHero
      :title="page.title"
      :description="page.description"
      :links="page.links"
      :headline="page.headline"
      :ui="{
        container: 'flex flex-col lg:grid pt-24 sm:pt-32 lg:pt-40 pb-8 sm:pb-12 lg:pb-16 gap-16 sm:gap-y-24',
        wrapper: 'mb-0',
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start'
      }"

    >
      <template #links>
        <div
          v-if="page.links"
          class="flex items-center gap-2"
        >
          <UButton
            :label="page.links[0]?.label"
            :to="'mailto:'+global.email"
            v-bind="page.links[0]"
          />
        </div>
      </template>
      <UTimeline size="xs" :default-value="8" :items="items" class="w-96" />
    </UPageHero>
    <UPageSection class="pt-0"
    :ui="{ 
      wrapper: 'mt-0 py-0',
      container: 'border-0 flex flex-col lg:grid py-16 sm:py-16 lg:py-0 gap-6 sm:gap-16 mb-16' }"
    >
      <Motion
        v-for="(project, index) in projects"
        :key="project.title"
        :initial="{ opacity: 0, transform: 'translateY(10px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.2 * index }"
        :in-view-options="{ once: true }"
      >
        <UPageCard
          :title="project.title"
          :description="project.description"
          :to="project.url"
          orientation="horizontal"
          variant="naked"
          :reverse="index % 2 === 1"
          class="group"
          :ui="{
            wrapper: 'max-sm:order-last'
          }"
        >
          <template #leading>
            <span class="text-sm text-muted">
              {{ new Date(project.date).getFullYear() }}
            </span>
          </template>
          <template #footer>
            <ULink
              :href="project.url"
              :external="true"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-primary flex items-center"
            >
              View Project
              <UIcon
                name="i-lucide-arrow-right"
                class="size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
              />
            </ULink>
          </template>
          <NuxtImg
            :src="project.image"
            :alt="project.title"
            class="object-cover w-full h-full rounded-lg"
          />
        </UPageCard>
      </Motion>
    </UPageSection>
  </UPage>
</template>
