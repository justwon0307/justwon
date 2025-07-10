import Link from "next/link";

import { Container } from "./styles";

export function DefaultNotFoundPage() {
  return (
    <Container>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/" passHref>
        Go back to Home
      </Link>
    </Container>
  );
}
