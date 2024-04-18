import { useEffect } from 'react';

const MessengerChat = () => {
    useEffect(() => {
        // Initialize Facebook Messenger chat plugin
        if (typeof window !== 'undefined' && window.FB) {
            window.FB.XFBML.parse();
        }
    }, []);

    return (
        <div className="fb-customerchat" attribution="biz_inbox" page_id="1028624343830718"></div>
    );
};

export default MessengerChat;
