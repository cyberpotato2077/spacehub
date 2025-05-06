import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from '@radix-ui/themes';
import { useController, useForm } from 'react-hook-form';

export function SignIn({ onSignUpClick }: { onSignUpClick: VoidFunction }) {
  return <SignInForm onSignUpClick={onSignUpClick} />;
}

const FORM_ID = 'sign-in-form';

interface SignIn {
  email: string;
  password: string;
}

function SignInForm({
  className,
  onSignUpClick,
  ...props
}: React.ComponentProps<'div'> & {
  onSignUpClick: VoidFunction;
}) {
  const { control, handleSubmit } = useForm<SignIn>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const emailController = useController({ control, name: 'email' });
  const passwordController = useController({ control, name: 'password' });

  const signIn = async (data: SignIn) => {
    alert(data);
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form id={FORM_ID} onSubmit={handleSubmit(signIn)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
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
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  {/* <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                      Forgot your password?
                    </a> */}
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={passwordController.field.value}
                  onChange={(e) => passwordController.field.onChange(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full" form={FORM_ID}>
                  Login
                </Button>
                {/* <Button variant="outline" className="w-full">
                    Login with Google
                  </Button> */}
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{' '}
              <Link href="#" underline="always" onClick={onSignUpClick}>
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
