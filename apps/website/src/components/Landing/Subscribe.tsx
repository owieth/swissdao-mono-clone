import { Widget } from '@typeform/embed-react'

export default function Subscribe() {
  return (
    <div className="w-full bg-white py-16 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl overflow-hidden text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <h2 className="inline sm:block">Want community news and updates?</h2>{' '}
          <div className="md:overflow-hidden">
            <Widget id="ojIVEkpV" style={{ width: '100%' }} className="my-form h-96" />
          </div>
        </div>
      </div>
    </div>
  );
}
