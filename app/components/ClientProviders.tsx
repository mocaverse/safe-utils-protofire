"use client";

import { NetworksProvider } from "@/context/networks-context";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return <NetworksProvider>{children}</NetworksProvider>;
}
