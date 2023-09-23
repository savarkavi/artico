import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="flex py-10 mt-10 gap-[150px]">
        <CardList page={page} />
        <Sidebar />
      </div>
    </div>
  );
}
