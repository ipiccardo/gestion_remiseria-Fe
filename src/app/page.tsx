import Image from "next/image";
import { DriversTable } from "./components/tablas/DriversTable";
import { InputDemo } from "./components/SearchBar";
import Button from "./components/Button";

export default function Home() {
  return (

    <div className="w-full">
      <div className="w-52 md:w-80 mb-8">
        <Button> + New Driver </Button>
      </div>
      <div className="w-52 md:w-80 mb-8">
        <InputDemo />
      </div>
      {/* <div className="max-w-5xl"> */}
      <div>
        <DriversTable />
      </div>
    </div>

  );
}
