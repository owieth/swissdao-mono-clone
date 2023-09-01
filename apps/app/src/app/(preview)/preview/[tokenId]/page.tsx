import MembercardPreview from '@/components/membercard/preview';

export default function PreviewPage({
  params: { tokenId },
}: {
  params: { tokenId: number };
}) {
  return <MembercardPreview holder={tokenId} />;
}
