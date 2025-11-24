<script setup lang="ts">
// Hard-coded Swerve Project Page — no external files used

useSeoMeta({
  title: 'Noita I — Project',
  description: 'Can I build my own High Power rocket? Let`s find out!'
})

const items = [
  'https://res.cloudinary.com/donpcwlwk/image/upload/v1763832225/Personal_website/20250614_211834_ykniq8.jpg',
  'https://res.cloudinary.com/donpcwlwk/image/upload/v1763832224/Personal_website/Paint_igi9oi.jpg',
  'https://res.cloudinary.com/donpcwlwk/image/upload/v1763942599/Personal_website/OpenRocketDemo_bpvtzc.jpg',
  'https://res.cloudinary.com/donpcwlwk/image/upload/v1763832232/Personal_website/IMG_4130-nobin_dqkxdm.jpg',
  'https://res.cloudinary.com/donpcwlwk/image/upload/v1763832231/Personal_website/IMG_1662_ewpf1k.jpg',
  'https://res.cloudinary.com/donpcwlwk/image/upload/v1763832226/Personal_website/Finished_qplcdb.jpg',
  'https://res.cloudinary.com/donpcwlwk/image/upload/v1763832231/Personal_website/Airframe_pufk2x.jpg',
  'https://res.cloudinary.com/donpcwlwk/image/upload/v1763941802/Personal_website/Me_fw2mux.png'
]
</script>

<template>
  <LazyStarsBg />

  <UPage class="w-full">
    <!-- ===================== HERO ===================== -->
    <UPageHero
      title="Noita I"
      description="Can I design and manufacture a high power rocket in my kitchen? Let's find out!"
      :ui="{
        container: 'lg:grid py-24 sm:py-32 lg:pb-6 gap-16 sm:gap-y-24 text-center',
        title: 'text-5xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent animate-pulse',
        description: 'opacity-90'
      }"
      headline="2025-2026"
    />

    <!-- ===================== CAROUSEL ===================== -->
    <UPageSection :ui="{ container: 'flex flex-col lg:grid py-24 sm:py-32 lg:py-8 gap-16 sm:gap-y-12 text-center' }">
      <h2 class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Gallery</h2>

      Scroll left/right
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
            :alt="'media'"
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
          In 2024 I had an opportunity to meet an employee at NanoAvionics. At that moment I got pulled in to a deep rabbit hole called High Power Rocketry(HPR).
        </p>
        <p class="mb-4 leading-relaxed opacity-90">
          As a side project (I was leading an FTC team during this time), I challenged myself to develop a rocket in 3 months completely from scratch, that would reach an apogee of 1000 meters with a Cesaroni class G motor.
        </p>
        <p class="mb-4 leading-relaxed opacity-90">
            First, I did lots of research about other open-source designs, for me this was the best way to learn new concepts, tips and tricks, learn from other's mistakes. After simulating my rocket using OpenRocket I quickly designed it using SolidWorks and bought the required materials from a local construction depot.
        </p>
        <p class="mb-4 leading-relaxed opacity-90">
            The next two months I spent manufacturing the rocket. Laminating my own airframe (Reinforced a cardboard tube with fiberglass cloth and laminating epoxy resin), 3D printed a modular nosecone. I tried strenghtening the nosecone wth fiberglass but the tip proved to be too challenging without some more advanced and expensive tools. I cut the fins out of 4mm plywood and epoxied them to the motor mount as well as the airframe. I used the same laminating technique to increase the rigidity of fins nearly 300%.
        </p>
        <p class="mb-4 leading-relaxed opacity-90">
            Lastly, I installed the recovery system. I used a drogue chute + main parachute design to slow down the fall of the rocket using the drogue and gently touchdown with the main chute. This was because I couldn't let the rocket to be carried too much away from the launch site by wind. In the first launch I planned to use a dummy avionics module, in case of rapid unscheduled dissasembly :) but had everything ready to go, reused from my CanSat project just with a more capable radio module. Finally, I invided my girlfriend, Akvilė, to help paint the rocket and apply clear-coat.
        </p>
        <ul class="mb-4 list-disc pl-6 space-y-2 opacity-90">
          <li>G class motor ready. Easily adaptable for an I class motor</li>
          <li>3 months of development</li>
          <li>Cool decal</li>
          <li>Payload, recovery system</li>
          <li>Custom ground station software</li>
        </ul>

        <p class="mt-4 leading-relaxed opacity-90">Due to some annoying shipping regulations I was not able to acquire the required motor to fly this rocket in 2025. I am hoping to launch it in the summer of 2026.</p>
      </UCard>
      <img
        src="https://res.cloudinary.com/donpcwlwk/image/upload/v1763944669/Personal_website/Noita_ufrtyt.png"
        :alt="'media'"
        class="object-cover w-full h-full"
        />
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