<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

const { footer, global } = useAppConfig()

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageHero
    :ui="{
      headline: 'flex items-center justify-center',
      title: 'text-shadow-md mx-auto leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl',
      links: 'mt-6 flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-3 sm:gap-4'
    }"
  >
    <!-- Avatar -->
    <template #headline>
      <Motion
        :initial="{ scale: 1.1, opacity: 0, filter: 'blur(20px)' }"
        :animate="{ scale: 1, opacity: 1, filter: 'blur(0px)' }"
        :transition="{ duration: 0.6, delay: 0.1 }"
      >
        <UColorModeAvatar
          class="size-16 sm:size-20 md:size-24 ring ring-default ring-offset-3 ring-offset-(--ui-bg)"
          light="/img/avatar.jpg"
          dark="/img/avatar.jpg"
          :alt="global.picture?.alt!"
        />
      </Motion>
    </template>

    <!-- Title -->
    <template #title>
      <Motion
        :initial="{ scale: 1.1, opacity: 0, filter: 'blur(20px)' }"
        :animate="{ scale: 1, opacity: 1, filter: 'blur(0px)' }"
        :transition="{ duration: 0.6, delay: 0.1 }"
      >
        {{ page.title }}
      </Motion>
    </template>

    <!-- Description -->
    <template #description>
      <Motion
        :initial="{ scale: 1.3, opacity: 0, filter: 'blur(20px)' }"
        :animate="{ scale: 1.1, opacity: 1, filter: 'blur(0px)' }"
        :transition="{ duration: 0.6, delay: 0.3 }"
      >
        {{ page.description }}
      </Motion>
    </template>

    <!-- Links -->
    <template #links>
      <Motion
        :initial="{ scale: 1.1, opacity: 0, filter: 'blur(20px)' }"
        :animate="{ scale: 1, opacity: 1, filter: 'blur(0px)' }"
        :transition="{ duration: 0.6, delay: 0.5 }"
      >
        <div
          v-if="page.hero.links"
          class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
        >
          <UButton v-bind="page.hero.links[0]" />
          <UButton
            :color="global.available ? 'success' : 'error'"
            variant="ghost"
            class="gap-2 w-full sm:w-auto"
            :to="global.available ? global.meetingLink : ''"
            :label="global.available ? 'Available for new projects' : 'Not available at the moment'"
          >
            <template #leading>
              <span class="relative flex size-2">
                <span
                  class="absolute inline-flex size-full rounded-full opacity-75"
                  :class="global.available ? 'bg-success animate-ping' : 'bg-error'"
                />
                <span
                  class="relative inline-flex size-2 scale-90 rounded-full"
                  :class="global.available ? 'bg-success' : 'bg-error'"
                />
              </span>
            </template>
          </UButton>
        </div>
      </Motion>

      <!-- Footer/social links -->
      <div class="inline-flex flex-wrap justify-center sm:justify-start gap-3 mt-4">
        <Motion
          v-for="(link, index) of footer?.links"
          :key="index"
          :initial="{ scale: 1.1, opacity: 0, filter: 'blur(20px)' }"
          :animate="{ scale: 1, opacity: 1, filter: 'blur(0px)' }"
          :transition="{ duration: 0.6, delay: 0.5 + index * 0.1 }"
        >
          <UButton
            v-bind="{ size: 'md', color: 'neutral', variant: 'ghost', ...link }"
          />
        </Motion>
      </div>
    </template>
  </UPageHero>
</template>
