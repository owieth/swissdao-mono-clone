import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { SwiperContext } from '@/contexts/swiper';
import { CONTRACT } from '@/contracts/contracts';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  prepareWriteContract,
  waitForTransaction,
  writeContract
} from '@wagmi/core';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useAccount } from 'wagmi';
import * as z from 'zod';
import { Loader2 } from 'lucide-react';
import { type WriteContractErrorType } from 'viem';

const FormSchema = z.object({
  nickname: z.string().min(2, {
    message: 'Nickname must be at least 2 characters.'
  }),
  profileImageUri: z.string()
});

export function Mint() {
  const { address } = useAccount();
  const { swiper } = React.useContext(SwiperContext);

  const [loading, setLoading] = React.useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  });

  const {
    watch,
    formState: { isValid }
  } = form;

  const formData = watch();

  const onSubmit = async () => {
    setLoading(true);

    try {
      const config = await prepareWriteContract({
        ...CONTRACT,
        functionName: 'mintMembership',
        args: [address, formData.nickname, formData.profileImageUri]
      });

      const { hash } = await writeContract(config);

      toast.promise(
        waitForTransaction({
          hash
        }),
        {
          loading: 'Your Membership is minting...',
          success: () => {
            setLoading(false);

            return `Membership minted!`;
          },
          error: 'Error'
        }
      );
    } catch (e) {
      const error = e as WriteContractErrorType;

      const message = String(error.cause).includes(
        'SwissDAOMembership__YouAlreadyAreMember'
      )
        ? "You're already have a membership!"
        : 'Execution Error';

      toast.error(message);
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="nickname"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Nickname" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="profileImageUri"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="URI to your profile image" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={loading || !isValid}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Mint
        </Button>
      </form>
    </Form>
  );
}
