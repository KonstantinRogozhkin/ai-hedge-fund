import { FC, useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
}

const FAQItem: FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 dark:border-gray-800">
      <button
        className="flex w-full items-center justify-between py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        <svg
          className={`h-6 w-6 transform text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-500 dark:text-gray-400">{answer}</p>
      </div>
    </div>
  )
}

export const FAQ: FC = () => {
  const faqItems = [
    {
      question: 'How does your AI-driven investment strategy work?',
      answer:
        'Our AI system analyzes vast amounts of market data in real-time, identifying patterns and opportunities using advanced machine learning algorithms. It makes investment decisions based on multiple factors including market trends, economic indicators, and risk parameters.',
    },
    {
      question: 'What is the minimum investment required?',
      answer:
        'Our platform is designed for institutional investors and high-net-worth individuals. The minimum investment threshold ensures we can effectively implement our sophisticated trading strategies while managing risk appropriately.',
    },
    {
      question: 'How do you manage investment risks?',
      answer:
        'We employ a multi-layered risk management approach combining AI-driven analysis with human oversight. This includes diversification strategies, real-time monitoring, and automated risk controls to protect investments against market volatility.',
    },
    {
      question: 'What returns can I expect?',
      answer:
        'While past performance doesn\'t guarantee future results, our AI-driven strategies have consistently outperformed traditional investment approaches. We focus on generating stable, risk-adjusted returns across various market conditions.'
    },
    {
      question: 'How secure is your platform?',
      answer:
        'Security is our top priority. We utilize enterprise-grade encryption, multi-factor authentication, and continuous security monitoring. Our infrastructure is hosted in secure facilities with multiple redundancies.',
    },
    {
      question: 'Can I access my investment performance in real-time?',
      answer:
        'Yes, our platform provides real-time access to your portfolio performance, detailed analytics, and comprehensive reporting through our secure dashboard. You can monitor your investments 24/7.',
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Get answers to common questions about our AI-driven hedge fund
          </p>
        </div>
        <div className="mx-auto max-w-3xl space-y-4 py-12">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
