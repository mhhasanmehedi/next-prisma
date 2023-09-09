import Link from "next/link";

async function getPostsData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  await new Promise((resolve) => setTimeout(resolve, 3000)); //wait 3 second
  return res.json();
}

async function getUsersData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

const Posts = async () => {
  // const posts = await getPostsData();  // for single api
  const [posts, users] = await Promise.all([getPostsData(), getUsersData()]);
  console.log(users);

  return (
    <div>
      <h1 className="text-4xl">Posts Page</h1>
      <ul className="flex flex-col gap-5">
        {posts?.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <li className="bg-gray-100 p-5 cursor-pointer">
              <h4 className="text-xl font-bold">{post.title}</h4>
              <p>{post.body}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
