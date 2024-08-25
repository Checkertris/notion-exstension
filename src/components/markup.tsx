

const Markup = ({ children, color, style, className }: { children: any; color?: string; style?: "highlight" | "under"; className?: string }) => {
    return (
        <span className={cn("markup", style ? style : "highlight", color ? color : "")}>
            <span className={cn("markup-content", className)}>{children}</span>
        </span>
    );
};

export default Markup

