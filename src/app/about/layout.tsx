interface AbooutPageLayoutProps {
    children: React.ReactNode;
} 
export default function AboutPageLayout({ children }: AbooutPageLayoutProps) {
    return (
        <div>
            <aside>AboutPageLayout</aside>
            <div>{children}</div>
        </div>
    );
}