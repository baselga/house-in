import Header from "../../organims/Header";

type LayoutPageProps = { children?: React.ReactNode };

const LayoutPage = ({ children }: LayoutPageProps) => {
  return (
    <div className="min-h-screen bg-slate-200">
      <Header />
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default LayoutPage;
