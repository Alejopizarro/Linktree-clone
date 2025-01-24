"use client";
import { TreePalm } from "lucide-react";
import LinkProfile from "./components/LinkProfile/LinkProfile";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { User, Link } from "@prisma/client";

export default function HomePage() {
  const { user } = useUser();
  const [isFirstVisit, setIsFirstVisit] = useState();
  const [reload, setReload] = useState();
  const [infoUser, setInfoUser] = useState<(User & { links: Link[] }) | null>(
    null
  );

  useEffect(() => {
    const checkFirstLogin = async () => {
      const response = await fetch("/api/info-user");
      const data = await response.json();
    };

    checkFirstLogin();
  }, [user?.id, reload, user]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-4 px-4">
        <div className="">
          <LinkProfile />
          <div>
            <p>Profile info ...</p>
          </div>
          <div className="mt-20 flex flex-col items-center">
            <div className="py-10 text-center justify-center flex flex-col items-center text-gray-400 font-semibold">
              <TreePalm className="h-20 w-20 strokeWidth={1}" />
              <p>Show the world who you are</p>
              <p>Add a link to get started</p>
            </div>
          </div>
        </div>
        <div>
          <p>Profile preview...</p>
        </div>
      </div>
    </div>
  );
}
