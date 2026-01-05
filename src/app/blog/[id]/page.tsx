interface BlogPageProps {
    params: { id: string };
}

export default function BlogPage({ params: { id } }: BlogPageProps) {
    return <div>My Post: {id}</div>;
}