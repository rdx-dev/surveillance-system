interface LoadingProps {
  message?: string;
}

const Loading = ({ message = "Loading..." }: LoadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <div className="relative">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-gray-200 border-t-primary-600 rounded-full animate-spin"></div>

        {/* Camera icon in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl">🎥</span>
        </div>
      </div>

      <p className="mt-6 text-gray-600 font-medium">{message}</p>
      <p className="mt-2 text-gray-400 text-sm">Please wait...</p>
    </div>
  );
};

export default Loading;
