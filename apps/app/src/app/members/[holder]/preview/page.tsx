import MembercardPreview from '@/components/membercard/preview';

export default function PreviewPage({
  params,
}: {
  params: { holder: string };
}) {
  return <MembercardPreview holder={params.holder} />;
}
