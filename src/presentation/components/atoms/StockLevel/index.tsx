import { StockLevel as StockLevelType } from "@/modules/shared/domain/StockLevel";

type StockLevelProps = {
  level: StockLevelType;
};

const StockLevel = ({ level }: StockLevelProps) => {
  if (level === "low") {
    return <div className="inline-block w-5 h-5 rounded-sm bg-red-500" />;
  }
  if (level === "medium") {
    return <div className="inline-block w-5 h-5 rounded-sm bg-yellow-500" />;
  }
  if (level === "high") {
    return <div className="inline-block w-5 h-5 rounded-sm bg-green-500" />;
  }
};

export default StockLevel;
