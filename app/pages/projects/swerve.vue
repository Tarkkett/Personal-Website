<script setup lang="ts">
// Hard-coded Swerve Project Page — no external files used

useSeoMeta({
  title: 'Differential Swerve Drive — Project',
  description: 'Advanced two-year differential swerve drive project with custom mechanics, software, ML vision, and endurance-tested swerve modules.'
})

const items = [
  'https://res.cloudinary.com/donpcwlwk/image/upload/v1763829787/Personal_website/SwerveTeamPicture-B8YqFJDC_krn4ce.jpg',
  'https://res.cloudinary.com/donpcwlwk/image/upload/v1763829771/Personal_website/img4-D3VSVnQt_sdd9ye.jpg',
  'https://res.cloudinary.com/donpcwlwk/image/upload/v1763829771/Personal_website/img3-DvzcUNr2_epjdbx.jpg',
  'https://res.cloudinary.com/donpcwlwk/image/upload/v1763829771/Personal_website/img2-CCKkSCQu_n2sg09.jpg',
  'https://res.cloudinary.com/donpcwlwk/image/upload/v1763829770/Personal_website/img1-BJykjQLP_dezxa0.jpg',
  'https://res.cloudinary.com/donpcwlwk/video/upload/v1763829763/Personal_website/vid2-BMm2sAb4_sfznwt.mp4',
  'https://res.cloudinary.com/donpcwlwk/video/upload/v1763829765/Personal_website/vid0-DZEZSof7_gzqwqm.mp4'
]
</script>

<template>
  <LazyStarsBg />

  <UPage class="w-full">
    <!-- ===================== HERO ===================== -->
    <UPageHero
      title="Differential Swerve Drive"
      description="A fully custom, endurance-tested differential swerve system designed over two seasons — combining precision mechanical engineering, low-level control systems, and custom machine learning vision."
      :ui="{
        container: 'lg:grid py-24 sm:py-32 lg:pb-6 gap-16 sm:gap-y-24 text-center',
        title: 'text-5xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent animate-pulse',
        description: 'opacity-90'
      }"
      headline="2023-2024"
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
            :alt="'Swerve media'"
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
          This differential swerve drive was developed over two years as a flagship engineering and
          research project. The objective was to create a compact, reliable, and high-performance movement
          system capable of omnidirectional motion with extremely fast response times.
        </p>
        <p class="mb-4 leading-relaxed opacity-90">
          The final iteration consists of three fully custom differential swerve modules, a lightweight and
          optimized chassis, and a responsive software stack designed for both tele-op and autonomous
          operation. The system includes custom machine learning vision, advanced optimisation algorithms, and
          precise kinematic modeling.
        </p>
        <ul class="mb-4 list-disc pl-6 space-y-2 opacity-90">
          <li>High torque&speed differential swerve architecture</li>
          <li>Two FTC seasons of iterative development</li>
          <li>Endurance-tested under real load (1500+ cycles, 10+ hours continuous)</li>
          <li>Laser-cut, CNC’d, and 3D-printed hybrid construction</li>
          <li>TensorFlow-lite custom object detection running on-board the Control Hub</li>
        </ul>

        <p class="mt-4 leading-relaxed opacity-90">I also refined multiple load-bearing interfaces to withstand repeated shock loads during high-speed maneuvers. Extensive FEA-driven redesigns reduced component mass while maintaining structural reliability. I introduced modular retention features that accelerated repair times between matches. Finally, I trained countless Tensorflow-lite object detection models to optimize pattern detection time and efficiancy.</p>
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