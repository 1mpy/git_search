"https://api.github.com/search/users";

export async function findUsers(page, per_page, search, order) {
  const url = new URL(`https://api.github.com/search/users?q=${search}`);
  url.searchParams.append("per_page", per_page);
  url.searchParams.append("page", page);
  url.searchParams.append("sort", "repositories");
  if (order) url.searchParams.append("order", order);

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 422) {
    throw new Error("Некорректный запрос");
  }
  if (response.status === 403) {
    throw new Error("Превышен лимит запросов");
  }
  const data = await response.json();
  console.log("data", data);
  return data;
}
