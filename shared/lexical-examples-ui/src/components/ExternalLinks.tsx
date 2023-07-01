import { Github } from "lucide-react";

type ExternalLinksProps = {
  slug: string;
};

const GITHUB_EXAMPLES_DIR =
  "https://github.com/konstantinmuenster/lexical-examples/tree/main/examples/";

export const ExternalLinks: React.FC<ExternalLinksProps> = ({ slug }) => {
  return (
    <div className="flex justify-end gap-2">
      <a
        href={`${GITHUB_EXAMPLES_DIR}${slug}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-right text-xs font-medium text-gray-500 hover:text-gray-800"
      >
        <Github size={14} /> View code
      </a>
    </div>
  );
};
