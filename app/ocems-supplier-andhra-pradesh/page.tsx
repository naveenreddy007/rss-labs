import type { Metadata } from "next"
import { SeoLandingPage } from "@/components/seo-landing-page"
import { seoPages } from "@/lib/site-data"

const page = seoPages.find((item) => item.slug === "ocems-supplier-andhra-pradesh")

export const metadata: Metadata = {
  title: `${page?.title ?? "OCEMS Supplier in Andhra Pradesh"} | RSS Environmental & Analytical Labs`,
  description: page?.description,
}

export default function OcemsSupplierAndhraPradeshPage() {
  return <SeoLandingPage slug="ocems-supplier-andhra-pradesh" />
}
