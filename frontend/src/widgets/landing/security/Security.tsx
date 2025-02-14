import { FC } from 'react'

export const Security: FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Enterprise-Grade Security
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Your investments are protected by state-of-the-art security measures
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
          <div className="flex flex-col space-y-8">
            <div className="flex items-start gap-4">
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Advanced Encryption</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Military-grade encryption for all data and transactions
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Multi-Factor Authentication</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Secure access with multiple layers of authentication
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
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
              <div className="space-y-2">
                <h3 className="text-xl font-bold">24/7 Monitoring</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Continuous security monitoring and threat detection
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-8">
            <div className="flex items-start gap-4">
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
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Secure Infrastructure</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Enterprise-grade hosting and network security
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
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
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Secure Communications</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  End-to-end encryption for all communications
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Access Control</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Granular permissions and role-based access control
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
