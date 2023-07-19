interface DefaultPageProps {
  children: React.ReactNode;
}
export default function DefaultPage({ children }: DefaultPageProps) {
  return (
    <div className="flex flex-col overflow-scroll">
      {children}
    </div>
  )
}