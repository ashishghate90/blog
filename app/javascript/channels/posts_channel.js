import consumer from "./consumer"

consumer.subscriptions.create("PostsChannel", {
  received(data) {
    console.log("Received new post data:", data); // Debugging log
    const postsContainer = document.getElementById("posts-container");
    if (postsContainer) {
      postsContainer.insertAdjacentHTML("afterbegin", data.post);
    }
  },

  connected() {
    console.log("Connected to PostsChannel");
  },

  disconnected() {
    console.log("Disconnected from PostsChannel");
  }
});
