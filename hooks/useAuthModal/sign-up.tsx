import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useController, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { signUp } from '@/lib/api/signUp';

export function SignUp({ onBackToSignInClick }: { onBackToSignInClick: VoidFunction }) {
  return <SignUpForm onBackToSignInClick={onBackToSignInClick} />;
}

const FORM_ID = 'sign-up-form';

type SignUp = {
  email: string;
  password: string;
  passwordConfirm: string;
};

function SignUpForm({
  className,
  onBackToSignInClick,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  onBackToSignInClick: VoidFunction;
}) {
  const { control, handleSubmit } = useForm<SignUp>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const emailController = useController({ control, name: 'email' });
  const passwordController = useController({ control, name: 'password' });
  const passwordConfirmController = useController({ control, name: 'passwordConfirm' });

  const { mutate } = useMutation({
    mutationFn: async (data: SignUp) => {
      try {
        const foo = await signUp(data);
        console.log(foo);
      } catch {}
    },
  });

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>Enter your information below to create a new account</CardDescription>
        </CardHeader>
        <CardContent>
          <form id={FORM_ID} onSubmit={handleSubmit((data) => mutate(data))}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={emailController.field.value}
                  onChange={(e) => emailController.field.onChange(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={passwordController.field.value}
                  onChange={(e) => passwordController.field.onChange(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  required
                  value={passwordConfirmController.field.value}
                  onChange={(e) => passwordConfirmController.field.onChange(e.target.value)}
                />
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={onBackToSignInClick}>
                  Back to Sign In
                </Button>
                <Button type="submit" className="flex-1">
                  Sign Up
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
