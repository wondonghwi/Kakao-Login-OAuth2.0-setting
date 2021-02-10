import React, {useEffect} from 'react'

const App = () => {

    useEffect(() => {
        if (!window.Kakao.isInitialized()) {
            window.Kakao.init('3ec7b728a7303ee68d5d48c94870e2d1');
        }
    }, []);

    const kakaoLogin = () => {
        window.Kakao.Auth.authorize({
            redirectUri: 'https://h-kakao.herokuapp.com/account/login/kakao/callback/'
        });
    };

    return (
        <div>
            <button onClick={kakaoLogin}>카카오 로그인</button>
        </div>
    );
};

export default App;