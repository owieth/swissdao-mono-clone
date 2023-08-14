export const GA_TRACKING_ID = 'G-3KYP2NRC5M';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
