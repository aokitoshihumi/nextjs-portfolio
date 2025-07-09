import type { NextConfig } from "next";
import { preload } from "react-dom";

const nextConfig: NextConfig = {
    //カスタムHTTPヘッダーを使うために以下headers()関数を用いる。
    async headers() {
        return [
            {   //すべてのルートに対して適用する
                source: '/(.*)',
                headers: [
                    {   //ユーザにHTTPS通信を強要する。
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains;',
                    },
                    {   //クリックジャックの防止
                        key: 'Content-Security-Policy',
                        //いかなるサイトからもiframeなどの埋め込みを禁止する。
                        value: "frame-ancestors 'none';", 
                    },
                    {
                        key: 'Referrer-Policy',
                        value: "strict-origin-when-cross-origin",
                    },
                ],
            },
        ];
    },



    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.microcms-assets.io",
            },
        ],
    },
};

export default nextConfig;
