<script setup lang="ts">
// Hard-coded Swerve Project Page — no external files used

useSeoMeta({
  title: 'First Global Challenge — Project',
  description: 'Where my passion for competition robotics began...'
})

const items_first = [
  'https://res.cloudinary.com/donpcwlwk/image/upload/v1763900881/Personal_website/mosaic1-BVFIJqv8_oy6oig.jpg',
  'https://res.cloudinary.com/donpcwlwk/image/upload/v1763900881/Personal_website/mosaic3-DGNjdhD0_thrpcm.jpg',
  'https://res.cloudinary.com/donpcwlwk/image/upload/v1763900881/Personal_website/mosaic2-RwDQbe4R_c4kolj.jpg',
  'https://res.cloudinary.com/donpcwlwk/image/upload/v1763900881/Personal_website/mosaic4-B5H1sgoS_mk58ff.jpg',
]

const items_second = [
    'https://res.cloudinary.com/donpcwlwk/image/upload/v1763900885/Personal_website/main2-T2_pvXuo_y4lqwo.jpg',
    'https://res.cloudinary.com/donpcwlwk/image/upload/v1763900884/Personal_website/mosaic5-CtIY9JXc_ezaibe.jpg',
    'https://res.cloudinary.com/donpcwlwk/image/upload/v1763900882/Personal_website/mosaic6-C4h4QjbP_ifhjg2.jpg',
    'https://res.cloudinary.com/donpcwlwk/image/upload/v1763900882/Personal_website/horizontal-DUpDsxdD_q2jenz.jpg',
    'https://res.cloudinary.com/donpcwlwk/video/upload/v1763900893/Personal_website/robotInAction-CkcJlu5n_vcitzy.mp4'
]
</script>

<template>
  <LazyStarsBg />

  <UPage class="w-full">
    <!-- ===================== HERO ===================== -->
    <UPageHero
      title="First Global Challenge"
      description="My passion for competitive robotics and FIRST began in 2022."
      :ui="{
        container: 'lg:grid py-24 sm:py-32 lg:pb-6 gap-16 sm:gap-y-24 text-center',
        title: 'text-5xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent animate-pulse',
        description: 'opacity-90'
      }"
      headline="2022, 2024"
    />

    <!-- ===================== CAROUSEL ===================== -->
    <UPageSection :ui="{ container: 'flex flex-col lg:grid py-24 sm:py-32 lg:py-8 gap-16 sm:gap-y-24 text-center' }">
      <h2 class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Gallery 2022 - Geneva Challenge</h2>
      <UCarousel
        autoplay
        loop
        dots
        arrows
        :items="items_first"
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

    <UPageSection :ui="{ container: 'flex flex-col lg:grid py-24 sm:py-32 lg:py-8 gap-16 sm:gap-y-24 text-center' }">
      <h2 class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Kit Capture 2022</h2>
      Each year, every team has to film themselves receiving the robot kit(Yes, in FGC teams build robots from a kit to give equal chances for developing nations as well). We wanted to approach this task more
      creatively, therefore, me and Matas directed the Kit Capture video you can see below. It's nothing special, but it received the highest ranking out of all 180 countries. In 2024 we applied lessons learned
      from this side-project in filming a new promotional video. Editing by Matas Čiuželis. Shots by me. Script by me. Directed by me and Matas.

        <div class="w-full h-72 sm:h-96 bg-black/10 flex items-center justify-center rounded-xl overflow-hidden">
          <video
            controls
            muted
            playsinline
            class="w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/donpcwlwk/video/upload/v1763900899/Personal_website/2022_KitCapture-Cwk4mUqR_hblw4x.mp4" type="video/mp4" />
          </video>
        </div>
    </UPageSection>

    <!-- ===================== PROJECT DESCRIPTION ===================== -->
    <UPageSection :ui="{ container: 'flex flex-col lg:grid py-24 sm:py-32 lg:py-6 gap-16 sm:gap-y-24' }">
      <h2 class="text-3xl font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent text-center">Project Overview - 2022- Carbon Capture Game</h2>
      <UCard class="backdrop-blur-md bg-white/5 border-white/10 shadow-lg">
        <p class="mb-4 leading-relaxed opacity-90">
          This was my first ever competition robot. Together with Matas we spent an entire summer figuring out how things work and how to extract EVERYTHING we could from such a short amount of time.
          The robot featured an X-drive for increased agility and easier control. The goal was to carry as many game elements as possible, therefore we opted for a large capacity tank inside the robot frame.
        </p>
        <p class="mb-4 leading-relaxed opacity-90">
          Our robot had to be able to climb to a height of 2.5 meters. Since the game element storage took so much space we had almost no room to incorporate a lift mechanism. After 6 redesigns and many failed attempts we came up with a solution to have hooks on
          one side of the robot and a pulling mechanism on the other side. Making an intricate pulley system was annoying, but ultimately the design was reliable and achieved the task well.
        </p>
        <ul class="mb-4 list-disc pl-6 space-y-2 opacity-90">
          <li>X-Drive chassis</li>
          <li>Largest storage tank out of all 180 teams</li>
          <li>Rugged design(in case the robot were to fall)</li>
          <li>Automated control algirithms to help the robot driver with basic tasks</li>
        </ul>

        <p class="mt-4 leading-relaxed opacity-90">The result speaks for itself. We won the entire competition with our alliance. This gave us all unimaginable motivation to work on ever more complicated projects and push new boundaries.</p>
      </UCard>
    </UPageSection>

    <UPageSection title="Two years later..." :ui="{title: 'text-5xl bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent animate-pulse'}"/>

    <UPageSection :ui="{ container: 'flex flex-col lg:grid py-24 sm:py-32 lg:py-8 gap-16 sm:gap-y-24 text-center' }">
      <h2 class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Gallery 2024 - Athens Challenge</h2>
      <UCarousel
        autoplay
        loop
        dots
        arrows
        :items="items_second"
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

    <UPageSection :ui="{ container: 'flex flex-col lg:grid py-24 sm:py-32 lg:py-8 gap-16 sm:gap-y-24 text-center' }">
      <h2 class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Kit Capture 2024</h2>
      Directed by me and Matas. Drone shot by me. Logistics by me. Edited by Matas.

        <div class="w-full h-72 sm:h-96 bg-black/10 flex items-center justify-center rounded-xl overflow-hidden">
          <video
            controls
            muted
            playsinline
            class="w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/donpcwlwk/video/upload/v1763900908/Personal_website/2024_KitCapture-CKaOvskG_yt6biv.mp4" type="video/mp4" />
          </video>
        </div>
    </UPageSection>

    <!-- ===================== PROJECT DESCRIPTION ===================== -->
    <UPageSection :ui="{ container: 'flex flex-col lg:grid py-24 sm:py-32 lg:py-6 gap-16 sm:gap-y-24' }">
      <h2 class="text-3xl font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent text-center">Project Overview - 2024- Feeding The Future Game</h2>
      <UCard class="backdrop-blur-md bg-white/5 border-white/10 shadow-lg">
        <p class="mb-4 leading-relaxed opacity-90">
          After winning the First Global challenge in 2022, a new team for the 2024 edition was created. The goal of the new challenge was to pick up large balls from reservoirs and bring them to specialized bins. Each bin is on a different altitude, therefore a complicated
          lift system was required. In the end, we could carry 4 balls.
        </p>
        <p class="mb-4 leading-relaxed opacity-90">
          This time, we aimed for speed and chose a tank drive chassis. In order to adapt to a new drivetrain additional driver practice was required. It all payed off, because we could score points almost 2 times faster.
        </p>
        <ul class="mb-4 list-disc pl-6 space-y-2 opacity-90">
          <li>Tank drivetrain</li>
          <li>Can carry 4 game elements</li>
          <li>Intricate automation algorithms for QOL</li>
        </ul>

        <p class="mt-4 leading-relaxed opacity-90">A lot of factors led us to finish 25th out of 192 countries. We are proud of this result, because at this time all team members were also actively participating in First Tech Challenge competitions. This was the final FGC competition for all of us and we went out leaving a strong foundation for future Lithuanian teams.
             In 2025, the Lithuanian national team secured 2nd place in Panama.</p>
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