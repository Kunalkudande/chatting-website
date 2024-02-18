import Message from "./Message";

const Messages = () => {
	return (
		<div className='px-4 flex-1 overflow-auto' style={{ maxHeight: "calc(100vh - 200px)" }}>
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
            <Message />
            <Message />
            <Message />
		</div>
	);
};
export default Messages;