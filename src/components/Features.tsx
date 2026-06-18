import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

interface FeatureCard {
  type: 'video' | 'info'
  number?: string
  title?: string
  videoUrl?: string
  iconUrl?: string
  items?: string[]
}

const cards: FeatureCard[] = [
  {
    type: 'video',
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4',
  },
  {
    type: 'info',
    number: '01',
    title: 'Project Storyboard.',
    iconUrl:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    items: [
      'Visualize your entire project arc',
      'Organize scenes, shots, and chapters',
      'Sync timelines with collaborators',
      'Export to industry formats instantly',
    ],
  },
  {
    type: 'info',
    number: '02',
    title: 'Smart Critiques.',
    iconUrl:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    items: [
      'AI-powered composition analysis',
      'Personalized creative notes',
      'Seamless tool integrations',
    ],
  },
  {
    type: 'info',
    number: '03',
    title: 'Immersion Capsule.',
    iconUrl:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    items: [
      'Silence all notifications on demand',
      'Curated ambient soundscapes',
      'Sync with your creative schedule',
    ],
  },
]

function VideoCard({ card, index }: { card: FeatureCard; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl overflow-hidden lg:h-[480px] min-h-[280px]"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <video
        src={card.videoUrl}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-sm font-medium" style={{ color: '#E1E0CC' }}>
          Your creative canvas.
        </p>
      </div>
    </motion.div>
  )
}

function InfoCard({ card, index }: { card: FeatureCard; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className="bg-[#212121] rounded-2xl p-6 flex flex-col gap-4 lg:h-[480px]"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Icon */}
      <img
        src={card.iconUrl}
        alt=""
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
      />

      {/* Number + Title */}
      <div>
        <span className="text-[10px] text-gray-500 block mb-1">{card.number}</span>
        <h3 className="text-primary text-base sm:text-lg font-medium">{card.title}</h3>
      </div>

      {/* Items */}
      <ul className="flex flex-col gap-2 flex-1">
        {card.items?.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span className="text-gray-400 text-xs sm:text-sm">{item}</span>
          </li>
        ))}
      </ul>

      {/* Learn more */}
      <button className="flex items-center gap-1 text-primary/70 hover:text-primary text-xs sm:text-sm transition-colors duration-200 group">
        <span>Learn more</span>
        <ArrowRight
          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
          style={{ transform: 'rotate(-45deg)' }}
        />
      </button>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section className="min-h-screen bg-black relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8">
      {/* Noise bg */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal">
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Studio-grade workflows for visionary creators.',
                  className: 'text-primary',
                },
              ]}
              containerClassName="block mb-1"
            />
            <WordsPullUpMultiStyle
              segments={[
                {
                  text: 'Built for pure vision. Powered by art.',
                  className: 'text-gray-500',
                },
              ]}
              containerClassName="block"
              baseDelay={0.3}
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1">
          {cards.map((card, i) =>
            card.type === 'video' ? (
              <VideoCard key={i} card={card} index={i} />
            ) : (
              <InfoCard key={i} card={card} index={i} />
            )
          )}
        </div>
      </div>
    </section>
  )
}
