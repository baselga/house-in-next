import Link from "next/link";
import Container from "@/ui/desingSystem/Container";

export function Header() {
  return (
    <header className="py-4 sticky top-0 bg-base-300 text-base-content z-40">
      <Container className="flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-3xl font-extrabold">House In</h1>
        </Link>
        <nav>
          <ul className="flex gap-4 list-none">
            <li>
              <Link href="/recetas">Recetas</Link>
            </li>
            <li>
              <Link href="/biblioteca">Biblioteca</Link>
            </li>            
          </ul>
        </nav>
      </Container>
    </header>
  );
}
