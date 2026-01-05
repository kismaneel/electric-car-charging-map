interface BlogPageProps {
    params: {
        title: string,
        info: string 
    };
}

export default function BlogDetailInfoPage({ params: { title, info } }: BlogPageProps) {
    return (
        <div>
            <h1>Blog Post: {title}</h1>
            <p>Detail Info: {info}</p>
        </div>
    );
}