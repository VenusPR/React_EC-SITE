import { Button } from 'components/button';
import { ChatBox } from 'components/chat/chat-box';
import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'type';
import { selectUser } from '../auth.selectors';
import styles from './chat-launcher.module.scss';
import { LoginForm } from './login-form';

const CHAT_SOCKET_URL = process.env.NEXT_PUBLIC_CHAT_URL as string;

const ChatLauncherView = (props: ConnectedProps<typeof connector>) => {
  const [showChat, setShowChat] = React.useState(false);
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const dismissChat = () => {
    setShowChat(false);
    btnRef.current && btnRef.current.focus();
  };

  return (
    <>
      <Button
        color="info"
        className={styles.btn}
        onClick={() => setShowChat(true)}
        ref={btnRef}
      >
        Chat
      </Button>
      {showChat && (
        <div className={styles.chatWrapper}>
          <div className="flex bg-teal-500 text-gray-100 justify-between items-center py-1 px-3">
            Chat
            <Button
              onClick={dismissChat}
              aria-label="Close"
              color="info"
              autoFocus
            >
              X
            </Button>
          </div>
          {props.user ? (
            <ChatBox
              socketEndpoint={CHAT_SOCKET_URL}
              userId={props.user.userId}
            />
          ) : (
            <div className={styles.chatContentWrapper}>
              <LoginForm />
            </div>
          )}
        </div>
      )}
    </>
  );
};

const connector = connect((state: RootState) => ({
  user: selectUser(state),
}));

export const ChatLauncher = connector(ChatLauncherView);
