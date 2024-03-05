import { GuildType } from '@/types/types';
import Link from 'next/link';

function CSSstring(string: string) {
  const css_json = `{"${string
    .replace(/; /g, '", "')
    .replace(/: /g, '": "')
    .replace(';', '')}"}`;

  const obj = JSON.parse(css_json);

  const keyValues = Object.keys(obj).map(key => {
    var camelCased = key.replace(/-[a-z]/g, g => g[1].toUpperCase());
    return { [camelCased]: obj[key] };
  });
  return Object.assign({}, ...keyValues);
}

export default function GuildsPage({ guilds }: { guilds: GuildType[] }) {
  return (
    <main className="mx-auto max-w-7xl p-4 md:p-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-6xl">Guilds</h1>
        <p className="mt-5 text-gray-600 sm:mt-10 sm:text-lg">
          All swissDAO Guilds
        </p>
      </div>

      <div className="mt-10 grid w-full grid-cols-1 gap-8 px-10 sm:grid-cols-2 md:px-20 lg:mt-20 xl:grid-cols-3">
        {guilds.map((guild, i) => (
          <Link href={`/guilds/${guild.id}`} key={i}>
            <div className="ease relative rounded-2xl border-2 border-gray-100 bg-white shadow transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div className="overflow-hidden rounded-t-2xl">
                <span
                  style={CSSstring(
                    'box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;'
                  )}
                >
                  <span
                    style={CSSstring(
                      'box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 80% 0px 0px;'
                    )}
                  ></span>
                  <img
                    alt="Developer DAO"
                    sizes="100vw"
                    src="https://daocentral.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdaojones%2Fimage%2Fupload%2FCleanShot_2021-11-24_at_04.08.33_pxl0kp.png&w=1920&q=75"
                    decoding="async"
                    data-nimg="responsive"
                    className="scale-100 blur-0 grayscale-0 duration-700 ease-in-out"
                    style={CSSstring(
                      'position: absolute; inset: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;'
                    )}
                  />
                </span>
              </div>

              <div className="absolute bottom-[7.5em] right-5 rounded-full border border-gray-100 bg-white py-2 pl-4 pr-5 text-center shadow-md">
                # {guild.id}
              </div>

              <div className="h-36 px-5 py-6">
                <h3 className="font-cal my-0 truncate text-2xl font-bold tracking-wide">
                  {guild.name}
                </h3>
                <p className="mt-3 line-clamp-2 text-base font-normal italic leading-snug text-gray-800">
                  {guild.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
