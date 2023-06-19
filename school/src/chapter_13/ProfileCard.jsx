import React from 'react';
import Card from './Card';

export default function ProfileCard() {
    const profiles = [
        {
            id: 1,
            title: "MIYEON",
            color: 'red',
            intro: "저의 생일은 8월 12일 입니다.",
            src : 'https://i.namu.wiki/i/kkoXZ4czKFzKmhVeAZm35OsbYOAIAOXjNFIRyE19Eyv7JkQ-lv7J9yCxGFagepfOl35aHmaf1x8qwr4OA9doPJQaPWqtHE3zgVg7e5dCxze19TXMWCmYFfIhMdVBLXik3vk7cMi-ptO_iKAoF_d7hq2R8Tfd4rlnXG7uZ4JM194.webp'
        },
        {
            id: 2,
            title: "SOOJIN",
            color: 'pink',
            intro: "저는 ITZY가 좋아요.",
            src : 'https://i.namu.wiki/i/F8UTLb-xoyszM_RvJ1vwfBe1fxmAWWmYflPunTKuvl1AmD1dSShUh_VWJfApHVu71Po6iBfuasB39SdS3AlUVl0USc4wT1V6dzKsq_uO6-VSXobb8_Ga_Sxx25eOrCzSuTV7sZyBedMeRb_u83dD41GAfoSwdIy2j_VmwoLqGHM.webp'
        },
        {
            id: 3,            
            title: "YOOHYEON",
            color: 'purple',
            intro: "플로라이트 보면서 잘게요.",
            src : 'https://i.namu.wiki/i/F8UTLb-xoyszM_RvJ1vwfCNERA0W4cemdfremK_A9DELiATPuHy8TwS7_W4eJXTXXq6IIaybYL_CRuunYpCh4_P9mN4ZPfVfAO6mGyrquM080pwQMkb3u8D6x1DNNnjzhX7PAx11udcBAPF3D83hhbNX1wedTacJDZQygLccPTY.webp'
        },
        {
            id: 4,
            title: "LIA",
            color: 'orange',
            intro: "책읽기 좋아하시나요?",
            src : 'https://i.namu.wiki/i/kkoXZ4czKFzKmhVeAZm35BT1lpmxVQbBAAoEgCDRes-BmWC95vqwEEDqo-Ev9rhfCfFSJqRoPiP523S5_4rLo1p93IgnF0RKr8-0kqzWNfDGBGT0LZ3yO_gteS0y9x-gh3KuD6Ba87ID5eh_jygOu1tXAil5sCO-WmCtQONEplI.webp'
        },
        {
            id: 5,
            title: "IU",
            color: 'blue',
            intro: "아이유의 좋은날 듣고 있습니다.",
            src : 'https://i.namu.wiki/i/kkoXZ4czKFzKmhVeAZm35DX4nUdu6F6vT1eQtlESPiJnvZSlv9UYdst8HAomPg4ts9WfkbsMzwYahwc_hONRoEjoeYdfOq5rsSO_jApKiemzV0XFnlgqNUoRuslGEg_ECJM97QojTv2ED3xdbkjR-zC-d5zNS73xSRuk-hNwgV0.webp'
        }
    ];
    return (
        <div style={{display:'flex'}}>
            {profiles.map((li)=>{
                return (

                    <Card key={li.id} title={li.title} backgroundColor={li.color}>
                    <p>안녕하세요 {li.title}입니다,</p>
                    <p>{li.intro}</p>
                    <img src={li.src} alt={li.title} style={{width:"300px"}} />
                </Card>
                    )
            })}
        </div>
    );
}

