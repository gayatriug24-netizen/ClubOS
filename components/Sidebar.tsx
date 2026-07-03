"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  CalendarDays,
  Images,
  FileText,
  FolderKanban,
  Users,
  Settings,
  ChevronRight,
} from "lucide-react";

const navigation = [
  {
    title: "Workspace",
    href: "/dashboard",
    icon: LayoutGrid,
  },
  {
    title: "Events",
    href: "/events",
    icon: CalendarDays,
  },
  {
    title: "Media",
    href: "/media",
    icon: Images,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: FileText,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    title: "Team",
    href: "#",
    icon: Users,
    disabled: true,
  },
  {
    title: "Settings",
    href: "#",
    icon: Settings,
    disabled: true,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex min-h-screen w-72 flex-col justify-between border-r border-stone-200 bg-[#FFFDF9]">

      {/* Top */}

      <div>

        {/* Logo */}

        <div className="px-8 pt-10">

          <h1 className="text-3xl font-bold tracking-tight text-stone-900">
            ClubOS
          </h1>

          <p className="mt-2 text-sm text-stone-500">
            AI Operating System
          </p>

        </div>

        {/* Organization */}

        <div className="mx-5 mt-8 rounded-3xl border border-stone-200 bg-[#FAF6F1] p-5">

          <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
            Current Organization
          </p>

          <h3 className="mt-3 text-lg font-semibold text-stone-900">
            Rotaract Club
          </h3>

          <p className="text-sm text-stone-500">
            NSUT East
          </p>

        </div>

        {/* Navigation */}

        <nav className="mt-8 px-4">

          {navigation.map((item) => {

            const Icon = item.icon;

            const active = pathname === item.href;

            return (
              <Link
                key={item.title}
                href={item.disabled ? "#" : item.href}
                className={`group mb-2 flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-200

                ${
                  active
                    ? "bg-[#F5EBDD] text-[#6B4226]"
                    : "text-stone-600 hover:bg-[#FAF6F1]"
                }

                ${
                  item.disabled
                    ? "pointer-events-none opacity-45"
                    : ""
                }
                `}
              >

                <div className="flex items-center gap-3">

                  <Icon
                    size={19}
                    strokeWidth={2}
                  />

                  <span className="font-medium">
                    {item.title}
                  </span>

                </div>

                {active && (
                  <ChevronRight
                    size={18}
                    className="text-[#6B4226]"
                  />
                )}

              </Link>
            );

          })}

        </nav>

      </div>

      {/* Bottom */}

      <div className="border-t border-stone-200 p-6">

        <div className="flex items-center gap-4 rounded-3xl bg-[#FAF6F1] p-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6B4226] text-lg font-semibold text-white">
            G
          </div>

          <div>

            <h3 className="font-semibold text-stone-900">
              Gayatri
            </h3>

            <p className="text-sm text-stone-500">
              General Secretary
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}