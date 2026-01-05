import { cn } from "@/lib/utils";
import { FileText, Download, MoreVertical } from "lucide-react";

interface FileItem {
  id: string;
  name: string;
  size: string;
  type: string;
}

const FILE_ITEMS: FileItem[] = [
  { id: "1", name: "Project_Proposal_Final.pdf", size: "2.3 MB", type: "PDF" },
  { id: "2", name: "brand_assets.zip", size: "15.1 MB", type: "ZIP" },
  { id: "3", name: "wireframes_v3.fig", size: "8.7 MB", type: "Figma" },
  { id: "4", name: "meeting_notes.docx", size: "128 KB", type: "Word" },
];

export default function List_04() {
  return (
    <div className="w-full max-w-xl mx-auto p-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
      <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-3">
        Project Files
      </h3>
      <div className="divide-y divide-zinc-100 dark:divide-zinc-800/50">
        {FILE_ITEMS.map((file) => (
          <div
            key={file.id}
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center gap-3 min-w-0">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-zinc-100 dark:bg-zinc-800">
                    <FileText className="w-5 h-5 text-zinc-500" />
                </div>
                <div className="min-w-0">
                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate">
                        {file.name}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        {file.size}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
                <button className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
                    <Download className="w-4 h-4 text-zinc-500"/>
                </button>
                <button className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
                    <MoreVertical className="w-4 h-4 text-zinc-500"/>
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
