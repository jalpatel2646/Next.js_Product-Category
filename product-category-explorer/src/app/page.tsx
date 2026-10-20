import { redirect } from "next/navigation";

/**
 * Root page — redirects to /products as the main landing page.
 */
export default function HomePage() {
  redirect("/products");
}
