export async function fetchUserRepos(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!res.ok) throw new Error("User not found or API limit reached");
  return res.json();
}
