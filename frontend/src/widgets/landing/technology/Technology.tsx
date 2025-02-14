import { FC } from 'react'

export const Technology: FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Cutting-Edge Technology
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Powered by advanced AI and machine learning algorithms to deliver superior trading performance
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 dark:border-gray-800">
            <div className="p-2 bg-primary/10 rounded-full">
              <svg
                className=" h-6 w-6 text-primary"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M12 2v20M2 12h20" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Machine Learning</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              Advanced algorithms that learn and adapt to market conditions in real-time
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 dark:border-gray-800">
            <div className="p-2 bg-primary/10 rounded-full">
              <svg
                className=" h-6 w-6 text-primary"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Real-time Processing</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              High-frequency data analysis and instant decision making
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border p-4 dark:border-gray-800">
            <div className="p-2 bg-primary/10 rounded-full">
              <svg
                className=" h-6 w-6 text-primary"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M20 7h-9" />
                <path d="M14 17H5" />
                <circle cx="17" cy="17" r="3" />
                <circle cx="7" cy="7" r="3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Neural Networks</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              Deep learning models for pattern recognition and prediction
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
