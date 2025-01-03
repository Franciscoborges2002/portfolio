import Markdown from "marked-react";

interface MarkdownViewrProps {
    content: string,
}

export const MarkdownViewer: React.FC<MarkdownViewrProps> = ({ content }) => {
    console.log(content)
    return (
        <div>
            <Markdown>{content}</Markdown>
        </div>
    )
}