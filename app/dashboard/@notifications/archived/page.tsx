import Card from "@/app/components/Card";
import Link from "next/link";

const Archived = () => {
  return (
    <div className="flex flex-col p-5">
      <Card text="Archived" />
      <Link href="/dashboard">Notifications</Link>
    </div>
  );
};

export default Archived;
