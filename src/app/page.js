import Banner from "@/components/landing-page/banner";
import Features from "@/components/landing-page/features";
import PackageCard from "@/components/landing-page/packageCard";
import { Card } from "@/components/ui/card";

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
        <PackageCard />
      </section>
    </div>
  );
}
