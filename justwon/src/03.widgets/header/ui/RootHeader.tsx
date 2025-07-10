import Link from "next/link";

import { Container, Tabs } from "./styles";
import { AppIcon } from "@shared/ui/Icons";

export function RootHeader() {
  return (
    <Container>
      <Link href="/">JustWon</Link>
      <Tabs>
        <Link href="/projects">
          <AppIcon icon="project" size={18} color="#123456" />
          Projects
        </Link>
        <Link href="/blog">
          <AppIcon icon="blog" size={18} color="#123456" />
          Blog
        </Link>
        <Link href="/study">
          <AppIcon icon="study" size={18} color="#123456" />
          Study
        </Link>
        <Link href="/about">
          <AppIcon icon="about" size={18} color="#123456" />
          About
        </Link>
      </Tabs>
    </Container>
  );
}
