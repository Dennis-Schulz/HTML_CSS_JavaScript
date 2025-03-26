class WorkingWithJson {
    static array = [];

    static loadContent() {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
            .then(response => response.json())
            .then(posts => {
                this.array = posts;
                this.renderPost();
            })
            .catch(error => alert(`Ошибка загрузки: ${error}`));
    }

    static renderPost() {
        const content = document.getElementById("root");
        content.innerHTML = "";
        this.array.forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.id = `post-${post.id}`; // Добавляем id

            postElement.innerHTML = `
                <span class="material-symbols-outlined close-btn" data-id="${post.id}">close</span>
                <h2 class="subheader">${post.title}</h2>
                <p>${post.body}</p>
            `;
            content.appendChild(postElement);
        });
    }

    static deletePost(id) {
        this.array = this.array.filter(post => post.id !== id);
        this.renderPost();
    }
}

document.addEventListener("DOMContentLoaded", () => WorkingWithJson.loadContent());

document.addEventListener("click", event => {
    if (event.target.classList.contains("close-btn")) {
        const postId = Number(event.target.dataset.id); 
        WorkingWithJson.deletePost(postId);
    }
});




