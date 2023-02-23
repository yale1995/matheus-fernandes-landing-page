import { Comment } from "./Comment"
import { comments } from '../../content/comments'

export function CommentsContainer() {
    return (
        <div className="flex gap-8 justify-between mobile:flex-col">
            {comments.map((comment) => (
                <Comment
                    content={comment.content}
                    key={comment.author}
                    author={comment.author}
                    image={comment.image}
                />
            ))}

        </div>
    )
}