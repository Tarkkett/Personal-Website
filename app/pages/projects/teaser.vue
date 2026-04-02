<script setup lang="ts">
// Hard-coded Swerve Project Page — no external files used

useSeoMeta({
  title: '???',
  description: 'Stay tuned!'
})

const items = [
  'https://res.cloudinary.com/donpcwlwk/image/upload/v1763944829/Personal_website/image3-CXl6wsUo_aqlyuo.jpg',
  'https://res.cloudinary.com/donpcwlwk/image/upload/v1763944829/Personal_website/image2-FrNh5O3x_bai3ku.jpg',
  'https://res.cloudinary.com/donpcwlwk/image/upload/v1763944835/Personal_website/IMG_2447_h0crpd.jpg',
]
</script>

<template>
  <LazyStarsBg />

  <UPage class="w-full">
    <!-- ===================== HERO ===================== -->
    <UPageHero
      title="Work in progress"
      description="I am always working on something. Stay tuned for results. Check out a few recent pictures!"
      :ui="{
        container: 'lg:grid py-24 sm:py-32 lg:pb-6 gap-16 sm:gap-y-24 text-center',
        title: 'text-5xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent animate-pulse',
        description: 'opacity-90'
      }"
      headline="2025-2026"
    />

    <!-- ===================== CAROUSEL ===================== -->
    <UPageSection :ui="{ container: 'flex flex-col lg:grid py-24 sm:py-32 lg:py-8 gap-16 sm:gap-y-24 text-center' }">
      <h2 class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Gallery</h2>

      <UCarousel
        autoplay
        loop
        dots
        arrows
        :items="items"
        v-slot="{ item }"
        class="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-xl"
      >
        <div class="w-full h-72 sm:h-96 bg-black/10 flex items-center justify-center rounded-xl overflow-hidden">
          <video
            v-if="item.endsWith('.mp4') || item.endsWith('.webm') || item.endsWith('.mov')"
            controls
            muted
            playsinline
            class="w-full h-full object-cover"
          >
            <source :src="item" type="video/mp4" />
          </video>

          <img
            v-else
            :src="item"
            :alt="'Media'"
            class="object-cover w-full h-full"
          />
        </div>
      </UCarousel>
    </UPageSection>

    <!-- ===================== PROJECT DESCRIPTION ===================== -->
    <UPageSection :ui="{ container: 'flex flex-col lg:grid py-24 sm:py-32 lg:py-6 gap-16 sm:gap-y-24' }">
      <h2 class="text-3xl font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent text-center">Project Overview</h2>
      <UCard class="backdrop-blur-md bg-white/5 border-white/10 shadow-lg">
        <p class="mb-4 leading-relaxed opacity-90">
          [REDACTED]
        </p>
      </UCard>
    </UPageSection>

    <!-- ===================== CONTRIBUTIONS ===================== -->
    <!--<UPageSection :ui="{ container: 'flex flex-col lg:grid py-24 sm:py-32 lg:py-6 gap-16 sm:gap-y-24' }">
      <h2 class="text-3xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-500 bg-clip-text text-transparent text-center">My Contributions</h2>

      <UCard class="backdrop-blur-md bg-white/5 border-white/10 shadow-lg">
        <h3 class="text-2xl font-semibold mb-3">Mechanical Engineering</h3>
        <ul class="list-disc pl-6 space-y-2 opacity-90">
          <li>Designed, modeled, stress-tested and iterated the differential swerve modules</li>
          <li>Conducted endurance tests: 1500+ lift cycles, 3km travel, 10+ hours runtime</li>
          <li>Manufactured six major chassis revisions for weight reduction and rigidity</li>
          <li>Developed 3D-printed internal gear systems with minimal wear</li>
        </ul>
      </UCard>

      <UCard class="backdrop-blur-md bg-white/5 border-white/10 shadow-lg">
        <h3 class="text-2xl font-semibold mb-3">Software & Firmware</h3>
        <ul class="list-disc pl-6 space-y-2 opacity-90">
          <li>Implemented complete differential swerve kinematics from scratch</li>
          <li>Optimized control algorithms for extreme response speed</li>
          <li>Tuned low-level PID controllers for each motor and axis</li>
          <li>Created autonomous pathing for competition use</li>
          <li>Built a custom ML detection model and quantized it for the REV Control Hub</li>
        </ul>
      </UCard>
    </UPageSection> -->
  </UPage>
</template>