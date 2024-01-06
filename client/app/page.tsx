import HeroSection from '@/components/Home/HeroSection';
import OurProductsSection from '@/components/Home/OurProductsSection';
import ProductCategoriesSection from '@/components/Home/ProductCategoriesSection';

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <HeroSection />

      {/* Product categories section */}
      <ProductCategoriesSection />

      {/* Our Products section */}
      <OurProductsSection />
    </main>
  );
}
