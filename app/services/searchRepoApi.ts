import ApiConfig from 'app/config/api-config';

export default function searchRepoApi(search: string) {
  return  fetch(ApiConfig.BASE_URL + ApiConfig.SEARCH_REPO + search)
  .then((response) => response.json())
  .then((json) => {
    return json;
  })
  .catch((error) => {
    console.error(error);
  });
}

