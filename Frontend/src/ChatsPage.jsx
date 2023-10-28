import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('02dbf12a-d9dc-4c86-8baf-9b717c14e775', props.user.username, props.user.secret);
    return (<div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
        </div>)
}

export default ChatsPage