"use client";

import React from "react";
import Link from "next/link";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function FAQPage() {
  return (
    <ContentLayout title="FAQs">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/home">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/faq">Others</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>FAQs</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-8">
        <div className="max-w-4xl mx-auto">
          <Accordion type="multiple" className="w-full max-w-3xl space-y-2">

            <AccordionItem value="q0">
              <AccordionTrigger>How can I view the answers initally for studying?</AccordionTrigger>
              <AccordionContent>
                Click “Submit Quiz” without attempting any questions for the respective week or the all-weeks quiz. The answers will be displayed along with the respective questions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q1">
              <AccordionTrigger>Do I have to sit for the full 3 hours?</AccordionTrigger>
              <AccordionContent>
                Not for the full 3 hours, but probably for a minimum of 1.5 hours.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger>When is the exam?</AccordionTrigger>
              <AccordionContent>
                The exam is on April 18th for candidates who have chosen VIT Chennai as their center.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3">
              <AccordionTrigger>What do the slots signify on the website?</AccordionTrigger>
              <AccordionContent>
                Exam slots are as follows:
                <br />
                Morning: 7–10am<br />
                Afternoon: 11–2pm<br />
                Evening: 3–6pm<br />
                Late Evening: 7–10pm<br />
                <br />
                Candidates who selected Chennai will have their center at VIT Chennai.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4">
              <AccordionTrigger>How do I contact NPTEL for support (date or location change)?</AccordionTrigger>
              <AccordionContent>
                You can email{" "}
                <a href="mailto:support@nptel.iitm.ac.in" className="text-blue-600 underline">
                  support@nptel.iitm.ac.in
                </a>{" "}
                for any queries or anything regarding exam date or center changes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5">
              <AccordionTrigger>Where do I see my center and date?</AccordionTrigger>
              <AccordionContent>
                You can view your exam city and center details for the April 2025 exam at{" "}
                <a
                  href="https://internalapp.nptel.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  internalapp.nptel.ac.in
                </a>
                .<br />
                Log in using your registered email and your date of birth (in YYYY-MM-DD format) as the password.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger>Is Black and White printout of Hall ticket sufficent?</AccordionTrigger>
              <AccordionContent>
                Yes, Black and White printout of Hall ticket sufficent.
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </div>
    </ContentLayout>
  );
}
