type Url = 'services' | 'locations';

export const getLocalJsonUrl = (name: Url) => `${import.meta.env.BASE_URL}${name}.json`;

export const delay = (ms: number = 0) => new Promise((res) => setTimeout(res, ms));
