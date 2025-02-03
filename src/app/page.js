import Banner from "@/landing-page/components/banner";
import { Features } from "@/landing-page/components/features";
import GetStarted from "@/landing-page/components/getStarted";
import { WhyUs } from "@/landing-page/components/whyUs";
import { Workflow } from "@/landing-page/components/workFlow";

export default function Home() {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <Features />
      </section>
      {/* <section>
        <Workflow />
      </section>
      <section>
        <WhyUs />
      </section> */}
      <section>
        <GetStarted />
      </section>
    </div>
  );
}
