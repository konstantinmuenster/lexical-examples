type CommentProps = {
  children: React.ReactNode;
};

export const Comment: React.FC<CommentProps> = ({ children }) => {
  return (
    <div className="relative rounded-xl bg-yellow-200/80 px-1 py-3 after:absolute after:-right-0 after:-top-4 after:text-2xl after:font-bold after:uppercase after:content-['💬']">
      {children}
    </div>
  );
};
