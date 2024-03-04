import Card from "@/app/components/Card";
import Link from "next/link";

const Notifications = () => {
  return (
    <div className="flex flex-col p-5">
      <Card text="Notifications" />
      <Link href="/dashboard/archived">Archived</Link>
    </div>
  );
};

export default Notifications;
