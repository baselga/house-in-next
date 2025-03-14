import Container from "@/ui/desingSystem/Container";
import NavigationButton from "./components/NavigationButton";

export default function LibraryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="bg-primary text-primary-content mb-8">
        <Container className="flex min-h-36 items-center justify-between ">
          <h1 className="text-4xl font-extrabold">Biblioteca</h1>
          <NavigationButton />
        </Container>
      </div>
      {children}
    </>
  );
}
