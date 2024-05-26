// app/layout.tsx
import { Metadata } from "next";
// import "./i18n";

import { Providers } from "./providers";
import { ColorModeScript } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Panda Cat",
  description: "Panda Cat and Mememaker Generation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Make Color mode to persists when you refresh the page. */}
        <ColorModeScript storageKey={"panda cat " + "_ColorMode"} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
