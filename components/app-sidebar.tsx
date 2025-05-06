'use client';

import type * as React from 'react';
import {
  IconChartBar,
  IconDashboard,
  IconHelp,
  IconListDetails,
  IconLogin,
  IconRocket,
  IconSearch,
  IconSettings,
} from '@tabler/icons-react';

import { NavMain } from '@/components/nav-main';
import { NavSecondary } from '@/components/nav-secondary';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { Routes } from '@/lib/routes';
import { Avatar, AvatarFallback } from './ui/avatar';
import { NavNeedSignIn } from './nav-need-sign-in';

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Articles',
      url: Routes.articles,
      icon: IconDashboard,
    },
    {
      title: 'Blogs',
      url: Routes.blogs,
      icon: IconListDetails,
    },
    {
      title: 'Reports',
      url: Routes.reports,
      icon: IconChartBar,
    },
  ],
  navSecondary: [
    {
      title: 'Settings',
      url: '#',
      icon: IconSettings,
    },
    {
      title: 'About',
      url: '#',
      icon: IconHelp,
    },
    {
      title: 'Search',
      url: '#',
      icon: IconSearch,
    },
  ],
};
// todo: useAuth 구현하기
const isSigned = false;
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <Link href="/">
                <IconRocket className="!size-5" stroke={2} />
                <span className="text-base font-semibold">Spacehub</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>{isSigned ? <NavUser user={data.user} /> : <NavNeedSignIn />}</SidebarFooter>
    </Sidebar>
  );
}
