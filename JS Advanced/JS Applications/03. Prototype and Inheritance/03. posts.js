function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.comments = [];
            this.likes = likes;
            this.dislikes = dislikes;
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let x = this.comments.reduce((acc, val) => {
                acc.push(` * ${val}`);
                return acc;
            }, []);

            if (!this.comments.length) {
                return `Post: ${this.title}\nContent: ${this.content}\nRating: ${Number(this.likes - this.dislikes)}`
            }

            return `Post: ${this.title}\nContent: ${this.content}\nRating: ${Number(this.likes - this.dislikes)}\nComments:\n${x.join('\n')}`;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = Number(views);
        }

        view() {
            this.views += 1;
            return this;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}