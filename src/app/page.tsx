import Image from "next/image";
import { DriversTable } from "./components/tablas/DriversTable";
import { InputDemo } from "./components/SearchBar";
import Button from "./components/Button";

export default function Home() {
  return (

    <div className="w-full">
      <div className="w-80 mb-8">
        <Button> + Create New Driver </Button>
      </div>
      <div className="w-80 mb-8">
        <InputDemo />
      </div>
      <div className="max-w-5xl">
        <DriversTable />
      </div>
    </div>

  );
}
