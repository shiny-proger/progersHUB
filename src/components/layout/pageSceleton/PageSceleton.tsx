

export default function PageSkeleton() {
  return (
    <>
        <div className="fixed z-50 inset-0 bg-(--bg) flex items-center">
            <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div
                className="w-20 h-20 border-4 border-transparent text-(--text) text-4xl animate-spin flex items-center justify-center border-t-(--text) rounded-full"
            >
                <div
                className="w-16 h-16 border-4 border-transparent text-(--osn-or) text-2xl animate-spin flex items-center justify-center border-t-(--osn-or) rounded-full"
                ></div>
            </div>
            </div>
        </div>
    </>
  );
}

