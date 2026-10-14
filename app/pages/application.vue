<script setup lang="ts">
useSeoMeta({
  title: 'ADN Application',
  description: 'Application for the Arctic Digital Nomads program, showcasing my skills, experience, and motivation for joining the ADN community.'
})

const videoUrl = 'https://res.cloudinary.com/donpcwlwk/video/upload/v1792013794/ADN_Video_bits_tv9ynj.mp4'

</script>

<template>
  <LazyStarsBg />

  <UPage class="w-full min-h-screen">
    <br>
    <div class="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <video
        controls
        playsinline
        class="w-full max-w-4xl rounded-xl shadow-2xl"
      >
        <source
          :src="videoUrl"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div class="flex gap-4 mt-8">
        <UButton
          to="/"
          size="lg"
          variant="outline"
          icon="i-heroicons-home"
        >
          Home
        </UButton>

        <UButton
          to="/all_projects"
          size="lg"
          icon="i-heroicons-folder"
        >
          Projects
        </UButton>

        <UButton
          :href="videoUrl"
          download
          size="lg"
          icon="i-heroicons-arrow-down-tray"
        >
          Download Video
        </UButton>
      </div>
    </div>
  </UPage>
</template>