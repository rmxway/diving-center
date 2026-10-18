type Url = 'services' | 'locations';

export const getLocalJsonUrl = (name: Url) => `${import.meta.env.BASE_URL}${name}.json`;
