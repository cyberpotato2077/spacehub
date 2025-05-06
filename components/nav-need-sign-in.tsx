import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import { SidebarMenuButton } from './ui/sidebar';
import { IconLogin, IconUser } from '@tabler/icons-react';
import { useAuthModal } from '@/hooks/useAuthModal';

export function NavNeedSignIn() {
  const { openAuthModal } = useAuthModal();
  return (
    <SidebarMenuButton
      size="lg"
      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
      onClick={openAuthModal}
    >
      <Avatar className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center">
        <IconUser className="size-4 text-muted-foreground" />
      </Avatar>

      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-medium text-muted-foreground">Sign in required</span>
        <span className="text-muted-foreground truncate text-xs">Please connect your account</span>
      </div>
    </SidebarMenuButton>
  );
}
