import Footer from "@/components/Footer/Footer"
import { Header } from "@/components/Header/Header"
import { PlanTitle } from "@/components/HomePage/plan/PlanTitle"
import PlanBanner from "@/components/PlanBanner/PlanBanner"
import { SubscriptionPlan } from "@/components/Subscription/SubscriptionPlan"

export const SubscriptionPage = () => {
  return (
    <>
      <div className="container">
        <header>
          <Header />
        </header>
        <main className="pr-10 mt-32">
          <PlanTitle />
        </main>
        <section className="my-10">
          <SubscriptionPlan />
        </section>
        <section className="py-10">
          <PlanBanner />
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  )
}