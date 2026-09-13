import { createFileRoute } from "@tanstack/react-router";
import { DoctorProfile } from "@/components/doctor-profile";
import { pageHead } from "@/lib/doctor-content";

export const Route = createFileRoute("/en")({
  head: () => pageHead("en"),
  component: () => <DoctorProfile lang="en" />,
});
