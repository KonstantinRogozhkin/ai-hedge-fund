import { FC } from 'react'

export const Team: FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Expert Team
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Meet the professionals behind our AI-driven investment strategies
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <div className="h-full w-full bg-gray-200 dark:bg-gray-800" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Dr. Sarah Chen</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Chief AI Scientist</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Ph.D. in Machine Learning from Stanford
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <div className="h-full w-full bg-gray-200 dark:bg-gray-800" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Michael Rodriguez</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Head of Quantitative Trading</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                15+ years of algorithmic trading experience
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <div className="h-full w-full bg-gray-200 dark:bg-gray-800" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Emma Thompson</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Risk Management Director</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Former VP at Goldman Sachs
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <div className="h-full w-full bg-gray-200 dark:bg-gray-800" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Dr. James Wilson</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Research Director</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Expert in Deep Learning & Financial Markets
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <div className="h-full w-full bg-gray-200 dark:bg-gray-800" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">Lisa Chang</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Head of Operations</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                20+ years in Financial Operations
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <div className="h-full w-full bg-gray-200 dark:bg-gray-800" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold">David Kumar</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Technology Director</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Expert in High-Frequency Trading Systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
