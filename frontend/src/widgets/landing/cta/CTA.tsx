import { Container } from '../../../shared/ui/components/Container'
import { Button } from '../../../shared/ui/components/Button'

export const CTA = () => {
  return (
    <section className="py-20 bg-blue-600">
      <Container>
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Готовы начать?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к нам и откройте новые возможности в мире инвестиций с использованием искусственного интеллекта
          </p>
          <div className="space-x-4">
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              Узнать больше
            </Button>
            <Button variant="primary" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Начать сейчас
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
