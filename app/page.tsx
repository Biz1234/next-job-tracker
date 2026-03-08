import ImageTabs from "@/components/image-tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, LayoutDashboard, LineChart } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="flex-1">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
              A better way to track your job applications.
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Stop relying on messy spreadsheets. Capture, organize, and manage your entire job search pipeline in one centralized workspace.
            </p>
            <div className="flex flex-col items-center gap-4">
              {/* Fix: Use asChild to prevent <a><button> nesting */}
              <Button size="lg" className="h-12 px-8 text-lg font-medium" asChild>
                <Link href="/sign-up">
                  Start for free <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground">
                Free forever. No credit card required.
              </p>
            </div>
          </div>
        </section>

        {/* Hero Images Section with Tabs */}
        <div className="container mx-auto px-4 pb-16 md:pb-32">
          <ImageTabs />
        </div>

        {/* Features Section */}
        <section className="border-t bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
              
              {/* Feature 1 */}
              <div className="flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <LayoutDashboard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold tracking-tight">
                  Visual Pipeline
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Drag and drop your applications across custom Kanban stages. Know exactly where you stand with every company at a glance.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold tracking-tight">
                  Centralized Hub
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Store resumes, cover letters, recruiter contacts, and interview notes securely alongside each specific role.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold tracking-tight">
                  Actionable Insights
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Track your application volume, interview conversion rates, and overall progress to optimize your search strategy.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
}