import Banner from "@/components/landing-page/banner";
import { Features } from "@/components/landing-page/features";
import GetStarted from "@/components/landing-page/getStarted";
import { WhyUs } from "@/components/landing-page/whyUs";
import { Workflow } from "@/components/landing-page/workFlow";

export default function Home() {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <Workflow />
      </section>
      <section>
        <WhyUs />
      </section>
      <section>
        <GetStarted />
      </section>
    </div>
  );
}
