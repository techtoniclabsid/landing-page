import Banner from "@/components/landing-page/banner";
import Features from "@/components/landing-page/features";
import Footer from "@/components/landing-page/footer";
import PackageCard from "@/components/landing-page/packageCard";
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
      <section>
        <Footer />
      </section>
    </div>
  );
}
