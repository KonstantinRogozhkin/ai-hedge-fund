import { Hero } from '@landing-widgets/hero/Hero'
import { Features } from '@landing-widgets/features/Features'
import { Agents } from '@landing-widgets/agents/Agents'
import { Architecture } from '@landing-widgets/architecture/Architecture'
import { DecisionFlow } from '@landing-widgets/decision-flow/DecisionFlow'
import { Data } from '@landing-widgets/data/Data'

export const LandingPage = () => (
  <main className="flex flex-col min-h-screen">
    <Hero />
    <Agents />
    <Data />
    <Features />
    <Architecture />
    <DecisionFlow />
    {/* <Performance /> */}

    {/* <Workflow /> */}
    {/* <Technology />
    <Security />

    <FAQ />
    <CTA /> */}
  </main>
)
