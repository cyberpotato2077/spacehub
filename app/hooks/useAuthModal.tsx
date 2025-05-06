import { LoginForm } from '@/components/login-form';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { overlay } from 'overlay-kit';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { SignUpForm } from '@/components/signup-form';
import { useState } from 'react';
import { match } from 'ts-pattern';

export function useAuthModal() {
  const openAuthModal = () => overlay.open(({ isOpen, close }) => <AuthModal isOpen={isOpen} closeModal={close} />);
  return { openAuthModal };
}

function AuthModal({ isOpen, closeModal }: { isOpen: boolean; closeModal: VoidFunction }) {
  const [signState, setSignState] = useState<'SIGN_IN' | 'SIGN_UP'>('SIGN_IN');

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent>
        <VisuallyHidden>
          <DialogTitle>로그인/회원가입</DialogTitle>
        </VisuallyHidden>
        {match(signState)
          .with('SIGN_IN', () => <LoginForm onSignUpClick={() => setSignState('SIGN_UP')} />)
          .with('SIGN_UP', () => <SignUpForm onBackToSignInClick={() => setSignState('SIGN_IN')} />)
          .exhaustive()}
      </DialogContent>
    </Dialog>
  );
}
