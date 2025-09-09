import Dashboardheader from "@/app/Components/Dashboardheader";
import Sidebar from "@/app/Components/Sidebar";

export default function Dashboardlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex ">
      <section className="w-[20%] h-82 border">
        <Sidebar />
      </section>
      <div className="flex-1">
        <section className="border p-3">
          <Dashboardheader />
        </section>  
        <div>{children}</div>
      </div>
    </div>
  );
}
