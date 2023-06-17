import React from "react";
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () => {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appID =1553737307;
        const serverSecret = "23c196a032c9ba1fd73c98d1fc4556a4";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, 
            serverSecret,
            roomId, 
            Date.now().toString(),
            "Shaswat"
        );
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `https://video-conferencing-web-app.vercel.app/room/${roomId}`,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall
            },
            showScreenSharingButton: true,
        });
    };

    return<div>
        <div ref={myMeeting} />
    </div>
};

export default RoomPage;