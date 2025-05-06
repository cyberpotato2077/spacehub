import { LoginForm } from '@/components/login-form';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { overlay } from 'overlay-kit';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export function useAuthModal() {
  const openAuthModal = () => overlay.open(({ isOpen, close }) => <AuthModal isOpen={isOpen} closeModal={close} />);
  return { openAuthModal };
}

function AuthModal({ isOpen, closeModal }: { isOpen: boolean; closeModal: VoidFunction }) {
  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent>
        <VisuallyHidden>
          <DialogTitle>로그인/회원가입</DialogTitle>
        </VisuallyHidden>
        <LoginForm onSignUpClick={() => alert('hi')} />
      </DialogContent>
    </Dialog>
  );
}
