import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, GraduationCap, Users, Star, Sparkles, Quote, Library, Trophy, Rocket } from 'lucide-react'
import GlassCard from './components/GlassCard'

const gradientBg =
  'bg-[radial-gradient(1200px_600px_at_-10%_-10%,rgba(168,85,247,0.25),transparent_60%),radial-gradient(1000px_500px_at_110%_10%,rgba(59,130,246,0.25),transparent_60%),linear-gradient(180deg,#faf5ff,white)']

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="relative py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {(title || subtitle) && (
        <div className="mb-10 md:mb-14 text-center">
          {subtitle && (
            <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 text-sm font-medium text-purple-700/80 bg-purple-100/60 rounded-full px-3 py-1">
              <Sparkles className="h-4 w-4" />
              {subtitle}
            </motion.p>
          )}
          {title && (
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="text-3xl md:text-4xl font-extrabold tracking-tight text-purple-900">
              {title}
            </motion.h2>
          )}
        </div>
      )}
      {children}
    </div>
  </section>
)

function CTAButton({ children, variant = 'primary' }) {
  const styles = useMemo(() => {
    if (variant === 'secondary')
      return 'bg-white/30 hover:bg-white/40 text-purple-900 border border-white/40'
    return 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg shadow-purple-500/20'
  }, [variant])
  return (
    <motion.button whileTap={{ scale: 0.98 }} whileHover={{ y: -2 }} className={`px-5 py-3 rounded-xl font-semibold transition-colors ${styles}`}>
      {children}
    </motion.button>
  )
}

export default function App() {
  return (
    <div className={`min-h-screen ${gradientBg} relative overflow-hidden`}>      
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-purple-400/30 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-indigo-400/20 blur-[90px]" />
      </div>

      <header className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xl font-extrabold text-purple-900">EduFIRZ</p>
              <p className="text-xs text-purple-900/70 -mt-1">Learn with joy</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="text-purple-900/80 hover:text-purple-900 font-medium">About</a>
            <a href="#" className="text-purple-900/80 hover:text-purple-900 font-medium">Contact</a>
            <a href="#" className="text-purple-900/80 hover:text-purple-900 font-medium">Sign In</a>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="pt-12 md:pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold tracking-tight text-purple-900">
                Connecting Students and Teachers for joyful learning
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-5 text-lg md:text-xl text-purple-900/80 max-w-2xl">
                An LMS powered by Lovable and Supabase to make learning easier, interactive, and accessible anytime, anywhere.
              </motion.p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton>
                  <span className="inline-flex items-center gap-2">Join as Student <ArrowRight className="h-4 w-4" /></span>
                </CTAButton>
                <CTAButton variant="secondary">
                  <span className="inline-flex items-center gap-2">Join as Teacher <Users className="h-4 w-4" /></span>
                </CTAButton>
              </div>
              <div className="mt-8 flex items-center gap-6 text-purple-900/70">
                <div className="flex items-center gap-2"><Star className="h-5 w-5 text-yellow-500" /><span>Trusted by schools</span></div>
                <div className="flex items-center gap-2"><Rocket className="h-5 w-5 text-indigo-600" /><span>Fast & accessible</span></div>
              </div>
            </div>
            <div className="relative">
              <GlassCard className="p-0 overflow-hidden">
                <div className="h-72 md:h-96 bg-gradient-to-br from-purple-500/30 via-white/30 to-indigo-500/30" />
              </GlassCard>
              <div className="absolute -bottom-6 -left-6 right-20">
                <GlassCard className="">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-purple-600/80 text-white flex items-center justify-center"><BookOpen className="h-5 w-5" /></div>
                    <p className="font-semibold text-purple-900">Interactive Lessons</p>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        <Section id="courses" title="Featured Courses" subtitle="Learn by doing with curated tracks">
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              title: 'Math Mastery', desc: 'Step-by-step problem solving and practice.', icon: <Library className="h-6 w-6" />
            },{
              title: 'Science Lab', desc: 'Experiments, simulations, and discovery.', icon: <Rocket className="h-6 w-6" />
            },{
              title: 'Creative Writing', desc: 'Stories, essays, and expressive skills.', icon: <Sparkles className="h-6 w-6" />
            }].map((c, i) => (
              <GlassCard key={c.title} delay={i * 0.05}>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-purple-900">{c.title}</p>
                    <p className="text-purple-900/70 mt-1">{c.desc}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Section>

        <Section id="teacher-resources" title="Teacher Resources" subtitle="Save time with ready-to-use tools">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Classroom manager', points: ['Attendance & grading', 'Assignments & rubrics', 'Progress insights'] },
              { title: 'Content builder', points: ['Rich editor & media', 'Quizzes & polls', 'Reusable templates'] },
              { title: 'Collaboration', points: ['Team teaching', 'Shareable modules', 'Parent updates'] },
            ].map((item, i) => (
              <GlassCard key={item.title} delay={i * 0.05}>
                <p className="text-lg font-semibold text-purple-900">{item.title}</p>
                <ul className="mt-3 space-y-2 text-purple-900/80 list-disc list-inside">
                  {item.points.map(p => <li key={p}>{p}</li>)}
                </ul>
              </GlassCard>
            ))}
          </div>
        </Section>

        <Section id="achievements" title="Student Achievements" subtitle="Celebrate milestones and growth">
          <div className="grid md:grid-cols-3 gap-6">
            {[{ title: '5,000+', desc: 'Active learners thriving' }, { title: '1,200+', desc: 'Assignments completed weekly' }, { title: '98%', desc: 'Feel more confident learning' }].map((s, i) => (
              <GlassCard key={s.title} delay={i * 0.05}>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-white/40 border border-white/50 flex items-center justify-center">
                    <Trophy className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold text-purple-900">{s.title}</p>
                    <p className="text-purple-900/70">{s.desc}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Section>

        <Section id="testimonials" title="Voices from our community" subtitle="What students and teachers say">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: 'This platform transformed our classroom. Lessons feel alive and my students are more engaged than ever.',
                author: 'Ms. Rivera', role: 'Middle School Teacher'
              },
              {
                quote: 'I love the interactive modules. I can learn anytime and get instant feedback, which keeps me motivated!',
                author: 'Aiden', role: 'High School Student'
              },
              {
                quote: 'Setting up courses is a breeze and collaborating with other teachers helps me share what works best.',
                author: 'Mr. Chen', role: 'Science Teacher'
              },
            ].map((t, i) => (
              <GlassCard key={t.author} delay={i * 0.05}>
                <Quote className="h-6 w-6 text-purple-600" />
                <p className="mt-3 text-purple-900/90">“{t.quote}”</p>
                <p className="mt-4 font-semibold text-purple-900">{t.author}</p>
                <p className="text-sm text-purple-900/70">{t.role}</p>
              </GlassCard>
            ))}
          </div>
        </Section>
      </main>

      <footer className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/30">
            <p className="text-purple-900/80">Made for joyful, collaborative learning. Built with Lovable + Supabase.</p>
            <div className="flex items-center gap-5 text-purple-900/80">
              <a className="hover:text-purple-900" href="#">About</a>
              <a className="hover:text-purple-900" href="#">Contact</a>
              <a className="hover:text-purple-900" href="#">Sign In</a>
            </div>
          </GlassCard>
        </div>
      </footer>
    </div>
  )
}
