import { overlay } from 'overlay-kit';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useState } from 'react';
import { match } from 'ts-pattern';
import { SignIn } from './sign-in';
import { SignUp } from './sign-up';

export function useAuthModal() {
  const openAuthModal = () => overlay.open(({ isOpen, close }) => <AuthModal isOpen={isOpen} closeModal={close} />);
  return { openAuthModal };
}

export function AuthModal({ isOpen, closeModal }: { isOpen: boolean; closeModal: VoidFunction }) {
  const [signState, setSignState] = useState<'SIGN_IN' | 'SIGN_UP'>('SIGN_IN');

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent>
        <VisuallyHidden>
          <DialogTitle>로그인/회원가입</DialogTitle>
        </VisuallyHidden>
        {match(signState)
          .with('SIGN_IN', () => <SignIn onSignUpClick={() => setSignState('SIGN_UP')} />)
          .with('SIGN_UP', () => <SignUp onBackToSignInClick={() => setSignState('SIGN_IN')} />)
          .exhaustive()}
      </DialogContent>
    </Dialog>
  );
}
