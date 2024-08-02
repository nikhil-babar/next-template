export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="mt-5">
        <h1 className="text-center font-bold text-2xl">Projects</h1>
        {children}
      </section>
    </>
  );
}
