const stats = [
    { id: 1, name: 'April', availability: '9/10', status: 'Open', applyBy: 'April 10th', startDate: 'April 16th' },
    { id: 2, name: 'September', availability: '10/10', status: 'Open', applyBy: 'tba', startDate: 'tba' },
  ]
  
  export default function Cohorts() {
    return (
      <div className="bg-white py-18 sm:py-18">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Upcoming Cohorts ⏳
            </h2>
            <dl className="mt-8 grid grid-cols-1 gap-2 overflow-hidden rounded-2xl text-center sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-indigo-200 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">Cohort</dt>
                  <dt className="text-xl font-semibold leading-6 text-gray-900 pb-8">{stat.name}</dt>
                  <dd className="text-md font-semibold tracking-tight text-gray-900">Spots open: {stat.availability}</dd>
                  
                  <dd className="text-md font-semibold tracking-tight text-gray-900">Apply By: {stat.applyBy}</dd>
                  <dd className="text-md font-semibold tracking-tight text-gray-900">Start Date: {stat.startDate}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }