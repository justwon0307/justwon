import Link from "next/link";

import { AuthTab } from "./_auth";
import { Tab } from "./_tab";
import { Container, Divider, Tabs } from "./styles";
import { LogoHorizontal } from "@shared/ui/Icons";

export function RootHeader() {
  return (
    <Container>
      <Link href="/" className="title">
      <LogoHorizontal size={36} />
      </Link>
      <Tabs>
        <Tab tab="projects" />
        <Tab tab="blog" />
        <Tab tab="learning" />
        <Tab tab="about" />
        <Divider />
        <AuthTab />
      </Tabs>
    </Container>
  );
}
