"use client";

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  description: string;
  confirmLabel: string;
  cancelLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({
  open,
  title,
  description,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-300 bg-black/50 flex items-center justify-center">
      <div className="bg-superblack p-6 rounded-lg border border-white/20 w-[90%] max-w-sm">
        <h2 className="text-lg font-semibold text-white mb-2">{title}</h2>
        <p className="text-white/70 mb-4">{description}</p>

        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 bg-gray text-white/80 rounded-md"
            onClick={onCancel}
          >
            {cancelLabel}
          </button>

          <button
            className="px-4 py-2 bg-army text-black rounded-md"
            onClick={onConfirm}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
