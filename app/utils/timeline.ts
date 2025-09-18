import type { TimelineItem } from '@nuxt/ui'

export const items = ref<TimelineItem[]>([
  {
    date: '2017 – 2025',
    title: 'Vilnius Jesuit High School',
    description: 'Completed secondary education while actively participating in robotics and sports.',
    icon: 'i-lucide-school'
  },
  {
    date: '2021 – 2023',
    title: 'Member – Robotics Team “Lituanica X”',
    description: 'Represented Lithuania in international robotics competitions, including the First Global Challenge and First Tech Challenge.',
    icon: 'i-lucide-cpu'
  },
  {
    date: 'Oct 2022',
    title: 'Winner – Robotics World Olympics (First Global Challenge)',
    description: 'Secured 1st place in Geneva with Team Lithuania.',
    icon: 'i-lucide-trophy'
  },
  {
    date: 'Mar 2023',
    title: 'Finalist – FTC Netherlands',
    description: 'Competed in the First Tech Challenge robotics competition in the Netherlands.',
    icon: 'i-lucide-award'
  },
  {
    date: '2023 – 2024',
    title: 'Team Leader – CanSat Lithuania',
    description: 'Led development of satellite simulation projects organized by the European Space Agency.',
    icon: 'i-lucide-satellite'
  },
  {
    date: '2023 – 2025',
    title: 'IT School Courses',
    description: 'Completed courses in web development, graphic design, game development (C#), and system administration.',
    icon: 'i-lucide-code'
  },
  {
    date: 'Sep 2024 – Jun 2025',
    title: 'Lead – Team 25584 (FTC)',
    description: 'Directed hardware and software design decisions for the robotics team.',
    icon: 'i-lucide-rocket'
  },
  {
    date: 'Sep 2024',
    title: 'Robotics World Olympics – Athens',
    description: 'Represented Team Lithuania in the First Global Challenge. Secured 25th place.',
    icon: 'i-lucide-globe'
  },
  {
    date: 'Aug 2025 – present',
    title: 'Member – Lithuanian National Cybersecurity Team',
    description: 'Competing in the European Cybersecurity Challenge 2025.',
    icon: 'i-lucide-shield'
  },
  {
    date: 'Sep 2025 – present',
    title: 'Electrical Engineering Student – TU Eindhoven',
    description: 'Began undergraduate studies in Electrical Engineering.',
    icon: 'i-lucide-graduation-cap'
  }
])
