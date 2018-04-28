import { get } from 'lodash';

export default data =>
  data.items.map(item => {
    let device = 'Unknow';
    if (get(item, 'integrations_sent.desk') === 1) {
      device = 'Desktop';
    } else if (get(item, 'integrations_sent.webhook') === 1) {
      device = 'Webhook';
    }

    return {
      comment: item.comment,
      browser: `${item.computed_browser.Browser} ${item.computed_browser.Version}`,
      platform: item.computed_browser.Platform,
      rating: item.rating,
      device,
      id: item.id,
    };
  });
