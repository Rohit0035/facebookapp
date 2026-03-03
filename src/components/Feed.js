import Stories from "./Stories";
import Post from "./Post";
import PostInput from "./post/PostInput";
import CreateStory from "./stories/StoriesInput";
import ReelsList from "./reelscomponent/ReelsList";

export default function Feed() {
  return (
    <>

      <PostInput />
      <CreateStory />
      <Stories />

      <ReelsList/>
      <div className="mt-3">
        {[1, 2, 3].map((p) => (
          <Post key={p} />
        ))}
      </div>

    </>
  );
}
