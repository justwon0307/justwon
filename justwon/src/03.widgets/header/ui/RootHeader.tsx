import Link from "next/link";

import { AuthTab } from "./_auth";
import { Container, Divider, Tabs } from "./styles";
import { Tab } from "./_tab";

export function RootHeader() {
  return (
    <Container>
      <Link href="/" className="title">
        JustWon
      </Link>
      <Tabs>
        <Tab tab="projects" />
        <Tab tab="blog" />
        <Tab tab="study" />
        <Tab tab="about" />
        <Divider />
        <AuthTab />
      </Tabs>
    </Container>
  );
}
