<script setup lang="ts">
// Meshtastic Router Project Page — no external files used

useSeoMeta({
  title: 'Meshtastic Router Node',
  description: 'Solar-powered Meshtastic router with MQTT integration and live mesh visualization.'
})

const stats = [
  { label: 'Platform', value: 'LilyGo T-Beam' },
  { label: 'Power', value: 'Solar' },
  { label: 'Role', value: 'Router/Client Node' },
  { label: 'Connectivity', value: 'MQTT Enabled' }
]

const features = [
  'Dedicated Meshtastic router role for reliable packet forwarding',
  'MQTT integration with position broadcasting for real-time data streaming',
  'Long-range LoRa communication with minimal power consumption',
  'Autonomous, solar-powered operation. Designed for off-grid and remote deployments',
  'Humidity, temperature, and pressure sensors for telemetry packets',
  'Installed on the campus of Eindhoven University of Technology to expand local coverage and support portable node testing'
]

// Gallery temporarily hidden until more photos are available
// const items = [
//   'https://res.cloudinary.com/donpcwlwk/image/upload/v1763944829/Personal_website/image3-CXl6wsUo_aqlyuo.jpg',
//   'https://res.cloudinary.com/donpcwlwk/image/upload/v1763944829/Personal_website/image2-FrNh5O3x_bai3ku.jpg',
//   'https://res.cloudinary.com/donpcwlwk/image/upload/v1763944835/Personal_website/IMG_2447_h0crpd.jpg',
// ]
</script>

<template>
  <LazyStarsBg />

  <UPage class="w-full">
    <!-- ===================== HERO ===================== -->
    <UPageHero
      title="Meshtastic Router Node"
      description="A solar-powered, fully autonomous LoRa router with MQTT integration, built to strengthen off-grid communication and improve real-time visibility across the mesh."
      headline="March 2026"
      :ui="{
        root: 'relative overflow-hidden',
        container: 'lg:grid py-24 sm:py-32 lg:pb-12 gap-16 sm:gap-y-24 text-center',
        headline: 'inline-flex mx-auto rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm backdrop-blur',
        title: 'text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-primary to-purple-400 bg-clip-text text-transparent',
        description: 'max-w-3xl mx-auto text-base sm:text-lg opacity-90'
      }"
    >
      <template #links>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://meshtastic.liamcottle.net/?node_id=1129778716"
            target="_blank"
            class="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition"
          >
            View Live Mesh Map
          </a>

          <span class="text-sm opacity-70">
            MQTT-connected • Solar-powered • Off-grid ready
          </span>
        </div>
      </template>
    </UPageHero>

    <!-- ===================== QUICK STATS ===================== -->
    <UPageSection :ui="{  container: 'flex flex-col lg:grid py-24 sm:py-32 lg:py-6 gap-16 sm:gap-y-24' }">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <UCard
          v-for="stat in stats"
          :key="stat.label"
          class="backdrop-blur-xl bg-white/5 border-white/10 shadow-lg rounded-2xl text-center"
        >
          <p class="text-sm uppercase tracking-wider opacity-60 mb-2">{{ stat.label }}</p>
          <p class="text-lg sm:text-xl font-semibold">{{ stat.value }}</p>
        </UCard>
      </div>
    </UPageSection>

    <!-- ===================== GALLERY NOTICE ===================== -->
    <UPageSection :ui="{  container: 'flex flex-col lg:grid py-24 sm:py-32 lg:py-6 gap-16 sm:gap-y-24'  }">
      <UAlert
        title="Gallery coming soon"
        description="Build photos will be added soon as the project documentation is expanded and operation range has been verified."
        variant="soft"
        class="max-w-3xl mx-auto"
      />
    </UPageSection>

    <!-- ===================== CAROUSEL ===================== -->
    <!--
    <UPageSection :ui="{ container: 'flex flex-col lg:grid py-24 sm:py-32 lg:py-8 gap-16 sm:gap-y-24 text-center' }">
      <h2 class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Build Gallery
      </h2>

      <UCarousel
        autoplay
        loop
        dots
        arrows
        :items="items"
        v-slot="{ item }"
        class="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
      >
        <div class="w-full h-72 sm:h-96 bg-black/10 flex items-center justify-center rounded-2xl overflow-hidden">
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
            :alt="'Meshtastic Router Build Media'"
            class="object-cover w-full h-full"
          />
        </div>
      </UCarousel>
    </UPageSection>
    -->

    <!-- ===================== PROJECT OVERVIEW ===================== -->
    <UPageSection :ui="{ container: 'flex flex-col lg:grid py-24 sm:py-32 lg:py-6 gap-16 sm:gap-y-24' }">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent text-center mb-8">
          Project Overview
        </h2>

        <UCard class="backdrop-blur-xl bg-white/5 border-white/10 shadow-xl rounded-3xl">
          <div class="space-y-5 text-base leading-8 opacity-90">
            <p>
              In an increasingly Wi-Fi-dependent world, resilient long-range radio networks are still often overlooked. For quite a while until now I have been fascinated by the idea of offgrid communication. A small entry level project with Meshtastic radios would be the perfect opportunity to get hands-on experience in this field.
              This project focuses on a fully autonomous Meshtastic router node designed to operate off-grid and strengthen decentralized communication infrastructure.
            </p>

            <p>
              The system is built around a LilyGo T-Beam Supreme and configured as a dedicated LoRa router, continuously relaying traffic across the mesh.
              By running entirely on a 12V bettery continuesly charged by a solar panel, the node can remain deployed without sun for upto 5 days and more than a week on power-saving mode.
            </p>

            <p>
              To improve visibility and accessibility, the router is also connected to MQTT, enabling telemetry and position data to be forwarded to internet-based tools.
              This creates a practical bridge between low-power radio networking and live web-based monitoring.
            </p>
          </div>
        </UCard>
      </div>
    </UPageSection>

    <!-- ===================== FEATURES ===================== -->
    <UPageSection :ui="{  container: 'flex flex-col lg:grid py-24 sm:py-32 lg:py-6 gap-16 sm:gap-y-24' }">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-500 bg-clip-text text-transparent text-center mb-8">
          Key Features
        </h2>

        <div class="grid md:grid-cols-2 gap-4">
          <UCard
            v-for="feature in features"
            :key="feature"
            class="backdrop-blur-xl bg-white/5 border-white/10 shadow-lg rounded-2xl"
          >
            <div class="flex items-start gap-3">
              <div class="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shrink-0" />
              <p class="opacity-90 leading-7">{{ feature }}</p>
            </div>
          </UCard>
        </div>
      </div>
    </UPageSection>

    <!-- ===================== MESH MAP ===================== -->
    <UPageSection :ui="{  container: 'flex flex-col lg:grid py-24 sm:py-32 lg:py-6 gap-16 sm:gap-y-24'  }">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8">
          Live Mesh Map
        </h2>

        <UCard class="backdrop-blur-xl bg-white/5 border-white/10 shadow-xl rounded-3xl">
          <p class="mb-6 text-base leading-7 opacity-90 max-w-2xl mx-auto">
            This node publishes telemetry and position data through MQTT, making it visible on a public mesh map in real time.
            The live map provides a simple way to monitor presence, placement, and coverage within the wider network.
          </p>

          <a
            href="https://meshtastic.liamcottle.net/?node_id=1129778716"
            target="_blank"
            class="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition"
          >
            Open Mesh Map (wait upto 20 seconds to load)
          </a>
        </UCard>
      </div>
    </UPageSection>
  </UPage>
</template>