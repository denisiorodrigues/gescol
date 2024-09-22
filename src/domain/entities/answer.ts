import { Entity } from "@/core/entities/entity"
import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { Optional } from "@/core/types/optional"

interface AnswerProps {
    content: string
    authorId: UniqueEntityID
    questionId:UniqueEntityID
    createdAt: Date
    updateAt?: Date
}
export class Answer extends Entity<AnswerProps> {
    get content(){
        return this.props.content
    }

    get authorId() {
        return this.props.authorId
    }

    get questionId() {
        return this.props.questionId
    }

    get createdAt() {
        return this.props.createdAt
    }
    
    get updateAt() {
        return this.props.updateAt
    }

    get excerpt() {
        return this.content.substring(0,120).trimEnd().concat('...')
    }

    private touch() {
        this.props.updateAt = new Date()
    }

    set content(value: string) {
        this.props.content = value
        this.touch()
    }

    static create(
        props: Optional<AnswerProps, 'createdAt'>, 
        id?: UniqueEntityID
    ) {
        const answer = new Answer({
            ...props,
            createAt: new Date()
        }, id)

        return answer
    }
}