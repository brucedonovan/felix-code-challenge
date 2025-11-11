'use client'

export const ErrorModal = ({ props }: { props: { error: string | null } })  => {
    if (!props.error) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-md text-red-500">
                <h2 className="font-bold">Error</h2>
                <p>{props.error}</p>
            </div>
        </div>
    );
};
