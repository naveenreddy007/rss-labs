import type { Metadata } from "next"
import { SeoLandingPage } from "@/components/seo-landing-page"
import { seoPages } from "@/lib/site-data"

const page = seoPages.find((item) => item.slug === "water-testing-lab-tirupati")

export const metadata: Metadata = {
  title: `${page?.title ?? "Water Testing Lab in Tirupati"} | RSS Environmental & Analytical Labs`,
  description: page?.description,
}

export default function WaterTestingLabTirupatiPage() {
  return <SeoLandingPage slug="water-testing-lab-tirupati" />
}
