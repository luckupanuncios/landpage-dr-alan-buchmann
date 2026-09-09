"use client";

import React from "react";
import { usePathname } from "next/navigation";

/**
 * Oculta o cabeçalho, o rodapé e o botão flutuante nas rotas que têm
 * layout próprio de página cheia, como a árvore de links.
 */
const ROTAS_SEM_CHROME = ["/links"];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (ROTAS_SEM_CHROME.includes(pathname)) {
    return null;
  }

  return <>{children}</>;
}
