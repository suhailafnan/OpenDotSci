

// Define an interface for the component's props
interface JoinCommunityProps {
  className?: string; // className is optional
}

const JoinCommunity = ({ className }: JoinCommunityProps) => {
  return (
    <a
      href="https://t.me/your_telegram_group_link"
      target="_blank"
      rel="noopener noreferrer"
      className={`px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md font-medium transition duration-300 hover:scale-105
        border border-white hover:border-black ${className}`}
    >
      Join Community
    </a>
  );
};

export default JoinCommunity;