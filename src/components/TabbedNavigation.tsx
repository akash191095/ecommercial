"use client";

import { Tab, Tabs } from "@mui/material";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabbedNavigation() {
  const pathname = usePathname();

  return (
    <Tabs value={pathname}>
      <Tab label="Inventory" value="/" href="/" component={Link} />
      <Tab
        label="Collections"
        value="/collections"
        href="/collections"
        component={Link}
      />
      <Tab
        label="Analytics"
        value="/analytics"
        href="/analytics"
        component={Link}
      />
    </Tabs>
  );
}
