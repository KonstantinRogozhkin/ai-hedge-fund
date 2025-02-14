import { FC } from 'react'

export const Performance: FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Exceptional Performance
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Our AI-driven hedge fund delivers consistent returns through advanced algorithmic trading strategies
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Superior Returns</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our AI algorithms consistently outperform traditional trading strategies
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Risk Management</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Advanced risk assessment and mitigation techniques protect your investments
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Real-time Analytics</h3>
              <p className="text-gray-500 dark:text-gray-400">
                24/7 monitoring and analysis of market conditions
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Transparent Reporting</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Detailed performance metrics and portfolio analytics at your fingertips
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
