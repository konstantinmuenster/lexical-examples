type CommentProps = {
  children: React.ReactNode;
};

export const Comment: React.FC<CommentProps> = ({ children }) => {
  return (
    <div className="relative rounded-xl bg-yellow-200/80 px-1 py-3 after:absolute after:right-3 after:top-0 after:rounded-bl-md after:rounded-br-md after:bg-yellow-900/10 after:px-2 after:py-1 after:text-xs after:font-medium after:text-yellow-950/50 after:content-['Comment']">
      {children}
    </div>
  );
};
