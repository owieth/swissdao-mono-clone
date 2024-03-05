const stats = [
  { id: 1, name: 'Location', value: 'Hybrid' },
  { id: 2, name: 'Duration', value: '12 Weeks' },
  { id: 3, name: 'Time Commitment', value: '10-20h /Week' },
  { id: 4, name: 'Cohort Size', value: '10 People' }
];

export default function BootcampStats() {
  return (
    <div className="py-18 sm:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(stat => (
              <div key={stat.id} className="flex flex-col bg-white p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
