import Header from "../../organims/Header";

type LayoutPageProps = { children?: React.ReactNode };

const LayoutPage: React.FC<LayoutPageProps> = ({ children }) => {
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
