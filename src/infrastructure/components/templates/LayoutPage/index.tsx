import Header from "../../organims/Header";

type LayoutPageProps = { children?: React.ReactNode };

const LayoutPage = ({ children }: LayoutPageProps) => {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        {children}
      </div>
    </>
  );
};

export default LayoutPage;