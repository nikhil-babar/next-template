export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="mt-5">{children}</section>
    </>
  );
}
