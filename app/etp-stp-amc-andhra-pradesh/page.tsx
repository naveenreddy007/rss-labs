import type { Metadata } from "next"
import { SeoLandingPage } from "@/components/seo-landing-page"
import { seoPages } from "@/lib/site-data"

const page = seoPages.find((item) => item.slug === "etp-stp-amc-andhra-pradesh")

export const metadata: Metadata = {
  title: `${page?.title ?? "ETP STP AMC in Andhra Pradesh"} | RSS Environmental & Analytical Labs`,
  description: page?.description,
}

export default function EtpStpAmcAndhraPradeshPage() {
  return <SeoLandingPage slug="etp-stp-amc-andhra-pradesh" />
}
