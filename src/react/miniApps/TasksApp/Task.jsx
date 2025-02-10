export function Task({ title, content}) {
    return (
        <div className="task">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
}