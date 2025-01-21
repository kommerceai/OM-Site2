import { motion } from 'framer-motion'

interface Stat {
  value: string
  label: string
}

interface StatsProps {
  stats: Stat[]
}

export function Stats({ stats }: StatsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col items-center justify-center p-4 text-center"
        >
          <span className="text-3xl font-bold text-[#0070FF]">{stat.value}</span>
          <span className="text-sm text-muted-foreground">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  )
}

